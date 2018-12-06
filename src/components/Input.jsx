import React from 'react';


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        // this.handel = this.handel.bind(this);
    }

    Handel = (e) => {
        let data = e.target.value
        this.setState({ name: data })
    }
    Insert = () => {
        let name = this.state.name;
        if(name!='')
        {
            this.props.insert(name)
            this.setState({name:''})
        }
        else{
            alert('Please Enter Name')
        }
            
        
       
    }

    render() {
        return (<div>
            <input placeholder="Enter name" value={this.state.name} onChange={this.Handel} />
            <button onClick={this.Insert} >Add Text</button>
            <button onClick={this.props.del}>Reset</button>
        </div>);
    }


}



export default Input;