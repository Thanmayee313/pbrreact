import React, { Component } from 'react'

export default class Stateclass extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 name:"ria",
                 count:0
            }
        };
        render(){
            setTimeout(() =>{
                this.setState({
                    name:"thanmayee"
                })
            },2000);
        
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

