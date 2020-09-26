import React, { Component } from 'react';
import marked from "marked";
import NavBar from "./components/navbar.components"
import Down from "./components/down.components"
import Previw from "./components/preview.components"

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }

    this.saveMD = this.saveMD.bind(this)
    this.saveHTML = this.saveHTML.bind(this)
    this.updateMarkdown = this.updateMarkdown.bind(this)
  }

  saveMD() {
    const content = this.state.markdown;
    const fileName = "export.md";

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(new Blob([content], { type: 'text/md;charset=utf-8;' }), fileName);
    } else {
      const a = document.createElement('a');
      a.href = 'data:text/md;charset=utf-8,' + encodeURIComponent(content);
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  saveHTML() {
    const content = marked(this.state.markdown);
    const fileName = "export.html";

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(new Blob([content], { type: 'text/html;charset=utf-8;' }), fileName);
    } else {
      const a = document.createElement('a');
      a.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(content);
      a.download = fileName;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  updateMarkdown({target}) {
    const text = target.value;
    this.setState({ markdown: text})
  }
  
  render() {

    var mainStyle = {
      margin: "0px",
      paddingTop: "4rem", 
      display: "flex", 
      alignItems: "center",
      justifyContent: "center" 
    }

    return (
      <div className="App" style={{ backgroundColor: "rgb(75, 75, 75)", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <NavBar 
          saveMD={this.saveMD}
          saveHTML={this.saveHTML}
        ></NavBar>
        <div className="main" style={mainStyle}>
          <Down
            markdown={this.state.markdown}
            updateMarkdown={this.updateMarkdown}
          ></Down>
          
          <Previw
            markdown={this.state.markdown}
          ></Previw>
        </div>
      </div>
    )
  }
};
