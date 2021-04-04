import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  login = uuidv4();
  tel = uuidv4();
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  lalala = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.lalala}>
          <input
            type="text"
            name="name"
            id={this.login}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            id={this.tel}
            value={this.state.number}
            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
