import css from "./ImageGallery.module.css"
import { Component } from "react"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchedImages } from "Services/imageAPI";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";

// import * as basicLightbox from 'basiclightbox';


export class ImageGallery extends Component {
  abortCtrlr;

  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
    error: null,
    showModal: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const { request } = this.props;

    if (prevProps.request !==request) {
      this.setState({ query: request })
    }
    
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true, error: null, });
        const recievedImages = await fetchedImages(query, page);
        this.setState( prevState => ({
          images: [...prevState.images, ...recievedImages.hits],
        }))
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    } 
  }

  handleButtonClick = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  toggleModal = () => {
    // e.preventDefault();
    // if (e.target.nodeName !== "IMG") {
    //   return;
    // }
    this.setState(({showModal}) => ({showModal: !showModal}))
    // console.dir(e.target);
  }

  render() {
    const { images, loading, error, showModal } = this.state;
    // const { total, totalHits, hits} = images;
    return (
      <>
        {loading &&
          <Loader />}
        {this.props.request &&
          <ul className={css.ImageGallery} onClick={this.handleModalClick}> 
            <ImageGalleryItem imagesArr={images} onClick = {this.toggleModal} />
          </ul>
          // <Modal imagesArr={images} >
          //    <ul className={css.ImageGallery}> 
          //     <ImageGalleryItem imagesArr={images} onClick = {this.handleModalClick} />
          //   </ul>
          // </Modal>
        }
        {showModal &&
          <Modal imagesArr={images}>
            <ImageGalleryItem imagesArr={images} onClick={this.toggleModal} />
          </Modal>}
        {images.length !== 0 &&
          <Button onClick={this.handleButtonClick} />}
      </>
    )
  }
}


//==========================================================
  // async componentDidUpdate(prevProps, prevState) {
  //   const { request, pageVal } = this.props;

  //   if (prevProps.request !== request || prevState.page !== this.state.page) {
  //     // myApiFetch.searchQuery = request;
 
  //     try { 
  //       // this.abortCtrl = new AbortController();
  //       this.setState({ loading: true, error: null, });
  //       // const fetchedImages = await myApiFetch.fetchImages();
  //       // myApiFetch.page = pageVal;

  //       this.setState({ images: fetchedImages,  });
  //     } catch (error) {
  //       console.log(error)
  //       this.setState({ error });
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   } else {
  //     // myApiFetch.resetPage();
  //   }
  // }