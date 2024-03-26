import FilterSystem from "@/components/Productshop/FilterSystem";
import ProductIntroduction from "@/components/Productshop/ProductIntroduction";
import styled from "styled-components";
import ProductCard from "@/components/Productshop/ProductCard";
import {
  CameraProductList,
  LensProductList,
  LightProductList,
} from "@/components/DataCollection";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Products({ productSelection, setProductSelection }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  function filterProducts(productList, search) {
    // this function filters the products, which are filtered by the fields in the filter system

    if (filtered.length > 0) {
      return productList.filter((product) => {
        // filter every product by checking each item if there is a match with the product
        return filtered.every(
          (item) =>
            (item.Modell ? item.Modell === product.title : true) &&
            (item.Kategorie
              ? item.Kategorie === product.specialization
              : true) &&
            (item.Preis ? item.Preis > product.price : true)
        );
      });
    }

    // this function filters the products, which are filtered by the search input
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
          .includes(lowercaseSearch) ||
        product.specialization
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(lowercaseSearch)
      );
    });
  }

  //reset the filtered array when the search input changes

  useEffect(() => {
    setFiltered([]);
  }, [search]);

  const searchedCameras = filterProducts(CameraProductList, search);
  const searchedLenses = filterProducts(LensProductList, search);
  const searchedLights = filterProducts(LightProductList, search);

  function handleClickOnConfiguration(productId) {
    router.push("/" + productId);
  }

  return (
    <>
      <ProductIntroduction
        productSelection={productSelection}
        setProductSelection={setProductSelection}
      />
      <FilterSystem
        search={search}
        setSearch={setSearch}
        setFiltered={setFiltered}
        filtered={filtered}
      />
      <StyledProductCardContainer>
        {(productSelection === "all" || productSelection === "cameras") &
        (search.trim() === "") &
        (filtered.length === 0)
          ? CameraProductList.map((product) => (
              <ProductCard
                key={product.id}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
                onClick={() => handleClickOnConfiguration(product.id)}
              />
            ))
          : null}
        {(productSelection === "all" || productSelection === "lenses") &
        (search.trim() === "") &
        (filtered.length === 0)
          ? LensProductList.map((product) => (
              <ProductCard
                key={product.id}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
                onClick={() => handleClickOnConfiguration(product.id)}
              />
            ))
          : null}
        {(productSelection === "all" || productSelection === "lights") &
        (search.trim() === "") &
        (filtered.length === 0)
          ? LightProductList.map((product) => (
              <ProductCard
                key={product.id}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
                onClick={() => handleClickOnConfiguration(product.id)}
              />
            ))
          : null}
        {((productSelection === "all" && search !== "") ||
          (productSelection === "all" && filtered.length > 0) ||
          filtered.length > 0 ||
          search !== "") &&
          searchedCameras
            .concat(searchedLenses)
            .concat(searchedLights)
            .map((product) => (
              <ProductCard
                key={product.model}
                specialization={product.specialization}
                available={product.available}
                price={product.price}
                title={product.title}
                model={product.model}
                imageUrl={product.image}
                onClick={() => handleClickOnConfiguration(product.id)}
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
