import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterText = useSelector(getFilter);

  /* Фільтрація контактів */
  const normalizedFilter = filterText.toLowerCase();
  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {visibleContacts.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </List>
  );
};
