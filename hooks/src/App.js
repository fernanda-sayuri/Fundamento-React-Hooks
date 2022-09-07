import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reverse: false,
//     }
//   }

//   render(){
//     const {reverse} = this.state; 
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          
//           <button type='button' onClick={() => this.setState({ reverse: !reverse })}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     )
//   }
// }

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const handleClick = () => {
    setReverse(!reverse);
  }
  
  const [counter, setCounter] = useState(0);
  const handleClickCounter = () => {
    setCounter(counter+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
    
        <h1>Contador: {counter}</h1>

        <button type='button' onClick={handleClickCounter}>
          Contador++
        </button>

        <button type='button' onClick={handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  )
}

export default App;
