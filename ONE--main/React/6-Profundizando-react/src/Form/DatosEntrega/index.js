import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarAddress, validarCity, validarState } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [address, setAddress] = useState ({value: "", valid: null})
  const [city, setCity] = useState (({value: "", valid: null}))
  const [state, setState] = useState (({value: "", valid: null}))


  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e)=>{
        e.preventDefault()
        updateStep(3)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        error={address.valid === false}
        helperText={address.valid === false && "Al menos 3 caracteres"}
        onChange={(e)=>{
          const address = e.target.value
          const validacion = validarAddress(address)
          setAddress ({value: address, valid: validacion})
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        error={city.valid === false}
        helperText={city.valid === false && "Al menos 3 caracteres"}
        onChange={(e)=>{
          const city = e.target.value
          const validacion = validarCity(city)
          setCity ({value: city, valid: validacion})
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={state.value}
        error={state.valid === false}
        helperText={state.valid === false && "Al menos 3 caracteres"}
        onChange={(e)=>{
          const state = e.target.value
          const validacion = validarState(state)
          setState ({value: state, valid: validacion})
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
