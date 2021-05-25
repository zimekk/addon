const addon = require("../build/Release/addon");

// https://nodejs.org/api/addons.html
// https://koistya.medium.com/how-to-call-c-c-code-from-node-js-86a773033892
// https://github.com/kriasoft/graphql-starter/tree/c98520681f7511f003a387c14e7c8d3fecf836f2/src/utils
// https://stackoverflow.com/questions/44363573/how-to-access-so-library-from-nodejs-application
// https://medium.com/@HolmesLaurence/integrating-node-and-python-6b8454bfc272
export default (text: string) => addon.hello(text);
