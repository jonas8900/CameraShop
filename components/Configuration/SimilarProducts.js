import { useEffect, useState } from "react";
import ProductCard from "../Productshop/ProductCard";
import {
  CameraProductList,
  LensProductList,
  LightProductList,
} from "@/components/DataCollection";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function SimilarProducts({ product }) {
  const [similarProducts, setSimilarProducts] = useState([]);
  const router = useRouter();

  const combinedProductList = [
    ...CameraProductList,
    ...LensProductList,
    ...LightProductList,
  ];

  useEffect(() => {
    if (product) {
      const productListWithSimilarProducts = combinedProductList.filter(
        (similarProduct) =>
          similarProduct.category === product.category &&
          similarProduct.title === product.title &&
          similarProduct.id !== product.id
      );
      if (productListWithSimilarProducts.length > 4) {
        setSimilarProducts([
          productListWithSimilarProducts[0],
          productListWithSimilarProducts[1],
          productListWithSimilarProducts[2],
          productListWithSimilarProducts[3],
        ]);
      } else if (productListWithSimilarProducts.length < 4) {
        const productListWithSimilarProducts = combinedProductList.filter(
          (similarProduct) =>
            similarProduct.category === product.category &&
            similarProduct.id !== product.id
        );

        if (productListWithSimilarProducts.length > 4) {
          setSimilarProducts([
            productListWithSimilarProducts[0],
            productListWithSimilarProducts[1],
            productListWithSimilarProducts[2],
            productListWithSimilarProducts[3],
          ]);
        } else {
          setSimilarProducts(productListWithSimilarProducts);
        }
      } else {
        setSimilarProducts(productListWithSimilarProducts);
      }
    }
  }, [product]);

  function handleProductClick(id) {
    router.push(`/${id}`);
  }

  return (
    <StyledSection>
      <StyledHeadline>
        Ähnliche <StyledSpan>Produkte</StyledSpan>
      </StyledHeadline>
      <StyledArticle>
        {similarProducts.length > 0 &&
          similarProducts.map((product) => (
            <ProductCard
              key={product.id}
              specialization={product.specialization}
              available={product.available}
              price={product.price}
              title={product.title}
              model={product.model}
              imageUrl={product.image}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 8rem 3rem 6rem 3rem;
`;

const StyledArticle = styled.article`
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem 3rem 6rem 3rem;
  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;
const StyledSpan = styled.span`
  color: var(--color-primary-red);
`;

const StyledHeadline = styled.h1`
  font-size: var(--font-size-sectionheadline-mobile);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  margin: 2rem;
  padding-top: 2rem;

  span {
    color: var(--color-primary-red);
  }

  @media (min-width: 1024px) {
    text-align: left;
    margin-left: 6rem;
    font-size: 2.8rem;
  }
`;
