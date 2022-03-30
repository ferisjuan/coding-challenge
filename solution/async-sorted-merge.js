"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

const resolver = require("./resolver");

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    resolve(resolver(logSources, printer, 'Async'));
  });
};
