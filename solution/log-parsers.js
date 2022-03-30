const parsedLogs = (sortedLogs) => {
  return sortedLogs.map(log => ({
    date: log.last.date,
    msg: log.last.msg
  }));
}

module.exports = parsedLogs;
