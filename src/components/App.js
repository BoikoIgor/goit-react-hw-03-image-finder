import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from 'services/api';
import ContentLoader from 'react-content-loader';

export class App extends Component {
  state = {
    gallery: [],
    searchValue: '',
    isLoading: false,
  };
  async componentDidUpdate(_, prevState) {
    const { searchValue } = this.state;
    if (prevState.searchValue !== searchValue) {
      try {
        this.setState({ isLoading: true });
        const fetchImages = await API.getImages(searchValue);

        console.log(fetchImages);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = value => {
    console.log('value: ', value);
    try {
      if (value === this.state.searchValue) {
        return;
      }
      this.setState({ searchValue: value });
    } catch (err) {}
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && (
          <ContentLoader
            viewBox="0 0 400 160"
            height={60}
            width={100}
            backgroundColor="maroon"
            foregroundColor="blue"
            style={{ width: '100%', marginTop: '0' }}
            interval={0.1}
          >
            <circle cx="100" cy="20" r="20" />
            <circle cx="194" cy="20" r="20" />
            <circle cx="288" cy="20" r="20" />
          </ContentLoader>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
