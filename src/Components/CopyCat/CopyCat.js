import React from 'react';
import { styles } from '../../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {

 


  render() {

     // Great tip on how to import all props from CopyCatContainer, is to assign them to a constant so I can simply use the constants istead of this.prop.value all the time. Instead of using const value= this.props.value, const onChange=this.props.onChange an so on ... I can do this:

  const {value, handleChange, copying, toggleTape, copyCatName} = this.props;

  // this is equal to:
  //    const copying = this.props.copying;
  //    const toggleTape = this.props.toggleTape
  //    const value= this.props.input
  //    const handleChange= this.props.handleChange

  // !DO NOT FORGET!!! => THIS NEEDS TO BE IN RENDER METHOD !!!
    
    return (
      <div style={styles.divStyles}>
        
        <h1>Copy Cat {copyCatName ? copyCatName : 'Tom'}</h1>
        {/* another way how to do this woul be using the same logic as && but this time with OR -> || 
        <h1>Copy Cat { copyCatName || 'Tom}</h1> => Saying, if copyCatName is true then show copyCatName, if it is false(nothing was passed down) show 'Tom */}

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


//Declaring PropTypes as static property on CopyCat
CopyCat.propTypes = {
  
  value:            PropTypes.string.isRequired,
  handleChange:     PropTypes.func.isRequired,    // Note that handle Change is FUNCTION so I need to use .func datatype
  copying:          PropTypes.bool.isRequired,
  toggleTape:       PropTypes.func.isRequired,
  copyCatName:      PropTypes.string




}




export default CopyCat;