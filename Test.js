import React, { Component } from 'react'

class Test extends Component {
    render() {
        return (
            <h6 className="card-subtitle mb-2">{this.props.country}</h6>
        );
    }      
}
    
export default Test;