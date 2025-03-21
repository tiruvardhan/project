import React, { useState, useEffect } from 'react';
import './Puppet.css';

function Puppet({ isTransforming }) {
  const [shouldTransform, setShouldTransform] = useState(false);

  useEffect(() => {
    if (isTransforming) {
      setShouldTransform(true);
    }
  }, [isTransforming]);

  return (
    <div className="puppet-container">
      <div className={`puppet ${shouldTransform ? 'transform' : ''}`}>
        <div className="puppet-head"></div>
        <div className="puppet-body"></div>
        <div className="strings">
          <div className="string"></div>
          <div className="string"></div>
          <div className="string"></div>
          <div className="string"></div>
          <div className="string"></div>
        </div>
        <div className="puppet-legs">
          <div className="puppet-leg"></div>
          <div className="puppet-leg"></div>
        </div>
      </div>
    </div>
  );
}

export default Puppet;