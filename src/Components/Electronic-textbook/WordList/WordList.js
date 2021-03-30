import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import wordsApi from '../../../services/wordService';

class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: null,
        }
    }

    async componentDidMount() {
        const data = await wordsApi.getwords(this.props.itemId, 0)
        this.setState({ words: data.data })
    }

    render() {
        // console.log(this.state.words)
        const { words } = this.state
        if (words !== null) {
            return (
                <>
                    {words.map(e => (
                        <div key={e.id}>{e.word} </div>
                    ))}
                </>
            )
        } else {
            return <></>
        }
    }
}

export default withRouter(Words)


