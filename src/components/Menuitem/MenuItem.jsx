import React from 'react';

import './MenuItem.css';

const MenuItem = ({price, title, tags}) => (
  <div className='app__menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
          <p className="p__cormorant">{title}</p>
        </div>
        <div className='app__menuitem-price'>
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
  </div>
);

export default MenuItem;
