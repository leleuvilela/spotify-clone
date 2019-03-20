import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { connect } from 'react-redux';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

class Player extends Component {
  static propTypes = {
    player: PropTypes.shape({
      currentSong: PropTypes.shape({
        file: PropTypes.string
      }),
      status: PropTypes.string
    }).isRequired
  };

  render() {
    return (
      <Container>
        {!!this.props.player.currentSong && (
          <Sound
            url={this.props.player.currentSong.file}
            playStatus={this.props.player.status}
          />
        )}
        <Current>
          <img
            src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fba602b559ff37ab14df0860b5a898436.1000x1000x1.jpg"
            alt="Cover"
          />
          <div>
            <span>Chlorine</span>
            <small>twenty one pilots</small>
          </div>
        </Current>

        <Progress>
          <Controls>
            <button>
              <img src={ShuffleIcon} alt="ShuffleIcon" />
            </button>
            <button>
              <img src={BackwardIcon} alt="BackwardIcon" />
            </button>
            <button>
              <img src={PlayIcon} alt="PlayIcon" />
            </button>
            <button>
              <img src={ForwardIcon} alt="ForwardIcon" />
            </button>
            <button>
              <img src={RepeatIcon} alt="RepeatIcon" />
            </button>
          </Controls>

          <Time>
            <span>1:39</span>
            <ProgressSlider>
              <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#1ED760' }}
                handleStyle={{ border: 0 }}
              />
            </ProgressSlider>
            <span>4:20</span>
          </Time>
        </Progress>

        <Volume>
          <img src={VolumeIcon} alt="Volume" />
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#FFF' }}
            handleStyle={{ display: 'none' }}
            value={100}
          />
        </Volume>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
