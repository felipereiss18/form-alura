import React, {useContext, useState} from "react";
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return(
        <form
            onSubmit={event => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
                }
            }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}

                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"/>
            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"/>

            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                name="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"/>

            <FormControlLabel
                checked={promocoes}
                control={<Switch onChange={event => {
                    setPromocoes(event.target.checked);
                }} name="promocoes" color="primary"/>}
                label="Promoções"/>
            <FormControlLabel
                control={<Switch
                    checked={novidades}
                    onChange={event => {
                        setNovidades(event.target.checked);
                    }}
                    name="novidades" color="primary"/>}
                label="Novidades"/>

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );

}

export default DadosPessoais;