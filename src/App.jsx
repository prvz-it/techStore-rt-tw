import React from "react";
import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Layout from "./root/Layout";
import Home from "./pages/Home";
import Laptop from "./pages/Laptop";
import Desktop from "./pages/Desktop";
import Networking from "./pages/Networking";
import PrinterScanner from "./pages/PrinterScanner";
import PcParts from "./pages/PcParts";
import Product from "./pages/Product";
import Repair from "./pages/Repair";
import Contact from "./pages/Contact";

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/laptop" element={<Laptop/>}></Route>
    <Route path="/desktop" element={<Desktop/>}></Route>
    <Route path="/networking" element={<Networking/>}></Route>
    <Route path="/printer-scanner" element={<PrinterScanner/>}></Route>
    <Route path="/pc-parts" element={<PcParts/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/repair" element={<Repair/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
))

const App = () => {
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App