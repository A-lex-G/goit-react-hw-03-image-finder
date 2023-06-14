import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {

  state = {
    imageName: '',
    images: null,
    page: null,
  }

  formNameGetter = (name) => {
    if (name !== "") {
      this.setState({
        imageName: name,
        images: [],
        page: 1,
      })
    }
  }
  
  render() {
    const { imageName, page,images } = this.state
    return (
      <>
        <Searchbar
          onNameTransfer={this.formNameGetter} />
        <ImageGallery
          request={imageName}
          defaultPage={page}
          defaultImages={images}
        />
      </>
    );
  }
};
