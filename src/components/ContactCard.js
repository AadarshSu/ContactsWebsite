import React from 'react';
import { Link } from 'react-router-dom';
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, number} = props.contact;
    return (
        <div className='ui divided items'>
            <Link to={`/contact/${id}`} state={{contact: props.contact}} >
                <div className="item">
                    <img className="ui avatar image" style={{'fontSize':30}} src={user} alt="user" />

                        <div className='content'>
                                <div className="header">{name}</div>
                                <div>{number}</div>
                        </div>
                </div>
            </Link>
            <i 
                    className="trash alternate outline icon" 
                    style={{ color:"red", float: "right", fontSize:30}} 
                    onClick={() =>
                        props.clickHandler(id)
                    }
                    ></i>
        </div>


    );
};


export default ContactCard;