import { Component } from 'react';
import Home from './Home';
import MyBooking from './MyBooking';
import Cars from './Cars';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import logo from './image/logo11.png';
import './BookCar-form.css';


class Header extends Component{
  
  
  constructor(props){
    super(props);
      this.state = {
        currentPage: 'Home', //initial page
 };
}

handlePageChange = (pageName) =>{
  this.setState({ currentPage: pageName});

};
          
 render(){
   
   const { currentPage } = this.state;

   return (

<>
            <nav id="navbar" className="navbar navbar-expand-lg custom-navbar" >
              <div className="container">

                <h3>RC</h3> &nbsp;

                <a><img src={logo} height="60px"></img></a> &nbsp;


                  
                    { <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> }
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#" onClick={() => this.handlePageChange('Home')}>Home</a>
                    </li> &nbsp;

                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={() => this.handlePageChange('MyBooking')}>MyBooking</a>
                    </li> &nbsp;

                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#"  aria-expanded="false" onClick={() => this.handlePageChange('Cars')}>
                        cars
                      </a> 

                    </li> &nbsp;

                    <li className="nav-item">
                      <a className="nav-link" href='#' onClick={() => this.handlePageChange('About')}>About</a>
                    </li> &nbsp;

                    <li className="nav-item">
                      <a className="nav-link" href='#' onClick={() => this.handlePageChange('Blog')}>Blog</a>
                    </li> &nbsp;

                    <li className="nav-item">
                      <a className="nav-link" href='#' onClick={() => this.handlePageChange('Contact')}>Contact</a>

                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>   
                </div>
            </nav>  
               {currentPage === 'Home' && <Home></Home>}          
               {currentPage === 'MyBooking' && <MyBooking></MyBooking>}
               {currentPage === 'Cars' && <Cars></Cars>}
                {currentPage === 'About' && <About></About>}
                 {currentPage === 'Blog' && <Blog></Blog>}
                  {currentPage === 'Contacts' && <Contact></Contact>}
            
            </> 
   

   );
 }

}

export default Header;
