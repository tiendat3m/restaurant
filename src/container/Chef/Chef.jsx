import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg section__padding app__wrapper'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title={`Chef's Wold`}/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="" />
          <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit. </p>
        </div>
        <p className="p__opensans">Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
