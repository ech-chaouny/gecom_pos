import axios from "axios";
import React, { useEffect, useState } from "react";

function Commandes() {
  const [commandes, setCommandes] = useState();
  useEffect(() => {
    getCommandes();
  }, []);
  const getCommandes = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/commandes");
      setCommandes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="card w-100 mb_30 pt-4">
            <div class="white_card_body">
              <div class="QA_section">
                <div class="white_box_tittle list_header">
                  <div class="main-title">
                    <h3 class="card-title ms-2">Commandes impayées</h3>
                  </div>
                </div>
                <div class="QA_table mb_30">
                  <div
                    id="DataTables_Table_1_wrapper"
                    class="dataTables_wrapper no-footer"
                  >
                    <table
                      class="table lms_table_active3 dataTable no-footer dtr-inline mx-2"
                      id="DataTables_Table_1"
                      role="grid"
                      aria-describedby="DataTables_Table_1_info"
                      style={{ width: "1142px" }}
                    >
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Heure</th>
                          <th>Numero table</th>
                          <th>Serveur</th>
                          <th>Regle</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commandes &&
                          commandes.map((commande, index) => (
                            <tr key={index}>
                              <td>{commande.date}</td>
                              <td>{commande.heure}</td>
                              <td>{commande.table.ntable}</td>
                              <td>{commande.user.name}</td>
                              <td>
                                {commande.regle ? (
                                  <span className="badge bg-success">Payé</span>
                                ) : (
                                  <span className="badge bg-danger">
                                    Non payé ..
                                  </span>
                                )}
                              </td>
                              <td>
                                <div class="form-actions d-flex">
                                  <a
                                    href="edit"
                                    class="btn btn-outline-success btn-sm mx-2"
                                  >
                                    <i class="far fa-edit"></i>{" "}
                                  </a>
                                  <button
                                    onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet table ?');"
                                    class="btn
                                                                    btn-outline-danger btn-sm"
                                    type="submit"
                                  >
                                    <i class="fas fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commandes;
