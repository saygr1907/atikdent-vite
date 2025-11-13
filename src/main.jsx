import React from 'react';
import { createRoot } from 'react-dom/client';
import * as TagManager from 'react-gtm-module';
import App from './App.jsx';
import './i18n';
import './styles.css';

const tagManagerArgs = {
    gtmId: 'GTM-T56KKFPV'
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
