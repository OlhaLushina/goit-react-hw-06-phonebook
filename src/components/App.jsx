import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import initialContacts from '../contacts.json';

const KEY_CONTACTS = 'contacts';

/* Функція ініціалізації контактів */
const getInitialContacts = () => {
  const savedContacts = JSON.parse(localStorage.getItem(KEY_CONTACTS));
  if (savedContacts !== null) {
    /* Якщо в localStorage щось є, то пишемо це в контакти */
    return savedContacts;
  } else {
    /* Якщо в localStorage нічого немає, то записуємо у контакти початкові дані ініціалізації */
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  /* Додавання нового контакту */
  const addContact = newContact => {
    if (
      contacts.filter(
        item =>
          item.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      ).length > 0
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
  };

  /* Видалення контакту */
  const delContact = idContact => {
    setContacts(prevState => prevState.filter(item => item.id !== idContact));
  };

  /* Фільтр */
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  /* Фільтрація контактів */
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Section>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={delContact} />
    </Section>
  );
};
