import styled, { css } from "styled-components";
import { type IButtonStyle } from "./types";

export const Btn = styled.button<IButtonStyle>`
    background-color: #565656; 
    border-radius: 22px;
    position: relative;
    color: #fff; 
    padding: 10px 12px; 
    min-width: 120px;
    cursor: pointer;

    ${props => props.$full && css`
        display: block;
        min-width: 100%;
    `}

    ${props => (props.$variant != 'primary' && css`
        width: 167px; 
        min-height: 33px;
        background: #e4105d;
        margin: 1rem 0;

        &::after {
            content: ""; 
            position: absolute; 
            border: 1px solid #e4105d; 
            top: -5px; 
            left: -5px; 
            width: calc(100% + 10px); 
            height: calc(100% + 10px);
            border-radius: 25px; 
        }
    `)}
`;