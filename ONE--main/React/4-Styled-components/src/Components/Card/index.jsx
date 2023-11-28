import React from "react";
import styled from "styled-components";
import imageFilter from "../../imageFilter";

const Card = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0,1);
    border-radius: 10px;
    margin: 2px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    .type{ //dentro de styled se pueden definir classes
        font-weight: bold;
    }
`

export default ({ cargo })=>{ //recibimos la prop
    const {id, value, from, date, type} = cargo //destructuramos la prop
    return <Card>
        {imageFilter(type)}
        <Info>
            <span className="type">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Info>
            <span>{date}</span>
    </Card>;
}