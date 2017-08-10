import React, { Component } from 'react';
import GofindRequest from './requestHandler'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base64value: '',
      results: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    let results = JSON.stringify(this.state.results);

    return <div>{results}</div>
  }

  handleSubmit(e) {
    e.preventDefault();
    // Selects all of the files input by the user
    let filesSelected = document.getElementById('image').files;

    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      let fileReader = new FileReader();
      // THe selected file is converted into a base64 format so
      // that it can be passed to the API.
      fileReader.onload = fileLoadedEvent => {
        let base64value = fileLoadedEvent.target.result;
        base64value = base64value.split(",")[1].toString();

        GofindRequest(base64value)
          .then( data => {
            this.setState({ base64value: base64value, results: data });
          })
      };
      fileReader.readAsDataURL(fileToLoad);
    // After file has been converted and transformed. Reset the input
    // field to empty.
    document.getElementById('image').value = '';
    }
  }

  render() {
    return (
      <div className="App">
        <form
          name="image-form"
          onSubmit={this.handleSubmit}
          type="submit"
          encType="multipart/form-data"
          required>
          <p>Please specify a file: </p>
          <input id="image" ref="inputImage" type="file" name="datafile" size="40" accept="image/*"/>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <p>Response JSON object: </p>
          {this.state.results ? this.renderResults() : <p>No file has been selected.</p>}
        </div>
      </div>
    );
  }
}

export default App;
