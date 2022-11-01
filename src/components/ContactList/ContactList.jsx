import PropTypes from 'prop-types';

import { List, Item, Span, Button } from './ContactList.styled';

export const ContactList = ({ contacts, deletContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id} id={id}>
          <Span>{name} </Span>
          <Span>{number}</Span>
          <Button
            type="button"
            onClick={() => {
              deletContact(id);
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deletContact: PropTypes.func.isRequired,
};
