import { useEffect, useState, useRef, useCallback } from "react";

const LIMIT = 10;

export default function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  // Fetch products
  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      const data = await res.json();

      setProducts((prev) => [...prev, ...data.products]);

      if (data.products.length < LIMIT) setHasMore(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    }

    setLoading(false);
  };

  // Load on skip change
  useEffect(() => {
    fetchProducts();
  }, [skip]);

  // Intersection Observer for infinite scroll
  const lastRowRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setSkip((prev) => prev + LIMIT);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Editable title handler
  const handleTitleChange = (index, newTitle) => {
    setProducts((prev) => {
      const updated = [...prev];
      updated[index].title = newTitle;
      return updated;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Table (Infinite Scroll)</h2>

      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            if (index === products.length - 1) {
              return (
                <tr ref={lastRowRef} key={product.id}>
                  <td>
                    <input
                      value={product.title}
                      onChange={(e) =>
                        handleTitleChange(index, e.target.value)
                      }
                    />
                  </td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.rating}</td>
                </tr>
              );
            }

            return (
              <tr key={product.id}>
                <td>
                  <input
                    value={product.title}
                    onChange={(e) =>
                      handleTitleChange(index, e.target.value)
                    }
                  />
                </td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more products</p>}
    </div>
  );
}
