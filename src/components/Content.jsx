import React from "react";
import PaymentMenu from "./Content/PaymentMenu";
import ArticlesMenu from "./Content/ArticlesMenu";
import { useState } from "react";

function Content({ table_id, setTable_id, user }) {
  const [produits, setProduits] = useState([]);
  const addProduits = (data) => {
    setProduits([data, ...produits]);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <PaymentMenu
            user={user}
            produits={produits}
            setProduits={setProduits}
            table_id={table_id}
            setTable_id={setTable_id}
          />
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
