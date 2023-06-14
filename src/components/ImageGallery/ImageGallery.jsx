import css from "./ImageGallery.module.css"
import { Component } from "react"
import { fetchedImages } from "Services/imageAPI";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";

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
    const { query, page, images } = this.state;
    const { request } = this.props;

    if (prevProps.request !== request) {
      this.setState({
        query: request
      })
    }
    
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({
          loading: true, error: null,
        });
        const recievedImages = await fetchedImages(query, page);
        console.log(recievedImages)

        this.setState(prevState => ({
          images: [...prevState.images, ...recievedImages.hits],
          showButton: true,
        }));
        
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({
          loading: false,
        });
      }
    } 
  }

  handleButtonClick = (e) => {
    console.log(e.target)
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  toggleModal = (e) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: e.target.currentSrc,
    }))
  }

  render() {
    const { images, loading, showModal, showButton, selectedImage } = this.state;
    const { total, totalHits, hits } = images;
    // console.log(images)
    return (
      <>
        {loading &&
          <Loader />
        }
        
        {this.props.request &&
          <ul
            className={css.ImageGallery}
            // onClick={this.handleModalClick}
          > 
            
            <ImageGalleryItem
              imagesArr={images}
              onClick={this.toggleModal}
            />
          </ul>
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