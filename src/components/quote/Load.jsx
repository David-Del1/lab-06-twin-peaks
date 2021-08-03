import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <>
    <button onClick={ onClick } >
      Get Quote
    </button>
  </>
);

export default Load;

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};
