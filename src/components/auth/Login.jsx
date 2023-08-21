import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
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
      setUser(response.data.user);
    } catch (error) {
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
    <div>
      <div class="container-fluid p-0">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6">
            <div class="white_box mt_60">
              <img
                src={`http://127.0.0.1:8000/img/logo.png`}
                class="mb-5 ms-5"
                width="200"
                alt=""
              />
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-content cs_modal">
                    <div class="modal-header justify-content-center theme_bg_1">
                      <h5 class="modal-title text_white">Se connecter</h5>
                    </div>
                    <div class="modal-body">
                      <div class="">
                        <label for="email" class="form-label">
                          Email Adresse
                        </label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Email Adresse"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="">
                        <label for="password" class="form-label">
                          Mot de passe
                        </label>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Mot de passe"
                        />
                      </div>
                      <button
                        onClick={handleLogin}
                        class="btn_1 full_width text-center"
                      >
                        Se connecter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
