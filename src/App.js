import { useState } from "react";
import "./style.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="box">
        <div className="login">
          <form className="form">
            <h1 className="login-title"> Bem vindo</h1>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="password"></span>
            </div>

            <div className="form-botao">
              <button className="botao">Login</button>
            </div>

            <div className="cadNovo">
              <span className="cad">Não possui conta?</span>
              <a className="cad2" href="#">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
