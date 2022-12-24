
import React  from 'react';
import Conter from './Conter';

class App extends React.Component {
  constructor(){  
    super();
      this.state = {
       Person: {
      fullName: "Firas ELJED",
      bio: "I'm Student at GoMyCode ",
      imgSrc: 'https://www.linkpicture.com/q/me_1.jpg',
      profession: "Student"
    },
    show: true
  };
}

  show = () =>{
    this.setState({
      show: !this.state.show 
    })
     console.log(this.state.show)

  }
  


  render() {
    return (
      <>
       {this.state.show &&
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img src={this.state.Person.imgSrc} alt="Jack"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
            </div>
          }
        <button onClick={this.show}>Show Or Hide Content</button>
        <Conter/>      
      </>
    );
  }
}


export default App;
