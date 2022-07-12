import React from "react";
import PropTypes from "prop-types";
import Album from "./Album";
class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumDatabase: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="albumList">
          {this.props.albumList.map((album) => (
            <Album
              name={album.name}
              artist={album.artist}
              id={album.id}
              // continuing to pass the "updateAlbum" back end function to the component we want to actually use the function
              updateAlbum={this.props.updateAlbum}
              key={album.id}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  updateAlbum: PropTypes.func,
};

export default AlbumList;
