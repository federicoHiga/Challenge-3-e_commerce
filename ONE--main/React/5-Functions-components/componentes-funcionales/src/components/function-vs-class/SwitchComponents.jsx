import styled from "styled-components";
import React from "react";

import FuncComponent from './function-components';
import ClassComponent from "./class-components";

const StyledConteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
`

function CompoConteiner (){
    return (
        <StyledConteiner>
            <ClassComponent />
            <FuncComponent />
        </StyledConteiner>
    )
}

export default CompoConteiner;