import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = ({ addProduits, produits, setProduits }) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState();
  useEffect(() => {
    getArticels();
  }, []);
  const getArticels = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/articles");
      setLoading(true);
      setArticles(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const submitForm = (e, index, id) => {
    e.preventDefault();

    // Check if the article is already in produits
    const existingProduit = produits.find((produit) => produit.id === id);

    if (existingProduit) {
      // Article already exists, update the quantity
      const updatedProduits = produits.map((produit) => {
        if (produit.id === id) {
          return {
            ...produit,
            qte: produit.qte + 1, // Increment the quantity
          };
        }
        return produit;
      });
      setProduits(updatedProduits);
    } else {
      // Article doesn't exist, add it with quantity 1
      const values = articles[index];
      const data = {
        id: values.id,
        designation: values.designation,
        reference: values.reference,
        prix_achat_ht: values.prix_achat_ht,
        qte: 1,
      };
      addProduits(data);
      // setProduits([...produits, data]);
    }
  };
  const activeCard = (id) => {
    const existingProduit = produits.find((produit) => produit.id === id);
    if (existingProduit) {
      return "product-active";
    } else {
      return "";
    }
  };
  return (
    <>
      {!loading ? (
        <div className="d-flex flex-row justify-content-center align-items-center pt-5">
          <h4 className="text-gray-900 fw-bold">Aucun produit disponible</h4>
        </div>
      ) : (
        <div className="d-flex flex-wrap product-list-block__product-block">
          {articles &&
            articles.map((article, index) => (
              <div
                key={index}
                role="button"
                onClick={(e) => submitForm(e, index, article.id)}
                className="product-custom-card"
              >
                <div
                  className={`position-relative ${activeCard(article.id)} card`}
                >
                  <img
                    className="card-img-top"
                    src={`http://127.0.0.1:8000/storage/images/article/${article.vignette}`}
                    alt="article"
                  />
                  <div className="pt-2 custom-card-body">
                    <h6 className="product-title mb-0 text-gray-900">
                      {article.designation}
                      <input
                        type="hidden"
                        name="designation"
                        defaultValue={article.designation}
                      />
                    </h6>
                    <span className="fs-small text-gray-700">
                      {article.reference}
                      <input
                        type="hidden"
                        name="reference"
                        defaultValue={article.reference}
                      />
                    </span>
                    <p className="m-0 item-badges">
                      <span className="product-custom-card__card-badge badge text-white bg-info">
                        {article.stock_max} piece
                      </span>
                    </p>
                    <p className="m-0 item-badge">
                      <span className="product-custom-card__card-badge badge text-white bg-primary">
                        {article.prix_achat_ht}DH
                        <input
                          type="hidden"
                          name="prix_achat_ht"
                          defaultValue={article.prix_achat_ht}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Articles;
