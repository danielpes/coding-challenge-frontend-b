import React  from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';
import App from './app/App';

import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<I18nextProvider i18n={ i18n }><App /></I18nextProvider>, document.getElementById('root'));
registerServiceWorker();
