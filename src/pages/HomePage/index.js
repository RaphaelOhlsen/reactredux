import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import Message from '../../components/Message'

class HomePage extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     novoTweet: "",
  //   }
  // }

  state = {
    novoTweet: "",
    tweets: []
  }
  
  adicionaTweet = (e) => {
    e.preventDefault();
    if (this.state.novoTweet.length > 0) {
      this.setState({
        tweets: [this.state.novoTweet, ...this.state.tweets],
        novoTweet: ""
      });
    }
  } 

  escreveTweet = (e) => {
    this.setState({novoTweet: e.target.value})
  }

  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@raphaelohlsen" />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionaTweet}>
                <div className="novoTweet__editorArea">
                  <span 
                    className={
                      `novoTweet__status
                        ${
                          this.state.novoTweet.length > 140 &&
                          'novoTweet__status--invalido'
                        }
                      `
                    }
                  >   
                    {this.state.novoTweet.length}/140
                  </span>
                  <textarea 
                    className="novoTweet__editor" 
                    value = { this.state.novoTweet }
                    // onChange = { (e) => this.setState({ novoTweet: e.target.value})}
                    onChange = {this.escreveTweet}
                    placeholder="O que está acontecendo?">
                      
                  </textarea>
                </div>
                <button 
                  className="novoTweet__envia"
                  disabled={ this.state.novoTweet.length > 140 || this.state.novoTweet.length === 0}
                  type="submit" 
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
                <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              { this.state.tweets.length === 0 && 
                <Message content="Digite um tweet agora mesmo!!!!"/>
              }
              <div className="tweetsArea">
                {this.state.tweets.map(
                  (tweetInfo, index) => {
                    return <Tweet
                      key={tweetInfo + index}
                      texto = {tweetInfo} />
                  }
                )}
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
