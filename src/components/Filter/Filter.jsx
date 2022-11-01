import PropTypes from 'prop-types';

import { Div, Input, Span } from './Filter.styled';

export const Filter = ({ onValue, onFilter }) => {
  return (
    <Div>
      <label>
        <Span>Find contacts by name:</Span>
        <Input type="text" value={onValue} onChange={onFilter} />
      </label>
    </Div>
  );
};

Filter.propTypes = {
  onValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
