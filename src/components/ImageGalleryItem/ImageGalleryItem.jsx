import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/index';
import PropTypes from 'prop-types';
import { useState, memo } from 'react';

const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <>
      <GalleryItem onClick={toggle}>
        <GalleryImage src={webformatURL} alt={tags} />
      </GalleryItem>
      {isOpen && <Modal toggle={toggle} image={largeImageURL} tags={tags} />}
    </>
  );
};

// class oldImageGalleryItem extends Component {
//   state = {
//     isOpen: false,
//   };

//   toggle = () => {
//     this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { largeImageURL, webformatURL, tags } = this.props;

//     return (
//       <>
//         <GalleryItem onClick={this.toggle}>
//           <GalleryImage src={webformatURL} alt={tags} />
//         </GalleryItem>
//         {isOpen && (
//           <Modal toggle={this.toggle} image={largeImageURL} tags={tags} />
//         )}
//       </>
//     );
//   }
// }

export default memo(ImageGalleryItem);

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};
