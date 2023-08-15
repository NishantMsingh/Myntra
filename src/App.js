
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home";
import Men from "./Screens/Men";
import Women from "./Screens/Women";
import Product from "./Screens/Product";
import React from "react";
import Auth from "./components/Auth/Auth";
import CartParent from "./components/Cart/CartParent";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/Home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/Auth" element={<Auth />} />
          <Route
            path="/product/:productCode"
            element={
              <>
                <Header />
                <Product location={location} />
                <Footer />
              </>
            }
          />
          <Route
            path="/Women"
            element={
              <>
                <Header />
                <Women />
                <Footer />
              </>
            }
          />
          <Route
            path="/Men"
            element={
              <>
                <Header />
                <Men />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/checkOut" element={<CartParent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
