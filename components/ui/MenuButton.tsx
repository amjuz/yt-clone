'use client'

import { Menu } from "lucide-react";
import {  useState } from "react";
import { MenuBar } from "../MenuBar";

export function MenuButton(){

    const [ menuClick, setMenuClick ] = useState(false);
    
    

    return(
        <>
            <button onClick={ ()=> { setMenuClick(!menuClick); console.log(menuClick); } }>
    			<Menu />
            </button>
            <div className="">
                {menuClick ? <MenuBar/> : <></>}
            </div>
        </>
        
        
    );
};