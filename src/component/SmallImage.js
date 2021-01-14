import React, { Component } from 'react'

export default class SmallImage extends Component {
    change=()=>{
        this.props.changeImage(this.props.image);
    }

    render() {
        return (
            <div className="small-image">
                <img src={this.props.image} alt="cloth" onClick={this.change}/>
            </div>
        )
    }
}
