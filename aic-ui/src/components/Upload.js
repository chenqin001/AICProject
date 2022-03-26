import React, { Component } from 'react';


export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          selectedFile: null
        }; 
      }
  
      uploadFile = () => { 
          // call to the backend
          console.log('upload')
          console.log(this.state.selectedFile)
      }; 
  
      changeFile = (event) => { 
          console.log('change')
          this.setState({ selectedFile: event.nativeEvent.target.files[0] }); 
      }; 
  
      render() {
        return (
        <div>
          <p>
            (this is the upload component)
          </p>
          <div> 
                  <input type="file" onChange={event=>this.changeFile(event)} /> 
                  <button onClick={this.uploadFile}> 
                  Encrypt & Upload  
                  </button> 
              </div> 
        </div>
        );
      }
  }