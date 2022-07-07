const sidebar = require("./generatedSidebarsProtodocs");

sidebar.protodocs[1] = {
  type: "category",
  label: "Erigon",
  items: ["common.proto",
  "consensus.proto",
  "descriptor.proto",
  "downloader.proto",
  "empty.proto",
  "eth.proto",
  "ethbackend.proto",
  "kv.proto",
  "sentry.proto",
  "trace.proto",
  "txpool.proto",
  "txpool_control.proto",
  "types.proto"],
};

module.exports = sidebar;
  