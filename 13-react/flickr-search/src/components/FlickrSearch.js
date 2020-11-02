import React, { Component } from 'react';
import SearchForm from './SearchForm';

class FlickrSearch extends Component {
  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm />
        <Gallery />
      </div>
    );
  }
};

export default FlickrSearch;