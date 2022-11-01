import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import { Wrapper, Container } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Caption } from './Title/Title';
import { ContainerToast } from './ToastContainer/ToastContainer';
import {
  GetItemLocalStorage,
  SetItemLocalStorage,
} from '../utils/LocalStorage';
import contactsDefault from '../contants/contactsDefault.json';
import { LS_KEY_CONTACTS } from 'contants/ConstansKey';

export const App = () => {
  const contactsList = GetItemLocalStorage(LS_KEY_CONTACTS);

  const [contacts, setContacts] = useState(contactsList ?? contactsDefault);
  const [filter, setFilter] = useState('');

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
    toast.success(' Contact addano. ✅');
  };

  const contactSearch = e => {
    setFilter(e.target.value);
  };

  const deleteFilterContact = idContact => {
    return contacts.filter(contact => {
      if (contact.id === idContact) {
        toast.info(' Contact deleted. ✅ ');
      }
      return contact.id !== idContact;
    });
  };

  const deletContact = idContact => {
    setContacts(deleteFilterContact(idContact));
  };

  useEffect(() => {
    SetItemLocalStorage(LS_KEY_CONTACTS, contacts);
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
      <ContainerToast />
    </Wrapper>
  );
};
