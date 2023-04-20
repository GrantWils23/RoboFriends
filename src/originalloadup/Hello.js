import React, { Component } from 'react';
import './Hello.css';

// always have a render function in the class and what we want it to return

class Hello extends Component {
    render() {
        return (
        <div className='f1 tc'>
            <h1>Hello World</h1>
            {/* <p>Welcome to React</p> */}
            <p>{this.props.greeting}</p>
        </div>
        );
    }
}

// have to wrap the return in brackets if you have multiple lines in the return. Return only expects to read one line.

// const Hello = (props) => {
//     return (
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>{props.greeting}</p>
//         </div>
//     );
// }


export default Hello;


// the class needs to be changed to className to conform with JSX... separation of concerns of the component

// JSX under the hood is creating a virtual (Fake) DOM and builds it accordingly based on the virtual DOM.

// props is just a function

// class is an object and props is a function of a class!