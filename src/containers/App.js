import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // robots: robots,  // Static from the robots js file
      robots: [],
      searchfield: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    // this.setState({ robots: robots });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users })); // remove this to see it doesnt update the robots, this way you are seeing the process works
    // .then(users=> {});  // Toggle the above state to see the loading tab appear if the robots were not to show
    console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
    // const filteredRobots = this.state.robots.filter(robot => {
    //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
    // console.log(filteredRobots);
  };

//   render() {
//     const filteredRobots = this.state.robots.filter((robot) => {
//       return robot.name
//         .toLowerCase()
//         .includes(this.state.searchfield.toLowerCase());
//     });
//     if (this.state.robots.length === 0) {
//       return (
//         <div className="tc pa3">
//           <h1> Loading </h1>{" "}
//         </div>
//       );
//     } else {
//       console.log("render");
//       return (
//         <div className="tc">
//           <h1 className="f1"> RoboFriends </h1>{" "}
//           <SearchBox searchChange={this.onSearchChange} />{" "}
//           <Scroll>
//             {" "}
//             {/* <CardList robots = { this.state.robots }/> */}{" "}
//             <CardList robots={filteredRobots} />{" "}
//           </Scroll>{" "}
//         </div>
//       );
//     }
//   }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    })
        return !robots.length ? 
        (
            <div className="tc pa3">
                <h1> Loading </h1>{" "}
            </div>
    ) : (
        <div className="tc">
          <h1 className="f1"> RoboFriends </h1>{" "}
          <SearchBox searchChange={this.onSearchChange} />{" "}
          <Scroll>
            {" "}
            <ErrorBoundry>
            {/* <CardList robots = { robots }/> */}{" "}
            <CardList robots={filteredRobots} />{" "}
            </ErrorBoundry>
          </Scroll>{" "}
        </div>
        );
    }
}



export default App;

// STATE IS AT THE TOP PARENT LEVEL... This now can pass the information down and between the child level

// PROPS ARE THINGS THAT COME OUT OF STATE

// OLD method which was exporting a function... below we are now creating an app with whereby we can make now look at the state of props

// const state = {
//     robots: robots,
//     searchfield: ''
// }

// const App = () => {
//     return (
//         <div className="tc">
//             <h1> RoboFriends</h1>
//             <SearchBox />
//             <CardList robots = { robots }/>
//         </div>
//     );
// }
