import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import wordsApi from '../../../services/wordService';
import './WordList.scss';

class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: null,
            pages: 0,
        }
    }

    async componentDidMount() {
        const data = await wordsApi.getwords(this.props.itemId, this.state.pages)
        this.setState({ words: data.data })
    }

    clickNaz() {
        if (this.state.pages !== 0) {
            this.setState({ pages: this.state.pages - 1 })
            this.componentDidMount()
        } else {
            return null
        }
    }

    clickGo() {
        if (this.state.pages !== 29) {
            this.setState({ pages: this.state.pages + 1 })
            this.componentDidMount()
        } else {
            return null
        }
    }

    render() {
        console.log(this.state.words)
        const { itemId } = this.props
        let grup = Number(itemId) + 1
        const { words, pages } = this.state
        if (words !== null) {
            return (
                <>
                    <div className='turnPeges'>
                        <span className='fas fa-angle-down iconSelect'></span>
                        <span>{`раздел ${grup}`}</span>
                        <span className='fas fa-angle-up iconSelect'></span>
                    </div>

                    {words.map(e => (
                        <div key={e.id} className='wordsItem'>
                            <div>{e.word}: {e.transcription} - {e.wordTranslate}
                                <span className='fas fa-bullhorn mar'></span>
                                <span className="fas fa-plus-square mar"></span>
                                <span className="fas fa-minus-square mar"></span>
                            </div>
                            <div>{e.textExample}</div>
                            <div>{e.textExampleTranslate}</div>
                            <div>{e.textMeaning}</div>
                            <div>{e.textMeaningTranslate}</div>
                            <img className='wordsImg' src={`https://rs-team-58.herokuapp.com/${e.image}`} alt='foto' />
                        </div>
                    ))}
                    <div className='turnPeges'>
                        <span className="fas fa-angle-left" onClick={this.clickNaz.bind(this)}></span>
                        <span className='coutPeges'>{pages + 1}</span>
                        <span className="fas fa-angle-right" onClick={this.clickGo.bind(this)}></span>
                    </div>
                </>
            )
        } else {
            return <></>
        }
    }
}

export default withRouter(Words)


