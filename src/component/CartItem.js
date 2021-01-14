import React, { Component } from 'react'

export default class CartItem extends Component {
    deleteItem=()=>{
        this.props.deleteCartItem(this.props.item);
    }
    render() {
        return (
            <div className="cart-item">
                <img src={this.props.item.Image} alt={this.props.item.Name}/>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
                    <div style={{display:'flex',justifyContent:'center'}}>{this.props.item.Name}</div>
                    <div style={{display:'flex',justifyContent:'space-between',width:350}}>
                        <small style={{width:100}}>Color :- {this.props.item.Color}</small>
                        <small style={{width:100}}>Size :- {this.props.item.Size}</small>
                        <small style={{width:70}}>Qty :- {this.props.item.Qty}</small>
                    </div>
                </div>
                <div style={{cursor:"pointer"}}  onClick={this.deleteItem}>X</div>
            </div>
        )
    }
}
