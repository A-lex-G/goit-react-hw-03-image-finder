import { Component } from "react";
import { fetchedImages, perPage } from "Services/imageAPI";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";
import { ImagesList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  abortCtrlr;

  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
    error: null,
    showModal: false,
    showButton: false,
    selectedImage: null,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const { request, defaultPage, defaultImages } = this.props;

    if (prevProps.request !== request) {
      this.setState({
        query: request,
        page: defaultPage,
        images: defaultImages,
      })
    }
    
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({
          loading: true,
          error: null,
        });
        const { hits, total} = await fetchedImages(query, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          showButton: page < Math.ceil(total / perPage)
        }));
        
      } catch (error) {
        this.setState({
          error
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    } 
  }

  handleButtonClick = (e) => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  toggleModal = (e) => {
    if (e && e.target) {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: e.target.currentSrc,
    }));
  }
}

  render() {
    const {
      images,
      loading,
      showModal,
      showButton,
      selectedImage,
    } = this.state;
    
    return (
      <>
        {loading &&
          <Loader />
        }
        
        {this.props.request &&
          <ImagesList > 
            
            <ImageGalleryItem
              imagesArr={images}
              onClick={this.toggleModal}
            />
          </ImagesList>
        }
        
        {showModal &&
          <Modal
          imagesArr={images}
          largeImg={selectedImage}
          onCloseModal={this.toggleModal}
        />
        }
        
        {showButton &&
          <Button onClick={this.handleButtonClick}  />
        }
      </>
    )
  }
}