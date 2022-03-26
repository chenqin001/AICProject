import React, { Component } from 'react';

export default class Download extends Component {

   constructor(props) {
      super(props);
    }
 
    render() {
        var files = []
        for(var i = 0; i < 5; i++){
            files.push(
            <div style={{ color: 'green',display:'flex',alignSelf:'center'}}>
            <li style={{}}>files{i}</li>
            <button>Decrypt & Download</button>
            </div>
            )
        }

      return (
      <div>
        <p>
          (this is the download component)
        </p>
        {files}
      </div>
      );
    }
  }