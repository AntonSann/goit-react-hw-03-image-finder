import React, {Component} from 'react';
import Modal from './Modal/Modal';
import ImagesApi from '../Services/ImagesApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,      
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    ImagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

toggleModal = (event) =>{
  if(!this.state.showModal){
  this.setState({ largeImage: {largeurl: event.currentTarget.dataset.largeurl, alt: event.currentTarget.getAttribute('alt')} });}
  this.setState(({showModal}) => ({
    showModal: !showModal }))
}

render() {
  const { images, isLoading, error, showModal } = this.state;
  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

  return (
    <div className={Styles.App}>
      {error && <h1>Error</h1>}

      <Searchbar onSubmit={this.onChangeQuery} />

      <ImageGallery images={images} onClick={this.toggleModal}/>

      {showModal && <Modal onClose={this.toggleModal}>
        <img src={this.state.largeImage.largeurl} alt={this.state.largeImage.alt} />
        </Modal>}
      {isLoading && <Loader />}

      {shouldRenderLoadMoreButton && (
        <Button onClick={this.fetchImages}/>
      )}
    </div>
  );
}
}

export default App;
