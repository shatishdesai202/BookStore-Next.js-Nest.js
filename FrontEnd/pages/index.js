import Product from "@/components/Product";
import withPrivateRoute from "@/components/withPrivateRoute";
import { URL } from "@/constant/const";
import InfiniteScroll from "@/InfiniteScroll/InfiniteScroll";
import { useCallback, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const loadMoreData = useCallback(async () => {
    try {
      setPage(page + 1);
      const response = await fetch(`${URL.BASE_URL}/api/books/${page}`);
      if (response.ok) {
        const { books } = await response.json();
        setProducts((prevProducts) => [...prevProducts, ...books]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error loading more data:", error);
    }
  }, [products]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
      <InfiniteScroll loadMoreData={() => loadMoreData()}>
        {[...products].map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default withPrivateRoute(Home);
