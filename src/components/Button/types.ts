import React, { type ReactNode } from "react";

export interface IButton {
    children: ReactNode; 
    full?: boolean; 
    variant?: string; 
    type?: string; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IButtonStyle {
    $variant?: string,
    $full?: boolean, 
    $type?: string; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}