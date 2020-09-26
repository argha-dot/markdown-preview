import React, { Component } from "react"
import { Badge, Navbar, Dropdown } from "react-bootstrap"

export default class NavBar extends Component {
    render() {

        var downButtonStyle = {
            color: "rgb(150, 150, 150)",
            backgroundColor: "#151515", 
            border: "none",
        }

        return (
            <Navbar fixed="top" style={{ backgroundColor: "rgb(50, 50, 50)", height: 50, display: "flex", justifyContent: "space-between"}}>
                <Navbar.Brand>
                    <h2>
                        <Badge className="text-align-center" variant="light" style={{ backgroundColor: "#151515", color: "rgb(150, 150, 150)"}}>
                            Mark&#8595; 
                    </Badge> Viewer
                    </h2>
                </Navbar.Brand>
                
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={downButtonStyle}>
                        <i className="fas fa-download"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item onClick={this.props.saveMD}>Download Edited Markdown File</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.saveHTML}>Download Compiled HTML</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        )
    }
}