import React, { Component } from 'react';
import "../App.css";
class Resume extends Component {

   render() {

      return (
         <section id="resume">

            <div className="row education">
               <div className="three columns header-col">
                  <h1><span className="font">대학가서 하고 싶은 것?</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        지금은 수험생으로 정말 바쁜 삶을 살고 있지만,
                        대학에 가면 하고 싶은 것이 정말 많습니다. 지금은 react만을
                        쓸 수 있지만, react 이외에 react-native, 그리고 같은 휴대폰
                        앱을 만드는 flutter를 자유자재로 다루어 다양한 일상생활에 도움을 주는
                        앱을 만들고 싶고, 최근 10대, 20대에게 매우 각광받고 있는 애플의 앱을
                        쉽게 만들 수 있도록 ios 개발 언어 swift도 배워 애플 워치, 아이폰,
                        아이패드 등 다양한 기기에서 쓸 수 있는 앱을 개발하고 싶습니다.
                     </div>
                  </div>
               </div>
            </div>


            <div className="row work">

               <div className="three columns header-col">
                  <h1><span className="font">어떤 코더가 되고 싶나요?</span></h1>
               </div>

               <div className="nine columns main-col">
                  백엔드와 프론트엔드에 모두 능숙한, 흔히 말하는 "fullstack" 코더가 될 것입니다.
                  프론트엔드에서는 React, 백엔드에서는 python, golang, C lang, JAVA를 중점적으로
                  할 수 있는 코더, 또한 안드로이드, ios 분야에선 flutter를 통해 하이브리드 앱을 자유자재로
                  만들 수 있는, 완성형 1인 코더가 되고 싶습니다.
        </div>
            </div>



            <div className="row skill">

               <div className="three columns header-col">
                  <h1><span className="font">특별하게 잘하는 언어는?</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="bars">
                     <ul className="skills">
                        잘하는 언어와 좋아하는 언어 모두 python이라고 할 수 있습니다. python 코드가 쉽다는 안일한 이유보다는,
                        python이 가진 강력한 플러그인으로 정말 셀 수 없는 걸 할 수 있고, 프론트엔드, 백엔드 모두 강력하다는
                        좋은 점이 있기 때문입니다. 또한 다른 언어에 비해 비교적 짧은 코드로 많은 기능을 구현할 수 있습니다.
                        이런 python의 기능이 맘에 들어, 지금까지 만든 프로그램들도 python이 압도적으로 많습니다.
					</ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Resume;
