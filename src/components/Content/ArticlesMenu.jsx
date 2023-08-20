import React from "react";
import axios from "axios";
import Articles from "../../api/Articles";
import Famille from "../../api/Famille";
import { useState } from "react";

function ArticlesMenu({ addProduits, produits, setProduits }) {
  const [articles, setArticles] = useState();
  const [activeButton, setActiveButton] = useState(0);

  const handleFamille = (e) => {
    FilterByFamille(e.target.value);
    handleButtonClick(e.target.value);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const FilterByFamille = async (famille_id) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/filterbyFamille",
        {
          famille_id,
        }
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };
  return (
    <>
      <div className="card w-100">
        <div className="pt-3">
          <div className="button-list mb-2 d-flex flex-nowrap nav">
            <div className="button-list__item nav-item">
              <button
                type="button"
                value={null}
                onClick={handleFamille}
                className={`btn btn-light ${
                  activeButton == 0
                    ? "custom-btn-size button-list__item-active text-white"
                    : ""
                }`}
              >
                Toutes Familles
              </button>
            </div>{" "}
            <Famille handlechange={handleFamille} activeButton={activeButton} />
          </div>
          {/* <div className="button-list mb-2 d-flex flex-nowrap nav">
            <div className="button-list__item me-2 nav-item">
              <button
                type="button"
                value={null}
                onClick={handleSousFamille}
                className={`btn btn-light ${
                  activeButtonS == 0
                    ? "custom-btn-size button-list__item-active text-white"
                    : ""
                }`}
              >
                Toutes Sous Familles
              </button>
            </div>
            <SousFamilles
              sousfamilles={sousfamilles}
              setSousfamilles={setSousfamilles}
              handlechange={handleSousFamille}
              activeButtonS={activeButtonS}
            />
          </div> */}
        </div>
        <div className="product-list pt-1">
          <Articles
            setArticles={setArticles}
            articles={articles}
            addProduits={addProduits}
            produits={produits}
            setProduits={setProduits}
          />
        </div>
      </div>
    </>
  );
}

export default ArticlesMenu;
