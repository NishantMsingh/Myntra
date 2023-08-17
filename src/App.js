
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import { lazy, Suspense } from 'react';
// Lazy 
const LazyConfirmedOrder = lazy(() => import('./Screens/ConfirmOrder'));
const LazyHome = lazy(() => import('./Screens/Home'));
const LazyAuth =lazy(()=>import("./components/Auth/Auth"));
const LazyCartParent=lazy(()=>import("./components/Cart/CartParent"));
const LazyMen=lazy(()=>import("./Screens/Men"));
const LazyWomen=lazy(()=>import("./Screens/Women"));
const LazyProduct=lazy(()=>import("./Screens/Product"));

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
               <Suspense fallback={<div>Loading...</div>}>
               <LazyHome  />
               </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="/ConfirmedOrder"
            element={
              <Suspense fallback={<div>Loading...</div>}>
              <LazyConfirmedOrder  />
            </Suspense>
                
          
            }
          />
          <Route path="/Auth" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAuth/>
            </Suspense>
          } />
          <Route
            path="/product/:productCode"
            element={
              <>
                <Header />
              
                <Suspense fallback={<div>Loading...</div>}>
              <LazyProduct location={location}/>
            </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="/Women"
            element={
              <>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
               <LazyWomen  />
               </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="/Men"
            element={
              <>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
               <LazyMen  />
               </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
               <LazyHome  />
               </Suspense>
                <Footer />
              </>
            }
          />
          <Route path="/checkOut" element={
            <Suspense fallback={<div>Loading...</div>}> 
              <LazyCartParent/>
            </Suspense>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
