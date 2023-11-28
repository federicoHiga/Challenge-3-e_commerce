import styled from "styled-components";

const BtnHidden = styled.button`
    display: flex;
    cursor: pointer;
`

const HiddenCompo = (props)=>{
    return <BtnHidden src="" alt="boton" onClick={props.mostrarCompo}>Esconder VS</BtnHidden>
}

export default HiddenCompo