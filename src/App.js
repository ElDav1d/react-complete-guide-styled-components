import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import StyledInput from './StyledInput'; 

class App extends Component {
  state = {
    text : {
      inputString: ''
    }
  }

  textChangeHandler = (event) => {
    const textNew = {...this.state.text};
    textNew.inputString = event.target.value;
    this.setState({text:textNew});
  }

  deleteCharHandler = (charIndex) => {
    const newTextArray = [...{...this.state.text}.inputString];
    newTextArray.splice(charIndex, 1);
    newTextArray.inputString = newTextArray.join('');
    this.setState({text:newTextArray})
  }
  
  render() {
    const stringToArray = [...this.state.text.inputString];
    let list = null;
    
    if (stringToArray.length) {
      list = (
        <ul>
          {stringToArray.map((item, index) =>{
            return <CharComponent
                char={item}
                click={() => this.deleteCharHandler(index)}
                key={index} />
          })}
        </ul>
      );
    }
    
    const textLength = this.state.text.inputString.length;
    return (
      <div className="App">
        <h1>LET'S GO</h1>
        <form>
          <label className="App-input">Write some text bellow</label>
          <StyledInput
            onChange={this.textChangeHandler}
            type="text"
            value={this.state.text.inputString}/>
        </form>
        <h3>
          Text's length is {textLength}
        </h3> 
        <ValidationComponent 
          textLength={textLength}/>
        {list}
      </div>
    );
  }
}

export default App;
