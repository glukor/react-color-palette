import React, { Component } from 'react';

import NavBar from './NavBar';
import ColorBox from './ColorBox';
import './palette.css';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ 
            level,
            format: 'hex' 
        });
    }

    changeFormat(val) {
        this.setState({format: val});
    }

    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ));

        return (
            <div className='palette'>
                <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Palette;