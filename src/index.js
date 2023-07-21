import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";
import './index.css';
import Projects from './pages/projects';
import ContactPage from './pages/contact';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "projects",
        element: <Projects />
    },
    {
        path: "contact",
        element: <ContactPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <RouterProvider router={router} />
)
