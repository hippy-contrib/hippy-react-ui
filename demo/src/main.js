import { Hippy } from 'hippy-react';
import App from './app';
// import * as serviceWorker from './serviceWorker';

new Hippy({
  appName: 'demo',
  entryPage: App,
}).start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
