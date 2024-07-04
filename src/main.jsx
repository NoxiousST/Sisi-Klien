import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";

import Layout from "@/Layout.jsx";
import T5 from './T5.jsx'
import T6 from "@/T6.jsx";
import T7 from "@/T7.jsx";
import T8 from "@/T8.jsx";
import T9 from "@/T9.jsx";
import T10 from "@/T10.jsx";
import T11 from "@/T11.jsx";
import T12 from "@/T12.jsx";
import T13 from "@/T13.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<T5/>}/>
            <Route path="tugas5" element={<T5/>}/>
            <Route path="tugas6" element={<T6/>}/>
            <Route path="tugas7" element={<T7/>}/>
            <Route path="tugas8" element={<T8/>}/>
            <Route path="tugas9" element={<T9/>}/>
            <Route path="tugas10" element={<T10/>}/>
            <Route path="tugas11" element={<T11/>}/>
            <Route path="tugas12" element={<T12/>}/>
            <Route path="tugas13" element={<T13/>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
