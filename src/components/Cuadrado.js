import React from 'react';
 import './Matriz.css';
 import './Cuadrado.css';
import Player1 from './Player1';
import Player2 from './Player2';
 

class Cuadrado extends React.Component{
    
      state = {
     turno:this.props.turnoM,
     
    
   
}

// cambiar =()=>{
//     this.setState({turnos :!this.state.turnos})
// }

marcar=()=>{

        this.props.onClick() 
        this.setState({valor:"X"})
       
}

//  random() {
//   return parseInt(Math.random() *10)
//  }
 
    render(){
       return(    
        <div className="cuadro"  onClick={this.marcar}> 
       {this.props.valor}
         </div>
       );
    }
}

export default Cuadrado ;