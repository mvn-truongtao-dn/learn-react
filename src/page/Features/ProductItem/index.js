import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { apiProductGetDetails } from "../../../api/product/product.api";
import Loading from "../../../components/modules/Loading";
// import DetailsProduct from "./DetailsProduct";
const DetailsProduct = React.lazy(() => import("./DetailsProduct"));

export default function Product({ listUser }) {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    apiProductGetDetails(productId).then((e) => setProduct(e.data));
  }, [productId]);

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
