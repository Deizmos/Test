import React from "react";
import {InputProps} from "../types/interfaces";


const Input: React.FC<InputProps> = ({className,label,type,value,onChange}) => {
    return (
            <input className={className} placeholder={label} type={type} value={value} onChange={onChange}/>
    )
}

export default Input
