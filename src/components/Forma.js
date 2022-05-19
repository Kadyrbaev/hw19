import React from "react"
import classes from './Forma.module.css'

class Forma extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName: '',
            lastName: '',
            age: '',
            isValid: false,
        }

    }

    saveUserName=(e)=>{
        this.setState({userName: e.target.value})
        if(e.target.value !== ''){
            this.setState({isValid:true})
        }
    }
    savelastName=(e)=>{
        this.setState({lastName: e.target.value})
        if(e.target.value !== ''){
            this.setState({isValid:true})
        }
    }
    saveAge=(e)=>{
        this.setState({age: e.target.value})
        if(e.target.value !== ''){
            this.setState({isValid:true})
        }
    }


    saveInputValue=(e)=>{
        e.preventDefault()
  
        this.props.onSaveInputHandler({
            userName: this.state.userName,
            lastName: this.state.lastName,
            age: this.state.age,
            id:Math.random().toString()
        })
        this.setState({
            userName:'',
            lastName: '',
            age: '',
        })
        this.setState({isValid:false})
    }
    
    render(){
        return (
        <form className={classes.wrap} onSubmit={this.saveInputValue.bind(this)}>
            <input value= {this.state.userName} onChange={this.saveUserName.bind(this)} placeholder="FirstName"></input>
            <input value= {this.state.lastName} onChange={this.savelastName.bind(this)} placeholder="LastName"></input>
            <input value= {this.state.age} onChange={this.saveAge.bind(this)} placeholder="Age" type="number"></input>
            <button className={this.state.isValid ? classes.but : ''} disabled={!this.state.isValid} onClick={this.saveInputValue.bind(this)}>Add</button>
        </form>
    )
    }
    
}
export default Forma