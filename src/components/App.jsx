import { Component } from 'react';
import { getImages } from './services/pixabayApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    q: '',
    images: [],
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const { q, page } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      getImages(q, page).then(({ hits, totalHits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          showBtn: page < Math.ceil(totalHits / 12),
        }));
      });
    }
  }

  onSubmit = q => {
    this.setState({
      q,
      page: 1,
      images: [],
      showBtn: false,
    });
  };

  onBtnMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showBtn } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} />
        {showBtn && <Button onBtnMoreClick={this.onBtnMoreClick} />}
      </>
    );
  }
}
