import React from "react";
import { apiUrl } from "../../../../config";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      currentAudio: null,
    };

    this.audio = new Audio(`${apiUrl}/${this.props.audioEl.audio}`);
    this.audioMeaning = new Audio(`${apiUrl}/${this.props.audioEl.audioMeaning}`);
    this.audioExample = new Audio(`${apiUrl}/${this.props.audioEl.audioExample}`);
  }

  togglePlay = () => {
    const { currentAudio, play } = this.state;

    if (!play) {
      this.setState({ play: true });

      if (!currentAudio) {
        this.setState({ currentAudio: this.audio }, () => {
          this.audio.play()
        });

        this.audio.onended = () => {
          this.setState({ currentAudio: this.audioMeaning }, () => {
            this.audioMeaning.play()
          });

          this.audioMeaning.onended = () => {
            this.setState({ currentAudio: this.audioExample }, () => {
              this.audioExample.play()
            });
            
            this.audioExample.onended = () => {
              this.setState({ 
                currentAudio: null,
                play: false
              });
            }
          };
        };

      } else {
        currentAudio.play();
      }

    } else {
      this.setState({ play: false });
      currentAudio?.pause();
    }
  };

  render() {
    return (
      <>
        <span className="fas fa-bullhorn music" onClick={this.togglePlay}>
          {this.state.play ? "Pause" : "Play"}
        </span>
      </>
    );
  }
}

export default Music;
