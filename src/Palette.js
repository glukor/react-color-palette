import React, { Component } from 'react';

import NavBar from './NavBar';
import ColorBox from './ColorBox';
import './palette.css';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel });
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));

        return (
            <div className='palette'>
                <NavBar level={level} changeLevel={this.changeLevel} />
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Palette;