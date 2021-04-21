import React from 'react';
import CardList from '../components/CardList.js';
import SearchBar from '../components/SearchBar.js';
import Scroll from '../components/Scroll.js';
import { robots } from '../components/robots.js';
import './App.css';
class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield:'',
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>this.setState(this.state.robots=users))
    }
    onSearchChange=event=>{
        this.setState({
            searchfield:event.target.value
        });
    }
    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        })
        return(
            <div>
                <h1 className="title">RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}
export default App;