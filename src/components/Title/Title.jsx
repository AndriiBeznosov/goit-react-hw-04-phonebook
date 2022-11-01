import PropTypes from 'prop-types';

import { Title } from './Title.styled';

export const Caption = ({ title }) => {
  return <Title>{title}</Title>;
};

Caption.propTypes = {
  title: PropTypes.string.isRequired,
};
