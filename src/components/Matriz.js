import React from 'react';
import './Matriz.css';
import Cuadrado from './Cuadrado';
import Player1 from './Player1';
import Player2 from './Player2';
 
class Matriz extends React.Component{
  constructor(props) {
    super(props)
 
this.state={
  turnoM:false,
  estadoM:"",
 
}
}

cambiar =()=>{
    this.setState({turnoM :!this.state.turnoM,estadoM:"X"})
}
 
 render(){
     const array=[0,1,2,3,4,5,6,7,8];
    
     return (
        <div className="body">
          <Player1/>
          <Player2/>
         <div className="contenedor" >      
           { array.map((index) => <Cuadrado  key={index} onClick={()=>this.cambiar()}  valor={this.state.estadoM}/> )}
           {console.log(this.state.estadoM)}
               </div>      
             
      </div>

     )
 }

 

}

export default Matriz;