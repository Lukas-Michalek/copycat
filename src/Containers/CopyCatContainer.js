import React from 'react';
import CopyCat from '../Components/CopyCat/CopyCat';

// const images = {
//   copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
//   quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
// };


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input:''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  handleChange = (event) => {
    
    this.setState({input: event.target.value});

  }
  
  render() {
    // const copying = this.state.copying;
    // const toggleTape = this.toggleTape
    
    return ( 
      <CopyCat
        toggleTape={this.toggleTape}
        copying={this.state.copying}
        value={this.state.input}
        handleChange={this.handleChange}
      />
    );
  };
}



export default CopyCatContainer;