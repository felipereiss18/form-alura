import React, {useState} from "react";
import {TextField, Button} from "@material-ui/core";

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
      <form onSubmit={event => {
          event.preventDefault();
          aoEnviar({email, senha});
      }}>
          <TextField
              id="email"
              value={email}
              onChange={event => {
                  setEmail(event.target.value);
              }}
              label="email"
              type="email"
              required={true}
              variant="outlined"
              margin="normal"
              fullWidth/>
          <TextField
              id="senha"
              value={senha}
              onChange={event => setSenha(event.target.value)}
              label="senha"
              type="password"
              required={true}
              variant="outlined"
              margin="normal"
              fullWidth/>
          <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
      </form>
    );

}

export default DadosUsuario;