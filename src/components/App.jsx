// import { useState } from "react";
import css from "./App.module.css";
// import { nanoid } from "nanoid";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";

const App = () => {
  return (
    <div className="container">
      <h1 className={css.h1}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
