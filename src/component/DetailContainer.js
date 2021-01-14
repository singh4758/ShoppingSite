import React, { Component } from 'react'

export default class DetailContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            Color : "Select Color",
            Size : "Select Size",
            Qty : 1
        }
    }

    changeColor=()=>{
        var value = document.getElementById('color').value;
        this.setState({
            Color : value
        });
    }

    changeSize=()=>{
        var value = document.getElementById('size').value;
        this.setState({
            Size : value
        });
    }

    changeQty=()=>{
        var value = document.getElementById('qty').value;
        this.setState({
            Qty : value
        });
    }

    addToCart=()=>{

        if(this.state.Color==="Select Color" || this.state.Size==="Select Size" ){
            window.alert("Please Select Color and Size");
            return;
        }

        if(this.state.Qty<1 || this.state.Qty>10){
            window.alert("Please Select Quantity Between 1 to 10");
            return;
        }

        var value={
            Color : this.state.Color,
            Size : this.state.Size,
            Qty : this.state.Qty,
            Name : this.props.state.name,
            Cost : this.props.state.cost,
            Image : this.props.state.Image
        }
        this.props.addToCart(value);
        window.alert("Product Added In Cart");
        this.Reset();
    }

    addToWishlist=()=>{
        this.props.addToWishlist(this.props.state.name);
    }

    Reset=()=>{
        this.setState({
            Color: "Select Color",
            Size : "Select Size",
            Qty : 1
        })

        var color=document.getElementById('color');
        var size=document.getElementById('size');
        var qty=document.getElementById('qty');
        color.value="Select Color";
        size.value="Select Size";
        qty.value=1;
    }


    render() {
        return (
            <div className="detail-container">
                <p>Back to Man</p>
                <h3>{this.props.state.name}</h3>
                <div></div>
                <h2 style={{color:'lightgrey'}}>${this.props.state.cost}</h2>
                <small><span style={{fontWeight:'bolder'}}>Availability : </span><span style={{color:'lightblue'}}> IN Stock</span></small>
                <br/>
                <small><span style={{fontWeight:'bolder'}}>Product Code : </span><span style={{color:'lightblue'}}> #4657</span></small>
                <br />
                <small><span style={{fontWeight:'bolder'}}>Tags : </span><span style={{color:'lightblue'}}> Faishoned,Hood,Classic</span></small>
                <br/>
                <p>Sleek, polished, and boasting an impeccably modern fit, this blue, 2-button Lazio suit features a notch lapel, flap pockets, and accompanying flat
                    front trouser-all in pure wool by Vitale Barbaris Canonica.
                </p>
                <ul style={{paddingLeft:20}}>
                    <li> Dark blue suit for a tone-on-tone</li>
                    <li>Regular Fit</li>
                    <li>100% Cotton</li>
                    <li>Free shipping with 4 days delivery</li>
                </ul>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span style={{display:'flex',flexDirection:'column'}}>
                        <label>Color</label>
                        <br/>
                        <select id="color" onChange={this.changeColor}>
                            <option>Select Color</option>
                            <option>Yellow</option>
                            <option>Gray</option>
                            <option>White</option>
                            <option>Black</option>
                        </select>
                    </span>
                    <span style={{display:'flex',flexDirection:'column'}}>
                        <label>Size</label>
                        <br/>
                        <select id="size" onChange={this.changeSize}>
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                    </span>
                    <span style={{display:'flex',flexDirection:'column'}}>
                        <label>Qty</label>
                        <br/>
                        <input type="number" defaultValue="1" min="1" max="10" id="qty" onChange={this.changeQty} />
                    </span>
                </div>
                <br/>
                <small style={{textDecorationLine:'underline',cursor:'pointer'}} onClick={this.Reset}>CLEAR SELECTION</small>
                <br />
                <br />
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{cursor:'pointer',width:170,height:40,display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid black',backgroundColor:'black',fontWeight:'bolder',color:'white'}} onClick={this.addToCart}>ADD TO CART</div>
                    <div style={{cursor:'pointer',width:170,height:40,display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid black',fontWeight:'bolder'}} onClick={this.addToWishlist}>ADD TO WISHLIST</div>
                </div>
            </div>
        )
    }
}
