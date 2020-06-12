import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';

import ColorBox from './ColorBox';
import './palette.css';
import 'rc-slider/assets/index.css';


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
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
                {/* NavBar goes here */}
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Palette;