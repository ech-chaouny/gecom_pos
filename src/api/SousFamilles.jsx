import axios from "axios";
import React, { useEffect } from "react";
function SousFamilles({
  handlechange,
  setSousfamilles,
  sousfamilles,
  activeButtonS,
}) {
  useEffect(() => {
    getSousFamilles();
  }, []);
  const getSousFamilles = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/sousfamilles"
      );
      setSousfamilles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {sousfamilles ? (
        <>
          {sousfamilles.length > 0 ? (
            <>
              {sousfamilles &&
                sousfamilles.map((sousfamille, index) => (
                  <div key={index} className="button-list__item">
                    <button
                      type="button"
                      value={sousfamille.id}
                      onClick={handlechange}
                      className={`btn btn-light ${
                        activeButtonS == sousfamille.id
                          ? "custom-btn-size button-list__item-active text-white"
                          : ""
                      }`}
                    >
                      {sousfamille.sous_famille}
                    </button>
                  </div>
                ))}
            </>
          ) : (
            <div className="d-flex align-items-center fw-bold ">
              Aucun Sous Famille !
            </div>
          )}
        </>
      ) : (
        <div className="d-flex align-items-center fw-bold">
          Nous vous attendons pour choisir la famille !
        </div>
      )}
    </>
  );
}

export default SousFamilles;
