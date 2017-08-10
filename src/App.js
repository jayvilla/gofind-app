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

    return (
      <div>{results}</div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    let filesSelected = document.getElementById('image').files;
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];
      let fileReader = new FileReader();
      fileReader.onload = fileLoadedEvent => {
        let base64value = fileLoadedEvent.target.result;
        base64value = base64value.split(",");
        base64value = base64value[1].toString();
        this.setState({
          base64value: base64value
        })

        GofindRequest(this.state.base64value)
          .then( data => {
            this.setState({ results: data });
          })
      };
      fileReader.readAsDataURL(fileToLoad);
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
          {this.state.results ? this.renderResults() : ''}
        </div>
      </div>
    );
  }
}

export default App;
