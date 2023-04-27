import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <Layout>
        Render
        <GlobalStyle />
      </Layout>
    );
  }
}
