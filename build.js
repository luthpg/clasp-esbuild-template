const { GasPlugin } = require('esbuild-gas-plugin');
require('esbuild')
  .build({
    entryPoints: ['src/app.ts'],
    bundle: true,
    outfile: 'public/bundle.js',
    plugins: [GasPlugin],
  })
  .catch((reason) => {
    console.error(reason);
    process.exit(1);
  });
