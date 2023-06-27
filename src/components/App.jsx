import { Component } from 'react';
import { toast } from 'react-toastify';
import { Loader } from './Loader/Loader';
import { getImages } from './services/pixabayApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { AppWrapper } from './app.styled';

export class App extends Component {
  state = {
    page: 1,
    q: '',
    images: [],
    showBtn: false,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { q, page } = this.state;

    if (q !== prevState.q || page !== prevState.page) {
      try {
        await getImages(q, page).then(({ hits, totalHits }) => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
          if (hits.length === 0) {
            return toast.info(
              'Sorry, there are no images matching your search query. Please try again'
            );
          }
        });
      } catch (error) {
        toast.error('Something went wrong. Please, try later.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSubmit = q => {
    if (q.trim() === '') {
      return toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
    }
    this.setState({
      q,
      page: 1,
      images: [],
      showBtn: false,
      loading: true,
    });
  };

  onBtnMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showBtn, loading } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSubmit} />
        {loading ? <Loader /> : <ImageGallery images={images} />}

        {showBtn && <Button onBtnMoreClick={this.onBtnMoreClick} />}
      </AppWrapper>
    );
  }
}
