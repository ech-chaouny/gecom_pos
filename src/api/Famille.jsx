import axios from "axios";
import "./Style.css";
import React, { useEffect, useState } from "react";
function Famille({ handlechange, activeButton }) {
  const [familles, setFamilles] = useState();
  useEffect(() => {
    getFamilles();
  }, []);
  const getFamilles = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/familles");
      setFamilles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {familles &&
        familles.map((famille, index) => (
          <div key={index} className="button-list__item">
            <button
              type="button"
              value={famille.id}
              onClick={handlechange}
              className={`btn btn-light ${
                activeButton == famille.id
                  ? "custom-btn-size button-list__item-active text-white"
                  : ""
              }`}
            >
              {famille.famille}
            </button>
          </div>
        ))}
    </>
  );
}

export default Famille;
