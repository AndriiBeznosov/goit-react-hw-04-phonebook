import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, Container } from './App.styled';
import { Caption } from './Title/Title';

const LS_KEY_CONTACTS = 'contacts_items';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38 (096)-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 (096)-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38 (096)-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38 (096)-227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contactsList = JSON.parse(localStorage.getItem(LS_KEY_CONTACTS));
    if (contactsList !== null) {
      this.setState({ contacts: contactsList });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LS_KEY_CONTACTS,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addTodo = user => {
    if (!user) {
      return;
    }
    const names = this.state.contacts.map(contact => contact.name);

    if (names.includes(user.name)) {
      return alert(`${user.name} is already is contacts.`);
    }

    user.id = nanoid();

    this.setState(({ contacts }) => ({
      contacts: [user, ...contacts],
    }));
  };

  contactSearch = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };
  deletContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <Caption title="Phonebook" />
        <ContactForm onSubmit={this.addTodo} />
        <Container>
          <Caption title="Contacts" />
          <Filter onValue={filter} onFilter={this.contactSearch} />

          <ContactList
            contacts={visibleContacts}
            deletContact={this.deletContact}
          />
        </Container>
      </Wrapper>
    );
  }
}
