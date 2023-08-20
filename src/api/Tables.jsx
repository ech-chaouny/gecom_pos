import axios from "axios";
import React, { useEffect, useState } from "react";
function Tables() {
  const [tables, setTables] = useState();
  useEffect(() => {
    getTiers();
  }, []);
  const getTiers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tables");
      setTables(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {tables &&
        tables.map((table, index) => (
          <option key={index} value={table.id}>
            {table.ntable}
          </option>
        ))}
    </>
  );
}

export default Tables;
