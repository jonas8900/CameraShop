import ImageSlideShow from "@/components/Configuration/ImageSlideShow";
import ProductDetails from "@/components/Configuration/ProductDetails";
import ProductHighlight from "@/components/Configuration/ProductHighlight";
import PurchaseSection from "@/components/Configuration/PurchaseSection";
import SectionSeparation from "@/components/Configuration/SectionSeparation";
import SimilarProducts from "@/components/Configuration/SimilarProducts";
import {
  CameraProductList,
  LensProductList,
  LightProductList,
} from "@/components/DataCollection";
import Footer from "@/components/Footer/Footer";
import BackToPreviousNavBar from "@/components/Navigation/BackToPreviousNavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Configuration() {
  const router = useRouter();
  const currentId = router.query.configuration;
  const [anyProductFound, setAnyProductFound] = useState(null);

  useEffect(() => {
    const cameraProduct = CameraProductList.find(
      (product) => product.id == currentId
    );
    const lensProduct = LensProductList.find(
      (product) => product.id == currentId
    );
    const lightProduct = LightProductList.find(
      (product) => product.id == currentId
    );

    const productFound = cameraProduct || lensProduct || lightProduct;
    setAnyProductFound(productFound);
  }, [currentId]);

  // Hier wird geprüft, ob die Daten geladen sind
  if (anyProductFound === null) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <StyledNavigationBarForDesktop />
      <SectionSeparation product={anyProductFound} />
      <ImageSlideShow product={anyProductFound} />
      <PurchaseSection product={anyProductFound} />
      <ProductHighlight product={anyProductFound} />
      <ProductDetails product={anyProductFound} />
      <SimilarProducts product={anyProductFound} />
      <Footer />
    </main>
  );
}

const StyledNavigationBarForDesktop = styled(BackToPreviousNavBar)`
  @media (min-width: 1024px) {
    ul {
      display: flex;
      justify-content: right;
      gap: 2rem;
    }

    li {
      color: var(--color-primary-red);
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: black;
      }
    }
  }
`;
