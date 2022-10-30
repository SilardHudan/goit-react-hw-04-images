import { Image, ModalBody, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ image, tags, toggle }) => {
  const onKeyDown = useCallback(
    e => {
      if (e.code !== 'Escape') {
        return;
      }
      toggle();
    },
    [toggle]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const clickOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return createPortal(
    <Overlay onClick={clickOnBackdrop}>
      <ModalBody>
        <Image src={image} alt={tags} />
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};

// class oldModal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = e => {
//     if (e.code !== 'Escape') {
//       return;
//     }
//     this.props.toggle();
//   };

//   clickOnBackdrop = e => {
//     if (e.target === e.currentTarget) {
//       this.props.toggle();
//     }
//   };

//   render() {
//     const { image, tags } = this.props;

//     return createPortal(
//       <Overlay onClick={this.clickOnBackdrop}>
//         <ModalBody>
//           <Image src={image} alt={tags} />
//         </ModalBody>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

export default Modal;

Modal.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
};
