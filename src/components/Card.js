import React from 'react';
import './Card.css';
import 'tachyons'
class Card extends React.Component{
    render(){
        return(
            <div className="card grow br3 shadow5">
                <img src= {`https://robohash.org/${this.props.id}?size=200x200`} alt="robots"/>
                <h2>{this.props.name}</h2>
                <h3>{this.props.username}</h3>
                <p>{this.props.email}</p> 
            </div>
        )
    }
};
export default Card;