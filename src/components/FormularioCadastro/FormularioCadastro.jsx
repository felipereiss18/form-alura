import React, {useState} from 'react';
import {Switch, TextField, Button, FormControlLabel} from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);

    return(
        <form
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
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

export default FormularioCadastro;