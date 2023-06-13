import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Modal } from "./Modal/Modal";
// import * as basicLightbox from 'basiclightbox';

export class App extends Component {

  state = {
    imageName: '',
  }

  formDataGetter = (name) => {
    if (name !== "") {
      this.setState({
        imageName: name,
      })
    }
  }
  
  render() {
    const { imageName } = this.state
    return (
      <>
        <Searchbar onDataTransfer={this.formDataGetter} />
        <ImageGallery request={imageName} />
        {/* {imageName !== '' && <Button onFetch={() => myApiFetch.fetchImages()} />} */}
      </>
    );
  }
};
