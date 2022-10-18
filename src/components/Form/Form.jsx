import React, { Component } from 'react';
import { Form, Label, Span, Input, Button } from './Form.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };
  hendleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.hendleSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            value={this.state.name}
            onChange={this.hendleChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <Span>Number</Span>
          <Input
            value={this.state.number}
            onChange={this.hendleChangeNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
