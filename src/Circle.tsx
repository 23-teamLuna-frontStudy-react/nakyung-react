import { useState } from "react";
import styled from "styled-components"

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border:1px solid ${(props) => props.borderColor}
`;

interface CircleProps{
    bgColor: string;
    borderColor?:string;
}

function Circle({bgColor, borderColor}: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>
    );
}

export default Circle;
