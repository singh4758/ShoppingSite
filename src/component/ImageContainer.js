import React, { Component } from 'react'
import SmallImage from './SmallImage';

export default class ImageContainer extends Component {
    render() {
        let state = this.props.state;
        return (
            <div className="image-container">
                <div className="main-image-container">
                    <img src={state.mainImage}  alt="Cloths" />
                </div>
                <div className="small-image-container">
                    {state.smallImage.map((image)=>{
                        return <SmallImage image={image} key={image} changeImage={this.props.changeImage}/>
                    })}
                </div>
            </div>
        )
    }
}
