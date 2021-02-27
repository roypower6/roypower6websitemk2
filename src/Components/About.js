import React, { Component } from 'react';

class About extends Component {
   render() {

      return (
         <section id="about">
            <div className="row">

               <div className="nine columns main-col">
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>Real Name: 이승기(Seunggi Rhee)</span><br />
                           <span>Nick Name: Roypower6</span><br />
                           <span>Nation : South Korea
                        <br />
						         Affiliated school : Independent<br />
                           Job : Examinee <br />
                           Location : Sanbon<br />
                           </span><br />
                           <span>Email : roy040707@gmail.com</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
