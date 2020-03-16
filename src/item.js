
import React, { Component } from 'react';
 
class Item extends Component {
    render() { 
        const { Image,titre, prix ,Price,Name} = this.props.item
        return (
          
            // `hhttp://localhost:3050/produit/getFile/${item.Image}`
<div>
    <div class="col-md-4 text-center">
        <div class="product-entry">
            <div class="product-img"  style={{backgroundImage :`url(http://localhost:3050/produit/getFile/${Image})`}}>
                <p class="tag"><span class="new">New</span></p>
                <div class="cart">
                    <p>
                        <span class="addtocart"><a href="cart.html"><i class="icon-shopping-cart"></i></a></span> 
                        <span><a href="product-detail.html"><i class="icon-eye"></i></a></span> 
                        <span><a href="#"><i class="icon-heart3"></i></a></span>
                        <span><a href="add-to-wishlist.html"><i class="icon-bar-chart"></i></a></span>
                    </p>
                </div>
            </div>
            <div class="desc">
                <h3><a href="product-detail.html">{Name}</a></h3>
                <p class="price"><span>${Price}</span></p>
            </div>
        </div>
        </div>
   

</div>

        );
    }
}
 
export default Item;


