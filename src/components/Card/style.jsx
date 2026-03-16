import styled from "styled-components"; 

export const CardContainer = styled.div`
    width: 100%; 
    background-color: #3b4655;
    position: relative;
    margin-bottom: 24px;
    color: #dddddd;
    font-family: "Open Sans", sans-serif;
`;

export const ImageBackground = styled.img`
    width: 100%; 
    height: 150px; 
`;

export const Content = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    padding: 12px; 
`;

export const UserInfo = styled.div`
    display: flex; 
    flex-direction: row;
    margin-bottom: 12px; 

    div {
        margin-left: 12px;
    }

    h4 {
        font-family: "Open Sans", sans-serif;
        font-style: normal; 
        font-weight: 700;
        font-size: 18px; 
        line-height: 25px; 
        color: #fff;
    }

    p {
        font-size: 12px; 
        font-weight: 400;
        line-height: 16px;
    }
`;

export const UserPicture = styled.img`
    width: 32px; 
    height: 32px;
    border-radius: 22px;
    border: 3px solid #fff; 
`;

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #fff;
    }

    p {
        font-weight: 400;
        font-size: 12px; 
        line-height: 16px;
    }
`;

export const HasInfo = styled.div`
    margin-top: 12px; 

    h4 {
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        color: #ffffff80;
    }

    p {
        font-weight: 700; 
        font-size: 1rem; 
        line-height: 22px;
    }
`;