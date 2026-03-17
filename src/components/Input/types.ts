import React, { type ReactNode } from "react"; 

export interface IInput {
    leftIcon?: ReactNode; 
    name: string; 
    id?: string;
    type?: string; 
    placeholder?: string;
    required?: boolean;
}