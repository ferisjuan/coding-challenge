"use strict";

// Print all entries, across all of the sources, in chronological order.

const resolver = require("./resolver");

module.exports = (logSources, printer) => {
  resolver(logSources, printer, 'Sync');
};
