import React from 'react';
import CopyCat from '../Components/CopyCat/CopyCat';

class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input:'',
      copyCatName: ''
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
        copyCatName={this.state.copyCatName}
      />
    );
  };
}



export default CopyCatContainer;