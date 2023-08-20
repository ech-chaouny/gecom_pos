import axios from "axios";
import React, { useEffect, useState } from "react";
function Users() {
  const [tiers, setTiers] = useState();
  useEffect(() => {
    getTiers();
  }, []);
  const getTiers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tiers");
      setTiers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {tiers &&
        tiers.map((tier, index) => (
          <option key={index} defaultValue={tier.id}>
            {tier.nom_prenom}
          </option>
        ))}
    </>
  );
}

export default Users;
