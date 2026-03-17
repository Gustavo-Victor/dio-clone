import styled from "styled-components"; 


export const Wrapper = styled.header`
    background-color: #151515;
    width: 100%;
    min-height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const Nav = styled.nav`
    width: 100%; 
    max-width: 80%; 
    height: 47px; 
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 0 auto; 
    
    a {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-size: 12px; 
        line-height: 25px;
        color: #fff; 
        text-decoration: none;
    
        &.active {
            font-weight: bold; 
        }
    }

    button a {
        margin: 0;
        line-height: inherit;
    }


`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:last-child {
        gap: 10px;
    }
`;

// export const Column = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

 

export const SearchInputContainer = styled.div`
    width: 175px; 
    height: 30px; 
    background-color: #2d2d37;
    border-radius: 8px; 
    padding: 2px 5px; 
    margin: 0 12px; 
`; 


// export const MenuLink = styled.a`
//     font-family: "Open Sans", sans-serif;
//     font-style: normal;
//     font-size: 12px; 
//     line-height: 25px;
//     color: #fff; 
//     margin-left: 12px;
//     text-decoration: none;
// `;

// export const MenuLinkRight = styled(MenuLink)`
//     color: blue;
// `;

export const UserPicture = styled.img`
    width: 32px; 
    height: 32px; 
    border-radius: 22px;
    border: 2px solid #fff; 
`;

export const Input = styled.input`
    background-color: transparent;
    flex: 1; 
    border: 0; 
    color: #fff; 
`;