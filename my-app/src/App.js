import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import styles from './index.module.css';

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
  makeCard = (name, number) => {
    const newCard = {
      text: name,
      id: uuidv4(),
      number,
    };
    const oldCard = this.state.contacts.find(
      newCard => name.toLowerCase() === newCard.text.toLowerCase(),
    );

    if (oldCard) {
      alert(`${oldCard.text}  is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newCard, ...contacts],
      }));
    }
  };
  deleteCard = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contacts => contacts.id !== contactsId,
      ),
    }));
  };
  filterValue = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    const { filter } = this.state;
    const visible = this.state.contacts.filter(contacts =>
      contacts.text.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.makeCard} />

        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} onChange={this.filterValue} />
        <ContactList contacts={visible} onDeleteCard={this.deleteCard} />
      </div>
    );
  }
}

export default App;
