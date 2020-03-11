import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-3">
            <p>Codebook Inc.&copy;{new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;