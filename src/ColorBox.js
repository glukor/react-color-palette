import React, { Component } from 'react';

import './colorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className='colorBox'>
                <span>{this.props.name}</span>
                {/* <span>MORE</span> */}
            </div>
        )
    }
}

export default ColorBox;