import React from 'react';

const ContactList = ({ contacts, onDeleteCard }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, text, number }) => (
          <li key={id}>
            <p>
              {text} : {number}
            </p>
            <button onClick={() => onDeleteCard(id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
