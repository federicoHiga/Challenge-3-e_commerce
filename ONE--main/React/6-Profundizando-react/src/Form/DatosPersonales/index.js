import React , {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarName, validarLastName, validarNumber } from "./validaciones";

const DatosPersonales = ({updateStep}) => {

  const [name, setName] = useState ({ value:"" , valid: null })
  const [lastName, setLastName] = useState ({ value:"" , valid: null })
  const [number, setNumber] = useState ({ value:"" , valid: null })

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
        if(name.valid, lastName.valid, number.valid){
          console.log ("Datos personales esta todo ok")
          updateStep(2)
        }else{
          console.log("omar ")
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        error={name.valid === false}
        helperText={name.valid === false && "Al menos 3 caracteres"}
        onChange={(e)=>{
          const name = e.target.value
          const validacion = validarName(name) 
          setName ({value: name, valid: validacion})
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        error={lastName.valid === false}
        helperText={lastName.valid === false && "Al menos 3 caracteres"}
        onChange={(e)=>{
          const lastName = e.target.value
          const validacion = validarLastName(lastName) 
          setLastName ({value: lastName, valid: validacion})
        }}
      />  
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={number.value}
        error={number.valid === false}
        helperText={number.valid === false && "Minimo 8 digitos"}
        onChange={(e)=>{
          const number = e.target.value
          const validacion = validarNumber(number) 
          setNumber ({value: number, valid: validacion})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
