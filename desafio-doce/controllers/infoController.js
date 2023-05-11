const os = require('os');
const path = require('path');
const { request, response } = require("express");



const infoPageController = (_req = request, res = response) => {
  const args = process.argv;
  const namePlataform = os.platform();
  const pathEject = path.resolve();
  const memoryRSS = process.memoryUsage().rss;
  const versionNode = process.versions.node;
  const directory = process.cwd().split('/')
  const folderProyect = directory.slice(directory.length - 1).join();
  const processID = process.pid;

  return res.status(200).json({
    Arguments: {
      args
    },
    path_eject: pathEject,
    name_plataform: namePlataform,
    memoryRSS: memoryRSS,
    version_Nodejs: versionNode,
    directory: folderProyect,
    process_ID: processID
  });
};

module.exports = infoPageController;