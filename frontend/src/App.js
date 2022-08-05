import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Undercut</a>
      </header>
      <main>
        <h1>List products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <a className="product-link" href={`/product/${product.slug}`}>
                  <h2>{product.name}</h2>
                </a>
                <h5>
                  <strong>${product.price}</strong>
                </h5>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
