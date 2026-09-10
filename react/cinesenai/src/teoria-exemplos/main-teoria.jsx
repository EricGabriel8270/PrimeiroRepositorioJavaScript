import { StrictMode } from "react";

import {createRoot}from "react-dom/client"

import AppTeoria from "./appTeoria.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppTeoria/>
    </StrictMode>
);