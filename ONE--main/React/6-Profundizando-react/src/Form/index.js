import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";



const Form = () => {

  // useEffect(()=>{
  //   console.log("useEffect")
  // })

  // estado para el objeto de las props de  los inputs 
  // nunca lo termino el amigo harland, asiq los inputs estan congelados.
  const [pasos, setPasos] = useState({})


  // estado numerico de los steps (componentes) q representa el Stepper 
  const [step, setStep]= useState (0) 


/**
 * updateStep quedo reemplazada por la estructura de stepsFlows y su handleChange
 *  
 */
  const updateStep = (step)=>{
    console.log("se acualizo el paso a: ", step)
    setStep(step)
  }


  //objeto de los steps (componentes) en si
  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete />
  }


  const onSubmit = () => {
    let newStep = step + 1;
    setStep(newStep);
  }

  const handleChange = (element, position, currentStep, validator) => {

    const value = (element.target.value)
    const valid = validator (value)
    setPasos({value: value, valid: valid})
    // console.log("value: ", value)
    // console.log("posicion array inputs: ", position)
    // console.log("step actual: ", currentStep)
    // console.log("validacion: ", valid)

    // stepsFlow[0].inputs[0].label = "medina"
    // console.log(stepsFlow)
  }


  
  // objeto con las prorps distintivas de cada input
  const stepsFlow = { 
    0:{ 
      inputs:[ 
       { 
        label: "Correo electrónico",
        type: "email",
        helperText: "Ingresa un correo electrónico válido",
        value: "",
        valid: null,
        onChange: handleChange,
        validator: validarEmail
      },
      { 
        label: "Password",
        type: "password",
        helperText: "Al menos 5 caracteres",
        value: "",
        valid: null,
        onChange: handleChange,
        validator: validarPassword
      },
      ],
      buttonText: "Siguiente", 
      onSubmit, 
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} /> } 
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
