import styled from "styled-components"; 

export const Container = styled.main`
    width: 100%; 
    max-width: 80%; 
    margin: 120px auto;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`; 

export const Wrapper = styled.div`
    max-width: 350px;

    form {
        max-width: 300px; 
    }
`;


export const Column = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
    /* border: 1px solid blue;  */
`; 

export const Row = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`; 

export const Title = styled.h2`
    font-family: "Open Sans", sans-serif; 
    font-weight: 700; 
    font-style: normal; 
    font-size: 32px;
    line-height: 44px;
    color: #fff;
    max-width: 320px; 
    margin-bottom: 21px;
`;

export const TitleLogin = styled.h3`
    font-family: "Open Sans", sans-serif; 
    font-weight: 700; 
    font-style: normal; 
    font-size: 32px;
    line-height: 44px;
    color: #fff;
    width: auto; 
    margin-bottom: 20px; 
`;

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    width: auto;      
    line-height: 25px;
    margin-bottom: 14px;
    color: #ffffff90;
    font-size: 15px;
    
    &.small {
        font-size: 14px; 
    }

    a {
        color: inherit;
        cursor: pointer;
    
        &.login {
            color: rgba(35, 221, 122, 1); 
        }
    }
`;

export const ErrorElement = styled.span`
    display: block; 
    color: #c95858;
    font-size: 9px; 
    margin: -10px 0 5px 0;

`;