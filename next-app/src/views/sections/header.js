import React from "react";

export default function HeaderNav({...props}) {
    return(
        <header>
            {props.primaryNavigation}
        </header>
    );
}