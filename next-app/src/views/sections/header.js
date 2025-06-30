import React from "react";

export default function HeaderNav({children, ...props}) {
    return(
        <header>
            {children}
        </header>
    );
}