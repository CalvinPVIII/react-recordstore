import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    // if our component as an albumId and the albumUpdate method passed to it as props, we know we want to update rather than create
    if (this.props.updateAlbum && this.props.albumId) {
      this.props.updateAlbum({
        name: e.target.name.value,
        artist: e.target.artist.value,
        id: this.props.albumId,
      });
    } else {
      this.props.createAlbum({
        name: e.target.name.value,
        artist: e.target.artist.value,
        id: uuid(),
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="AlbumForm">
          <form onSubmit={this.onFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Artist</label>
            <input type="text" name="artist" />
            <input type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

AlbumForm.propTypes = {
  createAlbum: PropTypes.func,
  updateAlbum: PropTypes.func,
  albumId: PropTypes.string,
};

export default AlbumForm;
