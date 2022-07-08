---
tags: ["how to", "docker"]
title: How to Set Up Remote Access to Docker Daemon 
author: The Contributors
---

# How to Set Up Remote Access to Docker Daemon 

In this post, we will show you how to configure Docker daemon to manage the Docker host over TCP.

## Prerequisites

-   debian based linux distro
-   docker-ce installed 
-   sudo privileges

```bash
docker --version
```

You should see the following output:

```bash
Docker version 20.10.5, build 55c4c88

```

## Configure Docker Daemon

First, you will need to create a directory to store the Docker daemon configuration file. You can create it with the following command:

```bash
mkdir -p /etc/systemd/system/docker.service.d
```

Next, create a new file to store the daemon options.

```bash
nano /etc/systemd/system/docker.service.d/options.conf
```

Add the following lines:

```bash
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H unix:// -H tcp://0.0.0.0:2375

```

Save and close the file, then reload the systemd daemon to apply the changes:

```bash
systemctl daemon-reload
```

Next, restart the Docker service to apply the changes:

```bash
systemctl restart docker
```

At this point, the Docker daemon is configured and listening on port 2375. You can check it with the following command:

```bash
ps aux | grep dockerd
```

You should get the following output:

```bash
root       48453  1.2  2.4 1005080 98520 ?       Ssl  00:58   0:00 /usr/bin/dockerd -H unix:// -H tcp://0.0.0.0:2375
root       48775  0.0  0.0  12108   992 pts/0    S+   00:58   0:00 grep --color=auto dockerd

```

##  Configure Local System to Connect to the Docker Daemon

Before starting, make sure Docker and Docker compose are installed on your local system. Now, you will need to configure your local system to connect to the Docker daemon on the remote Docker host.

You can use a single one-liner to direct connect to the Docker daemon and run command on the remote Docker host. You can use the` DOCKER_HOST` variable to define the Docker daemon address.

For example, run the following command to run the docker info command on the remote Docker host:

```bash
DOCKER_HOST=tcp://remote-docker-host-ip:2375 docker info
```

Or

```bash
docker -H tcp://remote-docker-host-ip:2375 docker info
```

You should get the output of the docker info command as below:

```bash
Containers: 2
Images: 3
Storage Driver: overlay2
 Backing Filesystem: xfs
 Supports d_type: true
 Native Overlay Diff: true
Execution Driver: 
Kernel Version: 4.18.0-193.6.3.el8_2.x86_64
Operating System: CentOS Linux 8 (Core)
CPUs: 2
Total Memory: 3.846 GiB
Name: centos8
ID: S56P:VPIW:CMGZ:GAFN:YZNG:22CE:OBY3:SKEW:JAMT:DLD4:FG5K:QXYR
Http Proxy: 
Https Proxy: 
No Proxy: 
Labels:

```

You can also run the docker-compose command on the remote host as shown below:

```bash
docker-compose -H tcp://remote-docker-host-ip:2375 --version
```

You can also set DOCKER\_HOST variable in your .bashrc file. So you don’t need to specify every time when executing docker or docker-compose command.

You can set it with the following command:

```bash
echo "export DOCKER_HOST=tcp://remote-docker-host-ip:2375" >> ~/.bashrc
```

Next, activate the configuration with the following command:

```bash
source ~/.bashrc
```

Now, you can manage remote Docker host by just running the docker and docker-compose command locally.

For example, run the following command to check the Docker version on the remote host:

```bash
docker --version
```

## Conclusion

In this guide, we learned how to configure Docker daemon to connect the remote Docker host over TCP and manage it from the local system.

#### References
2022-07-07T04:02:10 (UTC -07:00)