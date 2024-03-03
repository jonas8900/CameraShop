import FilterSystem from "@/components/Productshop/FilterSystem";
import ProductIntroduction from "@/components/Productshop/ProductIntroduction";
import styled from "styled-components";
import ProductCard from "@/components/Productshop/ProductCard";
import {
  CameraProductList,
  LensProductList,
  LightProductList,
} from "@/components/DataCollection";
import { useState } from "react";

export default function Products({ productSelection, setProductSelection }) {
  const [search, setSearch] = useState("");

  function filterProducts(productList, search) {
    const lowercaseSearch = search.toLowerCase().split(" ").join("");
    return productList.filter((product) => {
      return (
        product.title
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(lowercaseSearch) ||
        product.model
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(lowercaseSearch) ||
        (product.title + " " + product.model)
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(lowercaseSearch) ||
        product.category
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(lowercaseSearch)
      );
    });
  }

  const searchedCameras = filterProducts(CameraProductList, search);
  const searchedLenses = filterProducts(LensProductList, search);
  const searchedLights = filterProducts(LightProductList, search);

  // this filtersystem searches for the product title, model and category and filters the products by the search input

  return (
    <>
      <ProductIntroduction
        productSelection={productSelection}
        setProductSelection={setProductSelection}
      />
      <FilterSystem search={search} setSearch={setSearch} />
      <StyledProductCardContainer>
        {(productSelection === "all" || productSelection === "cameras") &
        (search.trim() === "")
          ? CameraProductList.map((product) => (
              <ProductCard
                key={product.id}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
              />
            ))
          : null}
        {(productSelection === "all" || productSelection === "lenses") &
        (search.trim() === "")
          ? LensProductList.map((product) => (
              <ProductCard
                key={product.id}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
              />
            ))
          : null}
        {(productSelection === "all" || productSelection === "lights") &
        (search.trim() === "")
          ? LightProductList.map((product) => (
              <ProductCard
                key={product.id}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
              />
            ))
          : null}

        {(productSelection === ("all" & (search !== "")) || search !== "") &&
          searchedCameras.map((product) => (
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
        {((productSelection === "all") & (search !== "") || search !== "") &&
          searchedLenses.map((product) => (
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
        {((productSelection === "all") & (search !== "") || search !== "") &&
          searchedLights.map((product) => (
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
