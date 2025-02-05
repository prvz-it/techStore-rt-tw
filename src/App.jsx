import React from "react";
import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Layout from "./root/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
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