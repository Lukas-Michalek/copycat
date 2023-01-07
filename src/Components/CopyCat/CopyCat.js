import React from 'react';
import { styles } from '../../styles';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {

 


  render() {

     // Great tip on how to import all props from CopyCatContainer, is to assign them to a constant so I can simply use the constants istead of this.prop.value all the time. Instead of using const value= this.props.value, const onChange=this.props.onChange an so on ... I can do this:

  const {value, handleChange, copying, toggleTape} = this.props;

  // this is equal to:
  //    const copying = this.props.copying;
  //    const toggleTape = this.props.toggleTape
  //    const value= this.props.input
  //    const handleChange= this.props.handleChange

  // !DO NOT FORGET!!! => THIS NEEDS TO BE IN RENDER METHOD !!!
    
    return (
      <div style={styles.divStyles}>
        <h1>Copy Cat</h1>

        <input
            
            type='text'
            value={value}
            onChange={handleChange}
        
        />

        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          styles={styles.imgStyles}
        />

        
        {/* Note that I am using && operator. What && operator does in this cotext is the shortcut for if(copying && value){display this} => But in JavaScript this is used for => When copying is true and value is true(which is true if it is not empty string, null, false, NaN - Not a Number, 0 or undefined) show the content of value. In other words, element <p> wil alway be there but its content will show up only if both of conditions are true. This can be also used with || but of course it will behave as OR */}
        <p>{copying && value}</p>
      
      </div>
    );
  };
}



export default CopyCat;