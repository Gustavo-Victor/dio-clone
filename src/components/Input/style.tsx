import styled from "styled-components";


export const InputContainer = styled.div`
    width: 100%; 
    max-width: 300px; 
    height: 30px;
    border-bottom: 1px solid #3b3430;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
        margin-right: 5px;
        fill: #E23DD7;
    }
`;

export const InputIcon = styled.div`
    margin-right: 10px;
`;

export const InputElement = styled.input`
    background-color: transparent;
    height: 30px;
    color: #fff;
    border: 0;
    flex: 1;
`;


