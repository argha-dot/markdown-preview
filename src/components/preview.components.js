import React, { Component } from "react"
import Badge from "react-bootstrap/Badge"
import marked from "marked"

export default class Preview extends Component {
    render() {

        const final = marked(this.props.markdown)

        var outputStyle = {
            height: "100vh",
            width: "90vh",
            padding: "10px",
            overflow: "auto",
            backgroundColor: "#212121",
            marginLeft: "10px",
            marginRight: "auto",
            color: "#E0E0E0"
        };

        return(
            <div className="preview-pane">
                <h4 className="preview-title" style={{ display: "flex", justifyContent: "center" }}>
                <Badge className="text-align-center" variant="light">
                    Preview
                </Badge>
                </h4>
                <div
                    className="preview-output"
                    style={outputStyle}
                    dangerouslySetInnerHTML={{__html: final}}
                ></div>
            </div>
        )
    }
}