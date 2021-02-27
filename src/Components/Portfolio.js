import React, { Component } from 'react';

class Portfolio extends Component {
  handleClick1 = (e) => {
    e.preventDefault();
    window.open("https://github.com/roypower6/WebscrapperWithGo");
  }
  handleClick2 = (e) => {
    e.preventDefault();
    window.open("https://github.com/roypower6/roy_react_movie_API");
  }
  handleClick3 = (e) => {
    e.preventDefault();
    window.open("https://github.com/roypower6/roypower6.github.io");
  }
  handleClick4 = (e) => {
    e.preventDefault();
    window.open("https://github.com/roypower6/Upbit_auto_trade_bot");
  }
  handleClick5 = (e) => {
    e.preventDefault();
    window.open("https://github.com/roypower6/URLcheckerWithGolang");
  }
  handleClick6 = (e) => {
    e.preventDefault();
    window.open("https://github.com/roypower6/BankingsystemWithGolang");
  }
  handleClick7 = (e) => {
    e.preventDefault();
    window.open("https://roypower6.github.io/");
  }

  render() {

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>지금까지 만든 것들</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {/*----------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick1}>
                    <img src="https://miro.medium.com/max/1400/0*7vQ8eRc28yz9k__r.png" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Indeed 사이트 직업 탐색기</h5>
                        <p>GOlang과 ECHO 서버, go package로 만든 직업 키워드 검색 프로그램
                          입니다. go 함수로 python보다 훨씬 빠른 속도를 자랑합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick2}>
                    <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react-1024x576.png" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>미니 영화 추천 웹</h5>
                        <p>React와 해외 영화 데이터 베이스 사이트의 API를 활용하여 간단한 영화 추천
                          웹을 만들었습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick3}>
                    <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react-1024x576.png" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>roypower6 website mk.1</h5>
                        <p>VanillaJS와 css, HTML로 만든 제 첫 포트폴리오 사이트입니다.
                          아직 웹 개발 언어에 미숙한 때 만든 웹이라 어설픈 점이 많이 보입니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick4}>
                    <img src="https://i1.wp.com/ai-hyu.com/wp-content/uploads/2019/12/python.png?resize=1024%2C576&ssl=1" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>가상화폐 자동매매 프로그램</h5>
                        <p>python, pip3 플러그인 패키지, upbit API를 이용해서
                        가상화폐 자동매매 프로그램을 만들었습니다. 시간이 많이 없어
                          복잡한 알고리즘을 구현할 수는 없어 매우 아쉬웠습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick5}>
                    <img src="https://miro.medium.com/max/1400/0*7vQ8eRc28yz9k__r.png" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>URL 확인 프로그램</h5>
                        <p>사이트의 URL을 입력하면 Go함수와 Go pakage를 이용해서 쉽게
                        사이트가 살아있는지 확인할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick6}>
                    <img src="https://miro.medium.com/max/1400/0*7vQ8eRc28yz9k__r.png" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>간이 은행 계좌 프로그램</h5>
                        <p>Go에서 func를 자유롭게 쓰기 위해 연습삼아 만들었습니다.
                        파이썬을 많이 닮아 코드가 간결하고 알아보기 쉽습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={this.handleClick7}>
                    <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react-1024x576.png" alt="" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>My first website</h5>
                        <p>

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*---------------------------------------*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
