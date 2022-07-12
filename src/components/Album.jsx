import React from "react";
import PropTypes from "prop-types";
import AlbumForm from "./AlbumForm";
class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormVisible: false,
    };
  }

  render() {
    if (this.state.editFormVisible) {
      return (
        <React.Fragment>
          <h3 onClick={() => this.setState({ editFormVisible: false })}>
            Edit {this.props.name} by {this.props.artist}
          </h3>
          <AlbumForm
            //   passing the logic one more time to the form
            updateAlbum={this.props.updateAlbum}
            albumId={this.props.id}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="album">
            <h3 onClick={() => this.setState({ editFormVisible: true })}>
              {this.props.name} - {this.props.artist}
            </h3>
          </div>
        </React.Fragment>
      );
    }
  }
}

Album.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  id: PropTypes.string,
  updateAlbum: PropTypes.func,
};

export default Album;
