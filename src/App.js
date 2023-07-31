import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home";
import Men from "./Screens/Men";
import Women from "./Screens/Women";
import Child from "./Screens/Child";
import Product from "./Screens/Product";
function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Product />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Children" element={<Child />} />
          <Route path="*" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
