import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";
// import * as basicLightbox from 'basiclightbox';

export class App extends Component {

  state = {
    imageName: '',
    page: 1,
    // images: null,
  }

  formNameGetter = (name) => {
    if (name !== "") {
      this.setState({
        imageName: name,
      })
    }
  }

  
  render() {
    const { imageName, page } = this.state
    return (
      <>
        <Searchbar
          onNameTransfer={this.formNameGetter} />
        <ImageGallery
          request={imageName}
          defaultPage={page} />
      </>
    );
  }
};
