import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderDetails() {
    if (!this.props.streams) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.streams;
    return (
      <div>
        <h1 className="header">{title}</h1>
        <h5 className="description">{description}</h5>
      </div>
    );
  }

  render() {
    return <div>{this.renderDetails()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
