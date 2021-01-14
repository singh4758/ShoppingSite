import React, { Component } from 'react'
import DetailContainer from './DetailContainer'
import ImageContainer from './ImageContainer'

export default class ItemContainer extends Component {
    render() {
        return (
            <div className="item-container">
                <ImageContainer state={this.props.state} changeImage ={this.props.changeImage}/>
                <DetailContainer state={this.props.state} addToCart={this.props.addToCart} addToWishlist={this.props.addToWishlist}/>
            </div>
        )
    }
}
