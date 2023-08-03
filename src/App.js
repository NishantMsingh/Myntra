import { Fragment } from "react";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home";
import Men from "./Screens/Men";
import Women from "./Screens/Women";
import Child from "./Screens/Child";
import Product from "./Screens/Product";
import React from 'react';


function App() {
 
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/product/:productCode" element={<Product location={location}/>} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Children" element={<Child />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
