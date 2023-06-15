import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header(props) {
    return (
        <header>
            <h1><HighlightIcon />Keeper App {props.proba}</h1>
        </header>)
}

export default Header;