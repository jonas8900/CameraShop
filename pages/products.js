import FilterSystem from "@/components/Productshop/FilterSystem";
import ProductIntroduction from "@/components/Productshop/ProductIntroduction";
import styled from "styled-components";
import ProductCard from "@/components/Productshop/ProductCard";
import {
  CameraProductList,
  LensProductList,
  LightProductList,
} from "@/components/DataCollection";

export default function Products({ productSelection, setProductSelection }) {
  console.log(productSelection);
  return (
    <>
      <ProductIntroduction
        productSelection={productSelection}
        setProductSelection={setProductSelection}
      />
      <FilterSystem />
      <StyledProductCardContainer>
        {(productSelection === "all" || productSelection === "cameras") &&
          CameraProductList.map((product) => (
            <ProductCard
              key={product.id}
              specialization={product.specialization}
              available={product.available}
              price={product.price}
              title={product.title}
              model={product.model}
              imageUrl={product.image}
            />
          ))}
        {(productSelection === "all" || productSelection === "lenses") &&
          LensProductList.map((product) => (
            <ProductCard
              key={product.id}
              specialization={product.specialization}
              available={product.available}
              price={product.price}
              title={product.title}
              model={product.model}
              imageUrl={product.image}
            />
          ))}
        {(productSelection === "all" || productSelection === "lights") &&
          LightProductList.map((product) => (
            <ProductCard
              key={product.id}
              specialization={product.specialization}
              available={product.available}
              price={product.price}
              title={product.title}
              model={product.model}
              imageUrl={product.image}
            />
          ))}
      </StyledProductCardContainer>
    </>
  );
}

const StyledProductCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10rem;
  margin-bottom: 5rem;
  gap: 8rem;

  @media (min-width: 1024px) {
    margin: 10rem 7rem 5rem 7rem;
  }

  @media (min-width: 1920px) {
    gap: 4rem;
    margin: 10rem 7rem 5rem 7rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 2000px) {
    margin: 10rem 6rem 10rem 6rem;
  }
`;
