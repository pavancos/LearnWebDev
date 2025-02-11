import './App.css';
import React from 'react';
function App() {
  return (
    React.createElement(
      'div',{
        style:{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'black',
        color: 'white',
        margin: 0,
        padding: 0
      }},
      React.createElement(
        'h1',{
          style:{
            margin:0,
            fontSize: '4rem',
            fontFamily: 'monospace',
            background:'#333',
            width: '100%'
          }
        },
        'Header'
      ),
      React.createElement(
        'p',{
          style:{
            fontSize: '4rem',
            fontFamily: 'monospace',
            height:'calc(100% - 20px)',
            width: '100%',
            background:'#333',
          }
        },
        'Body'
      ),
      React.createElement(
        'footer',{
          style:{
            fontSize: '4rem',
            fontFamily: 'monospace',
            'width': '100%',
            'background': '#333',
          }
        },
        'Footer'
      )
    )
  )
}

export default App;
