import React, { useRef } from 'react';
import './Gallery.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import icons from '../../utils/icons'

const { BsInstagram, BsArrowLeftShort, BsArrowRightShort } = icons

const Gallery = () => {

  const slideRef = useRef(null)

  const slide = (direction) => {
    if(direction === 'left') {
      slideRef.current.scrollLeft -= 300
    }else {
      slideRef.current.scrollLeft += 300
    }
  }

  return (
    <div className='app__gallery flex__center section__padding'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram'/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type="button" className="custom__button">View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={slideRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className='app__gallery-images_card flex__center'>
            <img src={image} alt="" />
            <BsInstagram className="gallery__image-icon" size={32} color='#fff'/>
          </div>
        ))}
      </div>
      
      <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => slide('left')}/>
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => slide('right')}/>
      </div>
    </div>
  </div>
  )
};

export default Gallery;
