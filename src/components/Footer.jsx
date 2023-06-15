import React from "react";

function Footer() {

    const date = new Date().getFullYear();

    return (
        <footer >
            <p>
                Copyright &copy; {date} Fernando
            </p>
        </footer>
    )
}

export default Footer;