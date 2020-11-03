import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as atatus from 'atatus-js';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
atatus.config('24970c25d6b44509bd69e498fea79949').install();
atatus.notify(new Error('Test Atatus Setup'));
// OK. Looks good now. Not sure why the lesson doesn't tell you to install atatus-js. Could you show me tests for 4.5 sure, I think I have an environmental issue though, but it workd on other computers
// How did you install puppeteer? you did installdefault puppeteer with Chromium or not? Yes, I installed it with chromium, I even tried uninstalling and doing it again with the same result
// I couldn't see Chromium browser in your machine. Shall I try to re-install it?
// Did you see similar thing before? Only for this task. I mean it was trying to download Chromium, y.es, both times that I installed puppeteer
// Let's see if it works this time, if not we can try headless mode. OK, just to let you know, I also even tried downloading chromium directly with still the same results
// Where did you instal Chromium? It should be in my program files, I think