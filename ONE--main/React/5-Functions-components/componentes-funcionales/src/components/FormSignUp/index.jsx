import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSignUp ({handleSubmit}){

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Al menos 3 caracteres",
        }
    })

    const validarName = (nombre)=>{
        if(nombre.length >= 3){
            return { name: {error: false, message: ""} }
        }else return { name: {error: true, message: "Al menos 3 caracteres pa"} }
    }

    return <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit({
                name,
                lastName,
                email,
                prom,
                nov
        })}}>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                onChange={(e)=>setName(e.target.value)}
                value={name}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={(e)=>{
                        setErrors(validarName(e.target.value))
                    }
                }
            />
            <TextField id="lastName" 
                label="Apellido" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                onChange={(e)=> setLastName(e.target.value)}
                value={lastName}
            />
            <TextField 
                id="mail" 
                label="Email" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
            />
            <FormGroup>
                <FormControlLabel 
                    control={<Switch checked={prom} onChange={(e)=> setProm(e.target.checked)} />} 
                    label="Promociones" 
                />
                <FormControlLabel 
                    control={<Switch checked={nov} onChange={(e)=>setNov(e.target.checked)} />} 
                    label="Novedades" 
                />
            </FormGroup>
            <Button variant="contained" type="submit">Registrarse</Button>
        </form>
    </>
}

export default FormSignUp