import React from 'react';

class Button extends React.Component {

  
    render(){
        return (
            <button onClick={() => this.props.incrementBy(2)}>increment</button>
        );
    }
   

}


export default Button;