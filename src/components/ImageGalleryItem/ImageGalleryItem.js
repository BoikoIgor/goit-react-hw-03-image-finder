import { ModalPhoto } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    image: null,
    alt: '',
  };
  setImage = () => {
    const { photoURL, alt } = this.props;
    this.setState({ image: photoURL, alt: alt });
  };
  closeModal = () => {
    this.setState({ image: null, alt: '' });
  };
  render() {
    const { image, alt } = this.state;
    return (
      <li>
        <img
          src={this.props.previewURL}
          alt={alt}
          className="ImageGalleryItem"
          onClick={this.setImage}
        />
        <ModalPhoto
          isOpen={image !== null}
          onClose={this.closeModal}
          imageURL={image}
          alt={alt}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string,
  photoURL: PropTypes.string,
  alt: PropTypes.string,
};
