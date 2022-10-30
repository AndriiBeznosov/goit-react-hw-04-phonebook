import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, Container } from './App.styled';
import { Caption } from './Title/Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LS_KEY_CONTACTS = 'contacts_items';
const contactsDefault = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+38 (096)-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+38 (096)-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '+38 (096)-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '+38 (096)-227-91-26' },
];
const contactsList = JSON.parse(localStorage.getItem(LS_KEY_CONTACTS));

export const App = () => {
  const [contacts, setContacts] = useState(contactsList ?? contactsDefault);
  const [filter, setFilter] = useState('');
  //!додавання контакту з перевіркою на унікальність телефону
  const addTodo = user => {
    if (!user) {
      return;
    }
    const number = contacts.map(contact => contact.number);

    if (number.includes(user.number)) {
      toast.error(`${user.number} is already in the contacts. ❌`);
      return;
    }
    user.id = nanoid();

    setContacts([user, ...contacts]);
    toast.success('✅ Contact addano.');
  };
  // отримання результату з input для фільтрації
  const contactSearch = e => {
    setFilter(e.target.value);
  };
  // видалення контакту по id
  const deletContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };
  // додавання в localStorage при зміні contacts
  useEffect(() => {
    localStorage.setItem(LS_KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const getVisibleContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <Wrapper>
      <Caption title="Phonebook" />
      <ContactForm onSubmit={addTodo} />
      <Container>
        <Caption title="Contacts" />
        <Filter onValue={filter} onFilter={contactSearch} />

        <ContactList
          contacts={getVisibleContacts}
          deletContact={deletContact}
        />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Wrapper>
  );
};
