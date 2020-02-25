import React from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#">Notesbin</Navbar.Brand>
        </Navbar>
    );
}

export default Header;
