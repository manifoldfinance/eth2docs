const snippets = [
  {
    label: 'module.tf',
    code: `module "some_node" {
      source = "path/to/this/module"
      destination_disk = "/dev/nvme0n1"
      talos_node_config = "NODECONFIGHERE"
      talos_version = "v1.0.3"
      worker_address = "x.x.x.x"
}`,
  },
  {
    label: 'variables.tf',
    code: ` variable "destination_disk" {
      type        = string
      description = "Device to copy the Talos installer to"
    }
    
    variable "talos_version" {
      type        = string
      description = "The version of Talos Linux to install on creation. Doesn't affect existing nodes."
    }
    
    variable "worker_address" {
      type        = string
      description = "IP address or hostname to deploy Talos onto"
    }
    
    variable "talos_node_config" {
      description = "The config that should be applied to the node. Keep in mind this only works on a fresh node."
    }
    Footer
    
}`,
  },
  {
    label: 'node.tf',
    code: `resource "null_resource" "node" {
      connection {
        type  = "ssh"
        user  = "root"
        host  = var.worker_address
        agent = true
      }
    
      provisioner "remote-exec" {
        inline = [
          "set -o errexit",
          "wipefs -af \${var.destination_disk}",
          "wget https://github.com/talos-systems/talos/releases/download/\${var.talos_version}/nocloud-amd64.raw.xz",
          "xzcat nocloud-amd64.raw.xz | dd of=\${var.destination_disk} bs=1M",
          # extend partition table to physical disk size
          "sgdisk --move-second-header \${var.destination_disk}",
          # create new CIDATA partition at the end of the disk
          "sgdisk --new 0:-100M:0 --typecode 0:8300 \${var.destination_disk} --change-name=0:'CIDATA' \${var.destination_disk}",
          "sync",
          "partprobe",
          "sleep 1",
    
          # format
          "mkfs.vfat -F 32 -n CIDATA /dev/disk/by-partlabel/CIDATA",
          # mount
          "mkdir -p /mnt/cidata",
          "mount /dev/disk/by-partlabel/CIDATA /mnt/cidata",
          # write config as user-data
          "echo \${base64encode(jsonencode(var.talos_node_config))} | base64 -d > /mnt/cidata/user-data",
          # done!
          "umount /mnt/cidata",
          "systemctl --no-block reboot",
        ]
      }
    }
}`,
  },
  {
    label: 'provider.tf',
    code: `terraform {
      required_providers {
        hcloud = {
          source = "hetznercloud/hcloud"
        }
      }
}`,
  },
];

export default snippets;
