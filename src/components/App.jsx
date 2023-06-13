import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";
// import * as basicLightbox from 'basiclightbox';

export class App extends Component {

  state = {
    imageName: '',
    images: null,
  }

  formNameGetter = (name) => {
    if (name !== "") {
      this.setState({
        imageName: name,
      })
    }
  }

  updateStateImages = (array) => {
    this.setState({
      images: array
    })
  }
  
  render() {
    const { imageName } = this.state
    return (
      <>
        <Searchbar
          onNameTransfer={this.formNameGetter} />
        <ImageGallery
          request={imageName}
          changeImages={this.updateStateImages} />
        {/* {imageName !== '' && <Button onFetch={() => myApiFetch.fetchImages()} />} */}
      </>
    );
  }
};
