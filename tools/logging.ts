import * as colors from 'colors';

export const logDebug = (msg, ...args) => {
  if (args.length) {
    console.log(colors.blue(`${msg}`), args);
  } else {
    console.log(colors.blue(`${msg}`));
  }
};
export const logWarning = msg => {
  console.log(colors.yellow(`Warning: ${msg}`));
};
export const logError = msg => {
  console.log(colors.red(`ERROR: ${msg}`));
};
