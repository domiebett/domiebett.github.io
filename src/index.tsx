import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootEl = document.getElementById('root') as Element;
const root = createRoot(rootEl);

root.render(
    <StrictMode>
        <App></App>
    </StrictMode>
);
