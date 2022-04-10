import React, { Component } from 'react';
import axios from 'axios';


export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          selectedFile: null
        }; 
      }
  
      // upload the file to the server
      uploadFile = () => { 
        // console.log(this.state.selectedFile);
        if(this.state.selectedFile !=null){
            const formData = new FormData(); 
            formData.append( "myfile", this.state.selectedFile);
            axios.post('api/test', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                console.log('SUCCESS');
                alert('SUCCESS')
            }).catch(()=>{
                console.log('ERROR');
                alert('ERROR')
            });
            this.setState({ selectedFile: null}); 
            this.fileInput.value = "";

        }else{
            alert('please select a file')
        }        
      }; 
  
      changeFile = (event) => { 
          // console.log('change')
          this.setState({ selectedFile: event.nativeEvent.target.files[0] }); 
      }; 
  
      render() {
        return (
        <div>
          <p>
            (this is the upload component)
          </p>
          <div> 
                  <input type="file" ref={ref=> this.fileInput = ref} onChange={event=>this.changeFile(event)} /> 
                  <button onClick={this.uploadFile}> 
                  Encrypt & Upload  
                  </button> 
              </div> 
        </div>
        );
      }
  }