import React from 'react';
import  './Cuadrado.css';




class Popup extends React.Component {
    constructor(props){
        super(props)
    }

    state={
        className:"popuptext"
    }

render(){


    return(
//className
        <span className={this.state.className} id="myPopup">A Simple Popup!</span>
    );
}
}

export default Popup;