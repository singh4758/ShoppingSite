import React, { Component } from 'react'

export default class Header extends Component {

    countCartItem=()=>{
        var cartItem = this.props.state.cartItem;
        var value=0;
        for(var i=0;i<cartItem.length;i++){
            value = parseInt(value) + parseInt(cartItem[i].Qty);
        }
        return value;
    }


    render() {
        return (
            
            <div className="header">
                <div>USD</div>
                <h1 style={{margin:0}}>BONFIRE</h1>
                <div className="cart-button" style={{cursor: 'pointer'}} onClick={this.props.showCart}>CART({this.countCartItem()})</div>
            </div>
        )
    }
}
