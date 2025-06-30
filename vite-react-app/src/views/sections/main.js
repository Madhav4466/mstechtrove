import React from "react";
import '../../styles/sections/page_sections/portfolio.css';

export default function MainContent({sections}) {
    return(
        <main className="col-12 flex-grow-1 pt-5">
            {sections}
        </main>
    );
}