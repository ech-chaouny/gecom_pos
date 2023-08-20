import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function PaymentMenu({ produits, setProduits, table_id, setTable_id }) {
  const [remise, setRemise] = useState();
  const [shipping, setShipping] = useState();
  const [loading, setLoading] = useState(false);

  const deleteProduit = (id) => {
    const supp = produits.filter((produit) => produit.id !== id);
    setProduits(supp);
  };

  const subTotal = () => {
    let total = 0;
    produits.map((produit) => (total += produit.qte * produit.prix));
    return total;
  };
  const qteTotal = () => {
    let qte = 0;
    produits.map((produit) => (qte += produit.qte));
    return qte;
  };
  const Total = () => {
    const subtotal = subTotal();
    let total = subtotal;
    if (remise || shipping) {
      const remiseValue = parseFloat(remise || 0);
      const shippingValue = parseFloat(shipping || 0);
      total = subtotal + shippingValue - remiseValue;
    }
    return total;
  };
  const qteIncrement = (id) => {
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
  };
  const qteDecrement = (id) => {
    const updatedProduits = produits.map((produit) => {
      if (produit.id === id) {
        if (produit.qte > 1) {
          return {
            ...produit,
            qte: produit.qte - 1, // Decrement the quantity
          };
        }
      }
      return produit;
    });
    setProduits(updatedProduits);
  };
  const resetAll = () => {
    setProduits([]);
  };
  const createCommande = async (e) => {
    setLoading(true);
    e.preventDefault();
    const commande = {
      user_id: 1,
      table_id,
      regle: 0,
      article_id: produits,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/commande",
        commande
      );
      // Create an async function to handle adding detail to command
      const addDetailToCommand = async (commandId, produit) => {
        const detailCommande = {
          commande_id: commandId,
          article_id: produit.id,
          prix: produit.prix,
          qte: produit.qte,
        };
        const response_d = await axios.post(
          "http://127.0.0.1:8000/api/detailCommande",
          detailCommande
        );
      };
      for (const produit of produits) {
        await addDetailToCommand(response.data.commande.id, produit);
      }
      toast.success(response.data.success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      setProduits([]);
      setTable_id("");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div className="card mb-2">
        <div
          className="table-responsive text-nowrap"
          style={{
            height: "auto",
            maxHeight: "470px",
            minHeight: "calc(100vh - 330px)",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Article</th>
                <th className="text-center">Qté</th>
                <th>Prix</th>
                <th colSpan="2">Sous-total</th>
              </tr>
            </thead>
            <tbody>
              {produits.length > 0 ? (
                produits.map((produit, index) => (
                  <tr key={index} className="align-middle">
                    <td className="text-nowrap col-5">
                      <strong>{produit.designation}</strong>
                      <br />
                      {/* <span className="badge bg-label-primary">
                        {produit.reference}
                      </span> */}
                    </td>
                    <td className="col-2">
                      <div className="counter d-flex align-items-center justify-content-center">
                        <button
                          type="button"
                          onClick={() => qteDecrement(produit.id)}
                          className="d-flex align-items-center justify-content-center btn "
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="hide-arrow"
                          value={produit.qte}
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={() => qteIncrement(produit.id)}
                          className="d-flex align-items-center justify-content-center btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center">{produit.prix}</td>
                    <td className="text-center">
                      {produit.prix * produit.qte}
                    </td>
                    <td className="text-center">
                      <a
                        href="#supprimer"
                        onClick={() => deleteProduit(produit.id)}
                      >
                        <i className="bx bx-trash text-danger"></i>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-900 fw-bold py-4"
                  >
                    Pas de données disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="calculation mt-4">
          <div className="total-price row">
            <div className="col-6 mb-2">
              <div className="calculation__filed-grp mb-2">
                <div className="input-group">
                  <input
                    name="tax"
                    min="0"
                    step=".01"
                    placeholder="Tax"
                    type="text"
                    id="tax"
                    className="rounded-1 pe-8 form-control"
                    defaultValue=""
                  />
                  <span className="position-absolute top-0 bottom-0 end-0 bg-transparent border-0 input-group-text">
                    %
                  </span>
                </div>
              </div>
              <div className="calculation__filed-grp mb-2">
                <div className="input-group">
                  <input
                    name="discount"
                    min="0"
                    step=".01"
                    placeholder="Remise"
                    type="text"
                    id="discount"
                    className="rounded-1 form-control disabled"
                    defaultValue={remise}
                    readOnly={subTotal() === 0}
                    onChange={(e) => setRemise(e.target.value)}
                  />
                  <span className="position-absolute top-0 bottom-0 end-0 bg-transparent border-0 input-group-text">
                    Dh
                  </span>
                </div>
              </div>
              <div className="calculation__filed-grp mb-2">
                <div className="input-group">
                  <input
                    name="shipping"
                    min="0"
                    step=".01"
                    placeholder="Expédition"
                    type="text"
                    id="shipping"
                    className="rounded-1 pe-8 form-control"
                    defaultValue={shipping}
                    readOnly={subTotal() === 0}
                    onChange={(e) => setShipping(e.target.value)}
                  />
                  <span className="position-absolute top-0 bottom-0 end-0 bg-transparent border-0 input-group-text">
                    Dh
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center text-end align-items-end mb-2">
              <h5 className="mb-2 custom-big-content text-gray-600">
                Quantité totale : {qteTotal()}
              </h5>
              <h5 className="mb-2 text-gray-600">
                Sous-total : {subTotal()}.00 Dh
              </h5>
              <h4 className="mb-2 text-gray-800">Total : {Total()}.00 Dh</h4>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <button
            type="button"
            className="btn btn text-white w-100 pm-3 me-2 rounded-10 pn-3 pos-pay-btn "
            style={{
              background: "#FF679B",
              color: "#fff",
              borderColor: "#FF679B",
            }}
          >
            Prise <i className="bx bxs-hand"></i>
          </button>
          <button
            type="button"
            onClick={() => resetAll()}
            className="rounded-10 text-white w-100 pm-3 me-2 rounded-10 pn-3 pos-pay-btn btn btn-danger"
          >
            Réinitialiser <i className="bx bx-rotate-right"></i>
          </button>
          <button
            type="button"
            onClick={createCommande}
            className="text-white w-100 pm-3 rounded-10 pn-3 pos-pay-btn btn btn-success"
          >
            Valider<i className="ms-2 fa fa-money-bill"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentMenu;
