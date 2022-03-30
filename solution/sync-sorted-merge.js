"use strict";

// Print all entries, across all of the sources, in chronological order.

const mergeSort = require("./merge-sort");
const parsedLogs = require("./log-parsers");

module.exports = (logSources, printer) => {
  const sortedLogs = mergeSort(logSources);
  const logs = parsedLogs(sortedLogs);

  logs.forEach(log => {
    printer.print(log);
  })

  printer.done();

  return console.log("Sync sort complete.");
};
