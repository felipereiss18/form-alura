import React, {useState} from 'react';
import {Switch, TextField, Button, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {

    const [nome, setNome] = useState("Ricardo");
    const [sobrenome, setSobrenome] = useState("")
    return(
        <form
            onSubmit={event => {
                event.preventDefault();
                console.log(nome, sobrenome);
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    let tmpNome = event.target.value
                    if(tmpNome.length >= 3){
                        tmpNome = tmpNome.substr(0,3);
                    }

                    setNome(tmpNome);
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
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"/>

            <FormControlLabel control={<Switch name="promocoes" defaultChecked color="primary"/>} label="Promoções"/>
            <FormControlLabel control={<Switch name="novidades" defaultChecked color="primary"/>} label="Novidades"/>

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );

}

export default FormularioCadastro;