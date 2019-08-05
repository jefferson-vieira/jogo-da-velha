import './index.scss';

import { createElement } from 'react';
import { render } from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

render(createElement(App), document.getElementById('root'));

serviceWorker.register();
