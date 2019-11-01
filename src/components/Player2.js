import React, { Component } from 'react'
import './Player2.css';
export default class Player2 extends Component {
    
    state={
       ganadas:0,
       perdidas:0
    }
 
        render() {
            return (
              <label className="circulo">O  
                <br/> 
                <label>Ganadas : {this.state.ganadas}</label> 
                 <br/> <label> Perdidas : {this.state.perdidas}
                </label> 
                 </label>
            )
        }
    }
    