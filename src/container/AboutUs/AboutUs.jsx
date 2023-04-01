import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg section__padding flex__center' id='pages'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h3 className='headtext__cormorant'>About Us</h3>
        <img src={images.spoon} alt="" />
        <p className="p__opensans">Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
        <button className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="" />
      </div>
      <div className='app__aboutus-content_history'>
        <h3 className='headtext__cormorant'>Our History</h3>
        <img src={images.spoon} alt="" />
        <p className="p__opensans">Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
