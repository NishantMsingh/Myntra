import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home";
import Men from "./Screens/Men";
import Women from "./Screens/Women";
import Child from "./Screens/Child";
function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Children" element={<Child />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
