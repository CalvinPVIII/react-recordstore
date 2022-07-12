import React from "react";
import AlbumForm from "./AlbumForm";
import AlbumList from "./AlbumList";

class AlbumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // because the "albumDatabase" state lives in this component, all the "back end" logic that we need will also need to be defined in this component
      albumDatabase: [],
      formVisible: false,
    };
  }
  // Defining our "back end" logic
  createAlbum = (album) => {
    const newAlbumDatabase = this.state.albumDatabase.concat(album);
    this.setState({ albumDatabase: newAlbumDatabase, formVisible: false });
  };

  updateAlbum = (updatedAlbum) => {
    let database = this.state.albumDatabase;
    // because we cannot mutate state directly, we use a .map to create a new array
    let updatedAlbumDatabase = database.map((album) => {
      if (album.id === updatedAlbum.id) {
        return updatedAlbum;
      } else {
        return album;
      }
    });
    this.setState({ albumDatabase: updatedAlbumDatabase, formVisible: false });
  };

  //

  render() {
    if (this.state.formVisible) {
      return (
        <React.Fragment>
          {/* passing our backend logic to our components as props */}
          <AlbumForm createAlbum={this.createAlbum} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="albumControl">
            {/* passing our backend logic to our components props*/}
            <AlbumList
              albumList={this.state.albumDatabase}
              updateAlbum={this.updateAlbum}
            />
          </div>
          <h3 onClick={() => this.setState({ formVisible: true })}>
            Add a new album
          </h3>
        </React.Fragment>
      );
    }
  }
}

export default AlbumControl;
