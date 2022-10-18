import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, Title, TitleTwo, Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addTodo} />
        <Container>
          <TitleTwo>Contacts</TitleTwo>
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
