import React, { Component } from 'react';

export default class Navigation extends Component {

    isInWishList=()=>{
        var arr= this.props.wishlist;
        var index = arr.indexOf(this.props.name);
        if(index!==-1){
            return true;
        }
        return false;
    }

    addToWishList=()=>{
        this.props.addToWishList(this.props.name);
    }

    render() {
        return (
            <div className="navigation">
                <div><i className="fas fa-bars"></i></div>
                <div style={{display:'flex',justifyContent: 'space-around',width:500}}><div>HOME</div><div>MEN</div><div>WOMEN</div><div>LOOKBOOK</div><div>ABOUT</div><div>BLOG</div></div>
                <div style={{display:'flex',justifyContent: 'space-around'}}>
                    <div style={{cursor:'pointer'}} onClick={this.addToWishList}>{this.isInWishList()?<i className="fas fa-heart"></i>:<i className="far fa-heart" ></i>}</div>
                    <div> | </div>
                    <div> <i className="fas fa-search"  ></i></div>
                </div>
            </div>
        )
    }
}
