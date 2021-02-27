import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
   position: absolute;
   top:0;
   left:0;
   width:100%;
   height:100%;
   background: url("https://images.unsplash.com/photo-1577041544386-0206909d3598?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80");
   z-index: -1;
`;
class Header extends Component {
   render() {


      return (
         <header id="home">
            <div className="row banner">
               <Container></Container>
               <div className="banner-text">
                  <h1 className="responsive-headline">Roypower6</h1>
                  <h3>Hi, welcome to my website! I'm korean 18 who is learning about
                  javascript, python, Go and React in detail. I want to know all about computer!
               feel free to browse my website!</h3>
                  <hr />
                  <ul className="social">
                     <a href="https://www.instagram.com/seunggi860/" className="button btn project-btn"><i class="fa fa-instagram"></i>Instagram</a>
                     <a href="https://github.com/roypower6?tab=repositories" className="button btn github-btn"><i class="fa fa-github"></i>Github</a>
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
