import React, { Component } from 'react'
import CartItem from './CartItem';

export default class Cart extends Component {

    closeCart=()=>{
        var cart = document.getElementById('cart');
        cart.style.display="none";
    }

    totalItem=()=>{
        var cartItem = this.props.state.cartItem;
        var value=0;
        for(var i=0;i<cartItem.length;i++){
            value = parseInt(value) + parseInt(cartItem[i].Qty);
        }
        return value;
    }

    totalCost=()=>{
        var cartItem = this.props.state.cartItem;
        var value=0;
        for(var i=0;i<cartItem.length;i++){
            value = parseInt(value) + parseInt(cartItem[i].Qty)* parseInt(cartItem[i].Cost);
        }
        return value;
    }

    render() {
        return (
            <div className="cart" id="cart" style={{display:"none"}} onClick={this.props.showCart}>
                <div className="cross-container">
                    <h3 style={{margin:0, marginLeft:30}}>Cart Item</h3>
                    <div className="cross" onClick={this.closeCart}>X</div>
                </div>
                <ol style={{overflowY:"scroll",height:390}}>
                    {this.props.state.cartItem.map((item,index)=>{
                        return <li key={index} style={{marginBottom:10}}><CartItem item={item} key={index} deleteCartItem={this.props.deleteCartItem}/></li>
                    })}
                </ol>
                <div style={{display:'flex',justifyContent:'space-around'}}><div>Total Item :- {this.totalItem()}</div><div>Total Cost :- ${this.totalCost()}</div></div>
            </div>
        )
    }
}
