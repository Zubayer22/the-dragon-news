import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='w-100 '><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary" className='w-100 mt-2'><FaGithub /> Login With Github</Button>
            <div className='my-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>

            </div>
        </div>
    );
};

export default RightNav;