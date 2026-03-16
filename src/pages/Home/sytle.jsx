import styled from "styled-components"; 

export const Container = styled.main`
    width: 100%; 
    max-width: 80%; 
    margin: 120px auto;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`; 


export const Title = styled.h2`
    font-family: "Open Sans", sans-serif; 
    font-weight: 700; 
    font-style: normal; 
    font-size: 32px;
    margin-bottom: 20px; 
    line-height: 44px;
    color: #fff;
    max-width: 320px; 
`;

export const TitleHighLight = styled.span`
    color: #e4105d;
`;

export const TextContent = styled(Title)`
    font-size: 1rem; 
    max-width: 420px;
    line-height: 22px;
    font-weight: 400;
`;