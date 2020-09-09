import React, { Component } from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from "./components/global.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  getContact = (addedContact) => {
    this.state.contacts.find(
      (el) => el.name.toLowerCase() === addedContact.name.toLowerCase()
    )
      ? alert(`${addedContact.name} is already in contacts `)
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, addedContact],
          };
        });
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  getFilteredName = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  getFilteredContacts = () => {
    return this.state.filter
      ? this.state.contacts.filter((el) =>
          el.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    const parsedSavedContacts = JSON.parse(savedContacts);
    if (parsedSavedContacts) {
      this.setState({ contacts: parsedSavedContacts });
    }
  }
  componentDidUpdate( prevState) {
    console.log(prevState.contacts);
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <Form getContact={this.getContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          getFilterName={this.getFilteredName}
        ></Filter>
        <ContactList
          contactList={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
