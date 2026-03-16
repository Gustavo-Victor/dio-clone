import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    body {
        font-family: "Open Sans", Verdana, Geneva, Tahoma, sans-serif;
        margin: 0;
        background-color: #1E1A2D;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button, input {
        border: none; 
        outline: none; 
    }
`