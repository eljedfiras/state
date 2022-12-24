import React ,{Component} from 'react'

export default class Conter extends Component {
  constructor () {
    super()
    this.state={
      show : true ,
      count : 0 ,
  intervall : null 
    }
    
    }
    componentDidMount(){
      console.log(" componentDidMount")
      this.setState ({
       intervall : setInterval (
           ()=>this.setState({count : this.state.count +1 }) ,
           1000
       )
       
      })
    }
  render() {
    return (
      <div>
       <p>{this.state.count} </p>
       <h2>interval</h2>
       <p>{this.state.timer}</p>
      </div>
    )
  }
}
