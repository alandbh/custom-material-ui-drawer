import React, { Component } from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarTelaMapaInterna from './components/AppBarTelaMapaInterna';
import PainelDeFerramentas from './components/PainelDeFerramentas';
import './App.css';

injectTapEventPlugin();

const estiloAppHeader = {
  position: 'absolute',
  width: '100%',
  height: 64,
  zIndex: '9999',
}

const App = () => (
  <MuiThemeProvider>
    <div className="App">

         <div id="App-header">
           <AppBarTelaMapaInterna/>
         </div>

         <div id="drawerFerramentas">
           <PainelDeFerramentas secondary={false}/>
         </div>

         <div id="mapa">
           mapa aqui 2
         </div>
        
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


export default App;
