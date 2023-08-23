import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Portfolio from 'components/portfolio/Portfolio';

const rootEl = document.getElementById('root') as Element;
const root = createRoot(rootEl);
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/portfolio',
        element: <Portfolio />
    }
])

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
