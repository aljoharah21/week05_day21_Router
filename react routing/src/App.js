import { Link, Route, useParams, useHistory } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* Route renders a component depending on the current path in the url */}
      <Route exact path="/" component={Home} />
      {/* render takes a function that returns JSX (another component), can be used to pass props*/}
      <Route path="/about" render={() => <About name="John" />} />
      {/* using the keyword exact will result in only rendering the component when the path matches exactly something like /products/1 will not match anymore */}
      <Route exact path="/products" component={Products} />
      {/* to specify a url parameter add a colon before the name of the url parameter */}
      <Route path="/products/:id" component={ProductDetails} />
    </div>
  );
}

function Navigation() {
  return (
    <div className="links">
      {/* link is used to switch the path, same as anchor tag in html <a></a> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/1">Product Details</Link>
    </div>
  );
}

function Home() {
  const history = useHistory();

  const goToProducts = () => {
    // history.push will switch the current path with the passed one
    history.push("/products");
  };
  const goBack = () => {
    // will go back to the previous path
    history.goBack();
  };
  const goForward = () => {
    // will go forward to the next path if exist
    history.goForward();
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToProducts}> Go to Products</button>
      <button onClick={goBack}> Go Back</button>
      <button onClick={goForward}> Go Forward</button>
    </div>
  );
}
function About({ name }) {
  return <h1>About: {name}</h1>;
}
function Products() {
  return <h1>Products</h1>;
}
function ProductDetails() {
  // use params is used to take out url parameters from the url
  const { id } = useParams();

  return <h1>Product Details {id}</h1>;
}

export default App;
