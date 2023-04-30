import Modal from 'react-modal';
import PropTypes from 'prop-types';
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    position: 'relative',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0.25rem',
    outline: 'none',
    width: '90%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
Modal.setAppElement('#root');

export const ModalPhoto = ({ isOpen, onClose, imageURL, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div>
          <img src={imageURL} alt={alt} />
        </div>
      </div>
    </Modal>
  );
};
ModalPhoto.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageURL: PropTypes.string,
  alt: PropTypes.string,
};
