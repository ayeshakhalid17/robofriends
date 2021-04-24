import React from 'react';

export default class ErrorBoundry extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    render(){
        return(
            <div>
            {this.state.hasError?<h1>Oops! There is some error in the app!</h1>:this.props.children}
            </div>
        )
    }
}