import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductSelectButton from "../Buttons/ProductSelectButton";

export default function PurchaseSection({ product }) {
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [quantity, setQuantity] = useState(1);
  const [daysToRent, setDaysToRent] = useState(0);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (product) {
      setPrice(product.price * quantity * daysToRent);
    }
  }, [product, quantity, daysToRent]);

  function handleProductPrice(event) {
    setQuantity(event.target.value);
  }

  function handleChangeStartDate(event) {
    setStartDate(event.target.value);
  }

  function handleChangeEndDate(event) {
    setEndDate(event.target.value);
  }

  useEffect(() => {
    const temporaryStartDate = new Date(startDate);
    const temporaryEndDate = new Date(endDate);

    const differenceInTime =
      temporaryEndDate.getTime() - temporaryStartDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays && differenceInDays > 0) {
      setDaysToRent(differenceInDays);
    } else {
      setDaysToRent(1);
    }
  }, [endDate, startDate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledArticle>
        <StyledLabel id="quantity">Menge:</StyledLabel>
        <StyledQunatity
          type="number"
          id="quantity"
          name="quantity"
          defaultValue={1}
          min="1"
          max="10"
          onChange={(event) => {
            handleProductPrice(event);
          }}
        />
      </StyledArticle>
      <StyledArticleForDates>
        {" "}
        <StyledDatePickerArticle>
          <StyledLabel id="duration">Mietdauer:</StyledLabel>
          <StyledDateArticle>
            <p>von</p>
            <StyledDatePicker
              onChange={handleChangeStartDate}
              type="date"
              id="startdate"
              name="startdate"
              defaultValue={today}
              min={today}
              max="2024-12-31"
            />
            <p>bis</p>
            <StyledDatePicker
              onChange={handleChangeEndDate}
              type="date"
              id="enddate"
              name="enddate"
              min={startDate}
              max="2024-12-31"
            />
          </StyledDateArticle>
        </StyledDatePickerArticle>
      </StyledArticleForDates>
      {product && product.category === "DSLR" && (
        <StyledArticle>
          <StyledLabel id="lense">Objektiv:</StyledLabel>
          <StyledSelect id="lense" name="lense" defaultValue="none">
            <StyledOption value="none">Kein Objektiv</StyledOption>
            <StyledOption value="18-55mm">18-55mm</StyledOption>
            <StyledOption value="55-200mm">55-200mm</StyledOption>
            <StyledOption value="18-55mm + 55-200mm">
              18-55mm + 55-200mm
            </StyledOption>
          </StyledSelect>
        </StyledArticle>
      )}
      <StyledArticle>
        <StyledLabel>Preis: </StyledLabel>
        <StyledParagraph>{price}€</StyledParagraph>
        <p>pro Tag</p>
      </StyledArticle>
      <StyledSubmitButton type="submit">In den Warenkorb</StyledSubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background-color: #d9d9d9;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 4rem;
  gap: 4rem;
  padding: 2rem;
`;

const StyledArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledArticleForDates = styled.article`
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

const StyledDatePickerArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 2rem;
  }
`;

const StyledDateArticle = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 2rem;
  }
`;

const StyledLabel = styled.label`
  font-size: var(--font-size-small-headline-mobile);
  @media (min-width: 1024px) {
    font-size: var(--font-size-greater-text-desktop);
  }
`;

const StyledDatePicker = styled.input`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.6rem;
  width: 100%;
  border: none;
`;

const StyledQunatity = styled.input`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.6rem;
  width: 6rem;
  border: none;
`;

const StyledSubmitButton = styled(ProductSelectButton)``;

const StyledOption = styled.option`
  font-family: Arial;
  margin: auto;
  padding: 0.6rem;
`;
const StyledSelect = styled.select`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.6rem;
`;

const StyledParagraph = styled.p`
  background-color: white;
  font-size: var(--font-size-subheadline-mobile);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--color-primary-red);
  font-weight: var(--font-weight-semibold);
  padding: 1rem;

  @media (min-width: 1024px) {
    font-size: var(--font-size-greater-text-desktop);
  }
`;
