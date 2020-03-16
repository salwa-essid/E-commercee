import React, { Component } from 'react';
import Item from "./item"
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import list from "./list"
let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;
class Magazin extends Component {
    constructor(props) {
        super(props);
        this.state = { produit: [],
            currentPage: 1,
            todosPerPage: 5 }
            this.handleClick = this.handleClick.bind(this);

    this.handleLastClick = this.handleLastClick.bind(this);

    this.handleFirstClick = this.handleFirstClick.bind(this);

  }
  handleClick(event) {

    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  handleLastClick(event) {

    event.preventDefault();

    this.setState({
      currentPage:last
    });
  }
  handleFirstClick(event) {

    event.preventDefault();

    this.setState({
      currentPage:1
    });
  }
       
      
      
      componentDidMount() {
        this.getAll();
      }
      getAll() {
        fetch("http://localhost:3050/produit/ListProduit", {method: "GET"})
          .then(response => response.json())
          .then(data => {
            console.log("produit", data);
            this.setState({produit: data})
          })
      }
    render() { 
        let {produit, currentPage, todosPerPage} = this.state;


    // Logic for displaying current todos

    let indexOfLastTodo = currentPage * todosPerPage;

    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    let currentTodos = produit.slice(indexOfFirstTodo, indexOfLastTodo);


    prev = currentPage > 0 ? (currentPage - 1) : 0;

    last = Math.ceil(produit.length / todosPerPage);

    next = (last === currentPage) ? currentPage : currentPage + 1;



    // Logic for displaying page numbers

    let pageNumbers = [];

    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }
        return (
            <div>
		
            <div class="colorlib-loader"></div>
        
            <div id="page">
                <nav class="colorlib-nav" role="navigation">
                    <div class="top-menu">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-2">
                                    <div id="colorlib-logo"><a href="index.html">Store</a></div>
                                </div>
                                <div class="col-xs-10 text-right menu-1">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li class="has-dropdown active">
                                            <a href="shop.html">Shop</a>
                                            <ul class="dropdown">
                                                <li><a href="product-detail.html">Product Detail</a></li>
                                                <li><a href="cart.html">Shipping Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="order-complete.html">Order Complete</a></li>
                                                <li><a href="add-to-wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="cart.html"><i class="icon-shopping-cart"></i> Cart [0]</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <aside id="colorlib-hero" class="breadcrumbs">
                    <div class="flexslider">
                        <ul class="slides">
                       
                         <li  style={{backgroundImage :`url(images/cover-img-1.jpg)`}}>
                               <div class="overlay"></div>
                               <div class="container-fluid">
                                   <div class="row">
                                       <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                                           <div class="slider-text-inner text-center">
                                               <h1>Products</h1>
                                               <h2 class="bread"><span><a href="index.html">Home</a></span> <span>Shop</span></h2>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </li>
         </ul>
                      </div>
                </aside>
        
                <div class="colorlib-shop">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-10 col-md-push-2">
                        <div class="row row-pb-lg">
                        {currentTodos.map((el, index) => <Item item={el} key={index} />)}
                        <div class="row">
    <div class="col-md-12">
    <nav>

    <Pagination className="d-flex">

      <PaginationItem>
        { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
          <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
        }
      </PaginationItem>
      <PaginationItem>
        { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
          <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
        }
      </PaginationItem>
      {
        pageNumbers.map((number,i) =>
          <Pagination key= {i}>
            <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
              <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                {number}
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        )}

      <PaginationItem>
        {
          currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
            <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
        }
      </PaginationItem>

      <PaginationItem>
        {
          currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
            <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
        }
      </PaginationItem>
    </Pagination>
  </nav>


</div>
</div>
                        </div>
                        </div>
                        <div class="col-md-2 col-md-pull-10">
                                <div class="sidebar">
                                    <div class="side">
                                        <h2>Categories</h2>
                                        <div class="fancy-collapse-panel">
                                      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                         <div class="panel panel-default">
                                             <div class="panel-heading" role="tab" id="headingOne">
                                                 <h4 class="panel-title">
                                                     <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Men
                                                     </a>
                                                 </h4>
                                             </div>
                                             <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                 <div class="panel-body">
                                                     <ul>
                                                         <li><a href="#">Jeans</a></li>
                                                         <li><a href="#">T-Shirt</a></li>
                                                         <li><a href="#">Jacket</a></li>
                                                         <li><a href="#">Shoes</a></li>
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="panel panel-default">
                                             <div class="panel-heading" role="tab" id="headingTwo">
                                                 <h4 class="panel-title">
                                                     <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Women
                                                     </a>
                                                 </h4>
                                             </div>
                                             <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                 <div class="panel-body">
                                                    <ul>
                                                         <li><a href="#">Jeans</a></li>
                                                         <li><a href="#">T-Shirt</a></li>
                                                         <li><a href="#">Jacket</a></li>
                                                         <li><a href="#">Shoes</a></li>
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="panel panel-default">
                                             <div class="panel-heading" role="tab" id="headingThree">
                                                 <h4 class="panel-title">
                                                     <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Jewelry
                                                     </a>
                                                 </h4>
                                             </div>
                                             <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                 <div class="panel-body">
                                                    <ul>
                                                         <li><a href="#">Jeans</a></li>
                                                         <li><a href="#">T-Shirt</a></li>
                                                         <li><a href="#">Jacket</a></li>
                                                         <li><a href="#">Shoes</a></li>
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="panel panel-default">
                                             <div class="panel-heading" role="tab" id="headingFour">
                                                 <h4 class="panel-title">
                                                     <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">Jewelry
                                                     </a>
                                                 </h4>
                                             </div>
                                             <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                 <div class="panel-body">
                                                    <ul>
                                                         <li><a href="#">Jeans</a></li>
                                                         <li><a href="#">T-Shirt</a></li>
                                                         <li><a href="#">Jacket</a></li>
                                                         <li><a href="#">Shoes</a></li>
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                      </div>
                                   </div>
                                    </div>
                                    <div class="side">
                                        <h2>Price Range</h2>
                                        <form method="post" class="colorlib-form-2">
                                          <div class="row">
                                        <div class="col-md-12">
                                          <div class="form-group">
                                            <label for="guests">Price from:</label>
                                            <div class="form-field">
                                              <i class="icon icon-arrow-down3"></i>
                                              <select name="people" id="people" class="form-control">
                                                <option value="#">1</option>
                                                <option value="#">200</option>
                                                <option value="#">300</option>
                                                <option value="#">400</option>
                                                <option value="#">1000</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-12">
                                          <div class="form-group">
                                            <label for="guests">Price to:</label>
                                            <div class="form-field">
                                              <i class="icon icon-arrow-down3"></i>
                                              <select name="people" id="people" class="form-control">
                                                <option value="#">2000</option>
                                                <option value="#">4000</option>
                                                <option value="#">6000</option>
                                                <option value="#">8000</option>
                                                <option value="#">10000</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                    </div>
                                    <div class="side">
                                        <h2>Color</h2>
                                        <div class="color-wrap">
                                            <p class="color-desc">
                                                <a href="#" class="color color-1"></a>
                                                <a href="#" class="color color-2"></a>
                                                <a href="#" class="color color-3"></a>
                                                <a href="#" class="color color-4"></a>
                                                <a href="#" class="color color-5"></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="side">
                                        <h2>Size</h2>
                                        <div class="size-wrap">
                                            <p class="size-desc">
                                                <a href="#" class="size size-1">xs</a>
                                                <a href="#" class="size size-2">s</a>
                                                <a href="#" class="size size-3">m</a>
                                                <a href="#" class="size size-4">l</a>
                                                <a href="#" class="size size-5">xl</a>
                                                <a href="#" class="size size-5">xxl</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div id="colorlib-subscribe">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="col-md-6 text-center">
                                    <h2><i class="icon-paperplane"></i>Sign Up for a Newsletter</h2>
                                </div>
                                <div class="col-md-6">
                                    <form class="form-inline qbstp-header-subscribe">
                                        <div class="row">
                                            <div class="col-md-12 col-md-offset-0">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="email" placeholder="Enter your email"/>
                                                    <button type="submit" class="btn btn-primary">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <footer id="colorlib-footer" role="contentinfo">
                    <div class="container">
                        <div class="row row-pb-md">
                            <div class="col-md-3 colorlib-widget">
                                <h4>About Store</h4>
                                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                                <p>
                                    <ul class="colorlib-social-icons">
                                        <li><a href="#"><i class="icon-twitter"></i></a></li>
                                        <li><a href="#"><i class="icon-facebook"></i></a></li>
                                        <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                        <li><a href="#"><i class="icon-dribbble"></i></a></li>
                                    </ul>
                                </p>
                            </div>
                            <div class="col-md-2 colorlib-widget">
                                <h4>Customer Care</h4>
                                <p>
                                    <ul class="colorlib-footer-links">
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Returns/Exchange</a></li>
                                        <li><a href="#">Gift Voucher</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        <li><a href="#">Special</a></li>
                                        <li><a href="#">Customer Services</a></li>
                                        <li><a href="#">Site maps</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div class="col-md-2 colorlib-widget">
                                <h4>Information</h4>
                                <p>
                                    <ul class="colorlib-footer-links">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Order Tracking</a></li>
                                    </ul>
                                </p>
                            </div>
        
                            <div class="col-md-2">
                                <h4>News</h4>
                                <ul class="colorlib-footer-links">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Exhibitions</a></li>
                                </ul>
                            </div>
        
                            <div class="col-md-3">
                                <h4>Contact Information</h4>
                                <ul class="colorlib-footer-links">
                                    <li>291 South 21th Street, <br/> Suite 721 New York NY 10016</li>
                                    <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                    <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                                    <li><a href="#">yoursite.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copy">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <p>
                                    
                                    <span class="block">
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart2" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
       </span> 
                                    <span class="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        
        
            <div class="gototop js-top">
                <a href="#" class="js-gotop"><i class="icon-arrow-up2"></i></a>
            </div>
            
           
        
         </div>
        
        );
    }
}
 
export default Magazin;