import React, { Suspense, lazy } from "react";
import Header from "header";
import { Switch, Route } from "react-router";
import Loading from "components/loading";
import './style.scss';

const MainPage = lazy(() => import('pages/main'));
const ProductsPage = lazy(() => import('pages/products'));
const ProductPage = lazy(() => import('pages/product'));
export default function App() {
  return (
    <>
    <Header />
      <aside>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/' render={() => <MainPage/>}/>
            <Route path='/products/:type' render={() => <ProductsPage/>}/>
            <Route path='/product/:article' render={() => <ProductPage/>}/>
          </Switch>
        </Suspense>
      </aside>
      
    </>
  );
}
