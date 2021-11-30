import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function RenderItem()
{
    return <div><h1>Display list of items</h1><div className="container"><div className = "border"><App1/></div></div>
    <h1>Display based on type</h1><div className="container"><div className = "border"><App/></div></div>
    <h1>Filter All The Data Starting With J</h1><div className="container"><div className = "border"><App2/></div></div>
    <h1>Filter Age Where Age greter than 28 and less than or equal to 50</h1><div className="container"><div className = "border"><App3/></div></div>
    <h1>Find The Total Years Of the Designers</h1><div className="container"><div className = "border"><App4/></div></div></div>
}
class App1 extends React.Component
{
constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    }
    }
    render()
    {   
        return <div>{this.state.userData.map(item => 
        <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>)}
        </div>
    }
}



class App extends React.Component
{
constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    }
    }
    render()
    {   
        let ans = this.state.userData.filter(item => item.user_type === "Designer");
        return <div>{ans.map(item => 
            <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>
        )} </div>
     
    }
}


class App2 extends React.Component
{
constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    }
    }
    render()
    {   
        let ans = this.state.userData.filter(item => item.name[0] === "J");
        return <div>{ans.map(item => 
            <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>
        )} </div>
     
    }
}


class App3 extends React.Component
{
constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    }
    }
    render()
    {   
        let ans = this.state.userData.filter(item => item.age > 28 && item.age <= 50);
        return <div>{ans.map(item => 
            <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
        </li>
        )} </div>
     
    }
}

class App4 extends React.Component
{
constructor(){
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    }
    }
    render()
    {   
        let ans = this.state.userData
        .filter(item => item.user_type === "Designer")
        .reduce((total,item) => total+item.years,0);
        return <div>{ans}</div>
     
    }
}

ReactDOM.render(<RenderItem/>,document.getElementById('root'));