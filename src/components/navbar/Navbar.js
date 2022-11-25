import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Row>
            <Col className='d-flex justify-content-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/The_New_York_Times_Logo.svg" alt="new york times logo" />
                <ul>
                    <li >
                        <Link className='list-element' to="/everything">All</Link>
                    </li>
                    <li >
                        <Link className='list-element' to="/arts">Arts</Link>
                    </li>
                    <li >
                        <Link className='list-element' to="/culture">Culture</Link>
                    </li>
                    <li className='list-element'>
                        <Link className='list-element' to="/about">About</Link>
                    </li>

                </ul>
            </Col>
        </Row>
    )
}
