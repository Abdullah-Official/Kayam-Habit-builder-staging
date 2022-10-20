// Version if the local Node.js version supports async/await
// webpack.config.js
 
const webpack = require('webpack')
const slsw = require('serverless-webpack');
const { prisma } = require('@prisma/client');
 
module.exports = (async () => {
  const accountId = await slsw.lib.serverless.providers.aws.getAccountId();
  return {
    entry: './handler.js',
    target: 'node',
    plugins: [
      new webpack.DefinePlugin({
        AWS_ACCOUNT_ID: `${accountId}`,
      }),
    ],
    module: {
      loaders: [slsw, prisma]
    }
  };
})();