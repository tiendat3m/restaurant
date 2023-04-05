import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';

const AwardsCard = ({award: { imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards_card'>
    <img src={imgUrl} alt="" />
    <div className='app__laurels_awards_card-content'>
      <p className="p__cormorant" style={ {color: '#DCCA87'} }>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding '>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      {data && <div className='app__laurels_awards' >
          {data.awards.map((award) => (
            <AwardsCard award={award} key={award.title}/>
          ))}
      </div>}
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
