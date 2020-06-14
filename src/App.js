import React, { Component } from 'react';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {

  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE GOES HERE</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>SINGLE PALETTE</h1>}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}





export default App;
