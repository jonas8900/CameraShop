import {
  faChevronCircleLeft,
  faChevronDown,
  faChevronUp,
  faSearch,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

export default function FilterSystem({ search, setSearch }) {
  const [showMore, setShowMore] = useState(false);
  const [arrow, setArrow] = useState(faChevronDown);

  function handleShowMore() {
    setShowMore(!showMore);
    if (!showMore) {
      setArrow(faChevronUp);
    } else {
      setArrow(faChevronDown);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <>
      <StyledSection>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSearchArticle>
            <StyledShowMoreIcon icon={arrow} onClick={handleShowMore} />
            <input type="text" placeholder="Suche" onChange={handleSearch} />
            <StyledSubmitButton type="submit">
              <StyledSearchIcon icon={faSearch} />
            </StyledSubmitButton>
          </StyledSearchArticle>
          {showMore && (
            <StyledMoreFilter>
              <StyledFilterArticle>
                <label id="Modell">Modell</label>
                <select name="Modell" id="Modell" value="none">
                  <StyledDefaultOption value="none">
                    Wähle ein Modell
                  </StyledDefaultOption>
                  <StyledOption value="Canon">Canon</StyledOption>
                  <StyledOption value="Sony">Sony</StyledOption>
                  <StyledOption value="Nikon">Nikon</StyledOption>
                  <StyledOption value="Z-Cam">Z-Cam</StyledOption>
                  <StyledOption value="GoPro">GoPro</StyledOption>
                  <StyledOption value="DJI">DJI</StyledOption>
                </select>
              </StyledFilterArticle>
              <StyledFilterArticle>
                <label id="Preis">Preis</label>
                <select name="Preis" id="Preis" value="none">
                  <StyledDefaultOption value="none">
                    Wähle einen Preis
                  </StyledDefaultOption>
                  <StyledOption value="unter 20 Euro">
                    unter 20 Euro
                  </StyledOption>
                  <StyledOption value="bis 50 Euro">bis 50 Euro</StyledOption>
                  <StyledOption value="bis 100 Euro">bis 100 Euro</StyledOption>
                  <StyledOption value="bis 200 Euro">bis 200 Euro</StyledOption>
                  <StyledOption value="über 200 Euro">
                    über 200 Euro
                  </StyledOption>
                </select>
              </StyledFilterArticle>
              <StyledFilterArticle>
                <label id="Kategorie">Kategorie</label>
                <select id="Kategorie" name="Kategorie" value="none">
                  <StyledDefaultOption value="none">
                    Wähle eine Kategorie
                  </StyledDefaultOption>
                  <StyledOption value="DSLR">DSLR</StyledOption>
                  <StyledOption value="Kompaktkamera">
                    Kompaktkamera
                  </StyledOption>
                  <StyledOption value="Drohne">Drohne</StyledOption>
                  <StyledOption value="Actionkamera">Actionkamera</StyledOption>
                  <StyledOption value="Actionkamera">Objektiv</StyledOption>
                  <StyledOption value="Actionkamera">Spotlights</StyledOption>
                </select>
              </StyledFilterArticle>
              <label id="Suche"></label>
            </StyledMoreFilter>
          )}
        </StyledForm>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  background-color: var(--color-secondary-grey-backgroundsection);
  margin: 2rem auto;
  padding: 1rem;

  label {
    @media (min-width: 1024px) {
      font-size: var(--font-size-common-text-desktop);
    }
  }

  select {
    @media (min-width: 1024px) {
      font-size: var(--font-size-smaller-text-desktop);
    }
  }
`;

const StyledOption = styled.option`
  font-family: Arial;
`;

const StyledDefaultOption = styled.option`
  font-family: Arial;
  color: grey;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledSearchArticle = styled.article`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: flex-end;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-areas: "icon input button";
    gap: 0rem;
  }

  input {
    width: 15rem;
    padding: 0.3rem;
    border: none;
    border-radius: 0.5rem;
    height: 2.5rem;
    margin: auto;
    font-size: var(--font-size-small-text-desktop);
    color: var(--color-secondary-grey-text);
    @media (max-width: 400px) {
      width: 10rem;
    }
    @media (min-width: 768px) {
      width: 20rem;
      margin: auto 0 auto auto;
    }
  }
`;

const StyledMoreFilter = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60%;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledFilterArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 1rem 0;
  gap: 1.5rem;

  @media (min-width: 1600px) {
    gap: 2rem;
  }
`;

const StyledShowMoreIcon = styled(FontAwesomeIcon)`
  justify-self: flex-start;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin: auto auto auto 0;
  cursor: pointer;
`;

const StyledSubmitButton = styled.button`
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--color-primary-red);
  color: var(--color-white);
  transition: all 0.3s ease;
  cursor: pointer;
  margin: auto;
  @media (max-width: 400px) {
    width: 2rem;
    height: 2rem;
  }

  &:active {
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;
const StyledSearchIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
  padding: 0;
  @media (max-width: 400px) {
    width: 1rem;
    height: 1rem;
  }
`;
