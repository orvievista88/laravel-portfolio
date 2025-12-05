import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeMessage from './WelcomeMessage';

// Get the div with id 'root'
const rootElement = document.getElementById('root');

// Check if the root element exists and then render the app
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <WelcomeMessage />
        </React.StrictMode>
    );
} else {
    console.error('Target container is not found.');
}
