import { Component } from "react";
import './card.style.css';
class Card extends Component{
render(){
  const{id,name,email}=this.props.monster;
  return(<div className='card-container' key={id}>
  <img 
  alt={`monster ${name} `} 
  src={`https://robohash.org/${id}?set=set4&size=200x200`}  />
  <h2>{name}</h2>
  <p>{email}</p>
  </div>)
 

}
}



export default Card;