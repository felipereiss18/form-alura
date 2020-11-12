import React, {useContext, useState} from "react";
import {TextField, Button} from "@material-ui/core";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return(
      <form onSubmit={event => {
          event.preventDefault();
          if(possoEnviar()){
            aoEnviar({email, senha});
          }
      }}>
          <TextField
              id="email"
              name="email"
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
              name="senha"
              value={senha}
              onChange={event => setSenha(event.target.value)}
              onBlur={validarCampos}
              error={!erros.senha.valido}
              helperText={erros.senha.texto}
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