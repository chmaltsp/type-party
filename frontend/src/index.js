import express from 'express';
import app from './server';

if (module.hot) {
  module.hot.accept('./server', function() {
    // tslint:disable
    console.log('🔁  HMR Reloading `./server`...');
  });
  // tslint:disable
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, function(err) {
    if (err) {
      // tslint:disable
      console.error(err);
      return;
    }
    // tslint:disable
    console.log(`> Started on port ${port}`);
  });
