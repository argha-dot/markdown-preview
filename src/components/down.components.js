import React, { Component } from "react";

export default class Down extends Component {
    render() {
        var inputStyle = {
            width: "90vh",
            height: "100vh",
            marginLeft: "auto",
            marginRight: "auto",
            resize: "none",
            padding: "5px",
            color: "#E0E0E0",
            border: "none",
            backgroundColor: "#212121",
        };


        return (
            <div className="down-pane">
                <div className="down-title" style={{ display: "flex", justifyContent: "center", color: "#202020" }}>
                    <h4 style={ {fontWeight: "bold"} }>
                        Mark&#8595;
                    </h4>
                </div>
                <textarea className="mark-input"
                    value={this.props.markdown}
                    style={inputStyle}
                    onChange={this.props.updateMarkdown}
                ></textarea>
            </div>
        )
    }
}