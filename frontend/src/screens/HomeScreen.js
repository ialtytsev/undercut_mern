import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <>
      <h1>List products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <Link className="product-link" to={`/product/${product.slug}`}>
                <h2>{product.name}</h2>
              </Link>
              <h5>
                <strong>${product.price}</strong>
              </h5>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
