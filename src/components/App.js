import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Searchbar />
        <GlobalStyle />
      </Layout>
    );
  }
}
