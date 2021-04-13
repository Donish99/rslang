import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import wordsApi from "../../../services/wordService";
import { apiUrl } from "./../../../config";
import Music from "./Music/Music";
import userWordApi from "../../../services/userWordService"

import './Music/Music.scss';
import "./WordList.scss";

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      words: null,
      pages: 0,
      active: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await wordsApi.getwords(
      this.props.match.params.id,
      this.state.pages
    );
    this.setState({ words: data.data });
  }

  clickLeft = () => {
    if (this.state.pages !== 0) {
      this.setState({ pages: this.state.pages - 1 });
      this.getData();
    } else {
      return null;
    }
  };

  clickRight = () => {
    if (this.state.pages !== 29) {
      this.setState({ pages: this.state.pages + 1 });
      this.getData();
    } else {
      return null;
    }
  };

  clickDelete = (e) => {
    userWordApi.deleteWord(e.id)
    this.getData();
    
    console.log("minus", e);
  };

  clickPlus = (e) => {
    const {active} = this.state
    active.push(e.id)
    this.setState({active: active})
  };

  selectUp = () => {
    const { id } = this.props.match.params;
    if (id < 6) {
      this.props.history.push(`/wordSection/${parseInt(id) + 1}`);
      this.getData();
    }
  };

  selectDown = () => {
    const { id } = this.props.match.params;
    if (id > 0) {
      this.props.history.push(`/wordSection/${parseInt(id) - 1}`);
      this.getData();
    }
  };

  render() {
    console.log(this.state.words);
    const { words, pages, active } = this.state;
    if (words !== null) {
      return (
        <>
          <div className="turnPeges">
            <span
              className="fas fa-angle-down iconSelect"
              onClick={this.selectDown}
            ></span>
            <span>{`раздел ${this.props.match.params.id}`}</span>
            <span
              className="fas fa-angle-up iconSelect"
              onClick={this.selectUp}
            ></span>
          </div>

          {words.map((e) => (
            <div key={e.id} className="wordsItem">
              <div>
                {e.word}: {e.transcription} - {e.wordTranslate}
                <Music audioEl={e} />
                <span
                  className={`fas fa-plus-square margin ${active.includes(e.id) ? "active" : " " }`}
                  onClick={() => this.clickPlus(e)}
                ></span>
                <span
                  className="fas fa-minus-square margin"
                  onClick={() => this.clickDelete(e)}
                ></span>
                {/* <i class="fas fa-asterisk"></i> */}
              </div>
              <div>{e.textExample}</div>
              <div>{e.textExampleTranslate}</div>
              <div>{e.textMeaning}</div>
              <div>{e.textMeaningTranslate}</div>
              <img
                className="wordsImg"
                src={`${apiUrl}/${e.image}`}
                alt="foto"
              />
            </div>
          ))}
          <div className="turnPeges">
            <span className="fas fa-angle-left" onClick={this.clickLeft}></span>
            <span className="coutPeges">{pages + 1}</span>
            <span className="fas fa-angle-right" onClick={this.clickRight}></span>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default withRouter(WordList);
