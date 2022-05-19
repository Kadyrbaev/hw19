
import React from 'react';
import './App.css';
import Forma from './components/Forma';


class App extends React.Component{
  
    state={
      todos: []
    };
  
  saveInputHandler=(obj)=>{
    console.log(obj);

    this.setState({
      todos: [obj, ...this.state.todos]
    })
   }

  render(){
     return (
    <div className="App">    
      <Forma onSaveInputHandler={this.saveInputHandler}/>
      {this.state.todos.map((el)=>{
        return (
          <div key={el.id} className='wrapapp'>
            <p> {el.userName}</p>
            <p>{el.lastName}</p>
            <p>{el.age}</p>
          </div>
        )
      })}
    </div>
  );
  }
 
}

export default App;
