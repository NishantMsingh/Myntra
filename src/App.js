
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";

import { lazy, Suspense } from 'react';
import FallBack from "./components/Fallback/FallBack";
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
               <Suspense fallback={<FallBack/>}>
               <LazyHome  />
               </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="/ConfirmedOrder"
            element={
              <Suspense fallback={<FallBack/>}>
              <LazyConfirmedOrder  />
            </Suspense>
                
          
            }
          />
          <Route path="/Auth" element={
            <Suspense fallback={<FallBack/>}>
              <LazyAuth/>
            </Suspense>
          } />
          <Route
            path="/product/:productCode"
            element={
              <>
              
              
                <Suspense fallback={<FallBack/>}>
                <Header />
              <LazyProduct location={location}/>
              <Footer />
            </Suspense>
                
              </>
            }
          />
          <Route
            path="/Women"
            element={
              <>
         
                <Suspense fallback={<FallBack/>}>
                <Header />
               <LazyWomen  />
               <Footer />
               </Suspense>
              
              </>
            }
          />
          <Route
            path="/Men"
            element={
              <>
            
                <Suspense fallback={<FallBack/>}>
                <Header />
               <LazyMen  />
               <Footer />
               </Suspense>
              
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
               
                <Suspense fallback={<FallBack/>}>
                <Header />
               <LazyHome  />
               <Footer />
               </Suspense>
               
              </>
            }
          />
          <Route path="/checkOut" element={
            <Suspense fallback={<FallBack/>}> 
              <LazyCartParent/>
            </Suspense>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
