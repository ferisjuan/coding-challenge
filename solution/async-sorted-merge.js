"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

const mergeSort = require("./merge-sort");
const parsedLogs = require("./log-parsers");

const resolver = (logSources, printer) => {
      const sortedLogs = mergeSort(logSources);
      const logs = parsedLogs(sortedLogs);

      logs.forEach(log => {
        printer.print(log);
      })

      printer.done();


      console.log("Async sort complete.")
    }

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    resolve(resolver(logSources, printer));
  });
};
