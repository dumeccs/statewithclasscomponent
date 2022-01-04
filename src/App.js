import React from 'react'

import logo from './logo.svg';
import './App.css';

const style = {width:'500px',height:'400px'}
class App extends React.Component{

  state = {
  showState: true,
   person:{
    fullName : 'Brother Bear',
    bio: "Brother's keeper",
    imgSrc:'./Bkeeper.jpg',
    profession:'care taker'
   }
  }
 

  render(){
    return (
      
      <div className="App">
       <h2>Profile</h2>
       <img src = {this.state.person.imgSrc} alt="users-profile" style = {style} />
       <p> Fullname : {this.state.person.fullName}</p>
       <p>Bio: {this.state.person.bio}</p>
       <p>Profession: {this.state.person.profession}</p>

       <button onClick={this.clickFunc}>Show Profile</button>
      </div>
      
    );
  }

  
  
}

export default App;
