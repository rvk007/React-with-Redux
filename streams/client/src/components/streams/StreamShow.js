import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  renderDetails() {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.streams;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1 className="header">{title}</h1>
        <h5 className="description">{description}</h5>
      </div>
    );
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  buildPlayer() {
    if (this.flvPlayer || !this.props.streams) {
      return;
    }

    const { id } = this.props.match.params;
    this.flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv `,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  render() {
    return <div>{this.renderDetails()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
