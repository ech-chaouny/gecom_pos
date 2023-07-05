import React from "react";
import Articles from "../../api/Articles";

function ArticlesMenu({ addProduits, produits, setProduits }) {
  return (
    <>
      <div className="card w-100">
        <div className="pt-3">
          <div className="button-list mb-2 d-flex flex-nowrap nav">
            <div className="button-list__item me-2 nav-item">
              <button
                type="button"
                className="custom-btn-size button-list__item-active text-white btn btn-light"
              >
                Toutes Familles
              </button>
            </div>
            <div className="button-list__item">
              <button type="button" className="btn btn-light">
                Fruits
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button type="button" className="btn btn-light">
                Shoes
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button
                type="button"
                className="custom-btn-size w-100  btn btn-light"
              >
                Jackets
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button
                type="button"
                className="custom-btn-size w-100  btn btn-light"
              >
                Computer
              </button>
            </div>
            <div className="button-list__item">
              <button type="button" className="btn btn-light">
                Fruits
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button type="button" className="btn btn-light">
                Shoes
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button
                type="button"
                className="custom-btn-size w-100  btn btn-light"
              >
                Jackets
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button
                type="button"
                className="custom-btn-size w-100  btn btn-light"
              >
                Computer
              </button>
            </div>
          </div>
          <div className="button-list mb-2 d-flex flex-nowrap nav">
            <div className="button-list__item me-2 nav-item">
              <button
                type="button"
                className="custom-btn-size button-list__item-active text-white btn btn-light"
              >
                Toutes Sous Familles
              </button>
            </div>
            <div className="button-list__item">
              <button type="button" className="btn btn-light">
                Fruits
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button type="button" className="btn btn-light">
                Shoes
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button
                type="button"
                className="custom-btn-size w-100  btn btn-light"
              >
                Jackets
              </button>
            </div>
            <div className="button-list__item nav-item">
              <button
                type="button"
                className="custom-btn-size w-100  btn btn-light"
              >
                Computer
              </button>
            </div>
          </div>
        </div>
        <div className="product-list pt-1">
          <Articles
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
