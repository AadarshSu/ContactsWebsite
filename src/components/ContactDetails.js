import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import user from "../images/user.png";

const ContactDetails = (props) => {
    const { name, number } = useLocation().state.contact;
    return (
        <div className='main'>
            <div className='ui card centered' style={{ marginTop:"50px" }}>
                <div className='image'>
                    <img src={user} alt="user" />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{number}</div>
                </div>
            </div>
            <div className='center-div'>
                <Link to="/">
                    <button className='ui button blue center'>Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetails;