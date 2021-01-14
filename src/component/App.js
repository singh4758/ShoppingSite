
import React, { Component } from 'react';
import ItemContainer from './ItemContainer';
import Header from './Header';
import Cart from './Cart'; 
import Navigation from './Navigation';
import first from '../statics/1.jpeg';
import second from '../statics/2.jpeg';
import third from '../statics/3.jpeg';
import forth from '../statics/4.jpeg';
import fifth from '../statics/5.jpeg';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      cartItem :[],
      wishlist : [],
      Image : first,
      mainImage : first,
      smallImage : [first,second,third,forth,fifth],
      name : "The Atelier Tailored Coat",
      cost : 300,
    }
  }


  changeImage=(value)=>{
    this.setState({
      mainImage : value
    })
  }

  addToCart=(value)=>{
    var arr = this.state.cartItem;
    arr.push(value);
    this.setState({
      cartItem : arr
    })
  }

  addToWishlist=(value)=>{
    var arr = this.state.wishlist;
    var index = arr.indexOf(value);
    if(index===-1){
      arr.push(value);
      this.setState({
        wishlist : arr
      })
      window.alert("Item Added to Wishlist");
    }
    else{
      window.alert("Item Already in Wishlist");
    }
  }

  addToWishList=(value)=>{
    var arr = this.state.wishlist;
    var index = arr.indexOf(value);
    if(index===-1){
      arr.push(value);
      this.setState({
        wishlist : arr
      })
    }else{
      arr.splice(index,1);
      this.setState({
        wishlist :arr
      })
    }
  }

  showCart=()=>{
    var cart = document.getElementById('cart');
    cart.style.display="block";
  }

  deleteCartItem=(item)=>{
    var arr = this.state.cartItem;
    var index = arr.indexOf(item);
    if(index!==-1){
      arr.splice(index,1);
    }
    this.setState({
      cartItem : arr
    });
  }


  render() {
    return (
      <React.Fragment>
        <Cart state={this.state} deleteCartItem={this.deleteCartItem}/>
        <Header state={this.state} showCart={this.showCart}/>
        <hr />
        <Navigation name={this.state.name} wishlist={this.state.wishlist}  addToWishList={this.addToWishList}/>
        <hr />
        <ItemContainer state={this.state} changeImage={this.changeImage} addToCart={this.addToCart} addToWishlist={this.addToWishlist}/>
      </React.Fragment>
    )
  }
}