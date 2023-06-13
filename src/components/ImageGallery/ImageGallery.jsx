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
    selectedImage: null,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const { request } = this.props;

    if (prevProps.request !==request) {
      this.setState({ query: request })
    }
    
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({
          loading: true, error: null,
        });
        const recievedImages = await fetchedImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...recievedImages.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({
          loading: false
        });
      }
    } 
  }

  handleButtonClick = (e) => {
    console.log(e.target)
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  handleTransferImages = () => {
    this.props.changeImages(this.state.images);
  }

  toggleModal = () => {
    // console.dir(e.target)
    // e.preventDefault();
    // if (e.target.nodeName !== "IMG") {
    //   return;
    // }
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      // selectedImage: e.target.currentSrc,
      // selectedImage: this.state.images.find(obj => obj.largeImageURL === e.target.currentSrc)

    }))
  }

  render() {
    const { images, loading, showModal, selectedImage } = this.state;
    // const { total, totalHits, hits} = images;
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
          // largeImg={selectedImage}
          onCloseModal={this.toggleModal}
        />
        }
        
        {images.length !== 0 &&
          <Button onClick={this.handleButtonClick} onTransferImages={this.handleTransferImages(this.state.images)} />
        }
      </>
    )
  }
}