import './App.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Switch>      
            <Route path="/" exact component = {ProductListing}/>
            {/* For github issue */}
            <Route path="/newFakeStore/" exact component = {ProductListing}/>
            <Route path="/product/:productID" exact component = {ProductDetail}/>
            <Route>404 Not Found!</Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
