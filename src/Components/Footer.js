import React, { Component } from 'react';

class Footer extends Component {
   render() {

      return (
         <footer>

            <div className="row">
               <div className="twelve columns">
                  <ul className="copyright">
                     <li>&copy; Copyright 2021 Roypower6</li>
                     <li>Coded by <a title="Styleshout">Roypower6</a></li>
                  </ul>

               </div>
               <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
         </footer>
      );
   }
}

export default Footer;
