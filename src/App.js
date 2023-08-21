import Content from "./components/Content";
import Header from "./components/Header";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Commandes from "./components/Commandes";
import Login from "./components/auth/Login";

function App() {
  const [table_id, setTable_id] = useState();
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid flex-grow-1 container-p-y">
          {user ? (
            <>
              <Header
                table_id={table_id}
                setTable_id={setTable_id}
                user={user}
              />
              <Content table_id={table_id} setTable_id={setTable_id} />
              <Commandes />{" "}
            </>
          ) : (
            <Login user={user} setUser={setUser} />
          )}

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
