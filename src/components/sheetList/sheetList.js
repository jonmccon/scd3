import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './sheetList.css';

const SheetList = ({ children, as = 'span', size }) => {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  );
};

SheetList.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default SheetList;
