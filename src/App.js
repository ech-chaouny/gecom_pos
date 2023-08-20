import Content from "./components/Content";
import Header from "./components/Header";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [table_id, setTable_id] = useState();

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid flex-grow-1 container-p-y">
          <Header table_id={table_id} setTable_id={setTable_id} />
          <Content table_id={table_id} setTable_id={setTable_id} />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
