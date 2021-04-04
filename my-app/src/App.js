import React, { Component } from 'react';
import Form from './components/Form';
import Alert from './components/aaa';

import BBB from './components/bbb';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', text: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', text: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', text: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  fff = (name, number) => {
    // console.log(name);
    // console.log(number);
    const ggg = {
      text: name,
      id: uuidv4(),
      number,
    };
    const ddd = this.state.contacts.find(ggg => name === ggg.text);

    // console.log(ddd);
    // console.log(ggg.text);
    // console.log(this.state.contacts);

    if (ddd) {
      alert(`${ddd.text}  is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [ggg, ...contacts],
      }));
    }
  };
  deleteTodo = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contacts => contacts.id !== contactsId,
      ),
    }));
  };
  filtr = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    const { contacts, filter } = this.state;
    const visible = this.state.contacts.filter(contacts =>
      contacts.text.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <h2>Name</h2>
          <Form onSubmit={this.fff} />
        </div>
        <div>
          <h2>Contacts</h2>
          <BBB value={filter} onChange={this.filtr} />
          <Alert todos={visible} onDeleteTodo={this.deleteTodo} />
        </div>
      </div>
      //       <div>
      //   <h1>Phonebook</h1>
      //   <ContactForm ... />

      //   <h2>Contacts</h2>
      //   <Filter ... />
      //   <ContactList ... />
      // </div>
    );
  }
}

export default App;
