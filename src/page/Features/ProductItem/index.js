import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/modules/Loading";
// import DetailsProduct from "./DetailsProduct";
const DetailsProduct = React.lazy(() =>
  import("./DetailsProduct")
);

export default function Product({ listUser }) {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  console.log(product);
  return (
    <>
      {product && (
        <Suspense fallback={<Loading />}>
          <DetailsProduct item={product} />
        </Suspense>
      )}
    </>
  );
}
