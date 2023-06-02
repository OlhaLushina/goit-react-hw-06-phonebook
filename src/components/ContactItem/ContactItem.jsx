import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Item, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name} {number}{' '}
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Item>
  );
};

/* Опис типів props */
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
