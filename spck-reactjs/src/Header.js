import React from 'react';



const Header = ( props ) => {
    const handleBlock = () => {
        
        props.onBlock()

    }   
    
  return (
    
    <div className='header'>
        <div className='header_first'>

            <div className='title_header'>
                <img width='119' height='50' src = "./images/logo-img-04.png" alt='Day la hinh anh' />
            </div>
            <div className='nav_header'>
                <ul className='ul_nav_header'>
                    <li><a href='#'><span>home</span></a></li>
                    <li><a href='#'><span>pages</span></a></li>
                    <li><a href='#'><span>cart</span></a></li>
                    <li><a href='#'><span>blog</span></a></li>
                    <li><a href='#'><span>landing</span></a></li>

                </ul>
            </div>
            <div className='cart-header'>           
                    <span><i class="fa-solid fa-cart-shopping"></i></span>
                    <span ><a href='#'>Cart</a></span> 
            </div>
            <div className='search-header'>           
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <span onClick={handleBlock} >search</span> 
            </div>
            <div className='icon_header'>
                    <span className='span_icon'>Follow us</span>
                    <div style={{marginLeft: '-24px', marginTop: '10px'}}>
                        <span><i className="fa-brands fa-facebook-f"></i></span>
                        <span><i className="fa-brands fa-instagram"></i></span>
                        <span><i className="fa-brands fa-twitter"></i></span>
                        <span><i className="fa-brands fa-pinterest-p"></i></span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Header