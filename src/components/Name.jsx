import React from 'react';

class Name extends React.Component {
    render() {
        //  console.log(this.props.name)
        var pStyle = {
            color: 'green',
            float: 'left'

        }
        return (
            <div>
                <div>
                    {this.props.name.map((current, index) => <p key={index} >{current}</p>)}
                </div>
            </div>
        );
    }

}




export default Name;