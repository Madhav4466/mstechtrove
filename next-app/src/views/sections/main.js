import React from "react";
import '../../styles/sections/page_sections/portfolio.css';

export default function MainContent({...props}) {
    return(
        <main className="flex-grow-1 pt-5 px-0 d-flex flex-column justify-content-center">
            {props.sections}
        </main>
    );
}