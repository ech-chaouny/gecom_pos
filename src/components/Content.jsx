import React from "react";
import PaymentMenu from "./Content/PaymentMenu";
import ArticlesMenu from "./Content/ArticlesMenu";
import { useState } from "react";

function Content() {
  const [produits, setProduits] = useState([]);
  const addProduits = (data) => {
    setProduits([data, ...produits]);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <PaymentMenu produits={produits} setProduits={setProduits} />
        </div>
        <div className="col-md-8">
          <ArticlesMenu
            addProduits={addProduits}
            produits={produits}
            setProduits={setProduits}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
