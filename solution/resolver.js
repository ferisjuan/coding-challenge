const mergeSort = require("./merge-sort");
const parsedLogs = require("./log-parsers");

const resolver = (logSources, printer, type) => {
  const sortedLogs = mergeSort(logSources);
  const logs = parsedLogs(sortedLogs);

  logs.forEach(log => {
    printer.print(log);
  })

  printer.done();

  console.log(`${type} sort complete.\n\n`)
}

module.exports = resolver;
