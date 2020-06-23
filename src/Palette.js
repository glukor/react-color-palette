import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import NavBar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import './palette.css';

const styles = {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    colors: {
        height: '90%'
    }
}


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
        this.setState({ format: val });
    }

    render() {
        const { classes } = this.props
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette={true}
            />
        ));

        return (
            <div className={classes.palette}>
                <NavBar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors
                />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);