// import { useState } from "react";
import css from "./App.module.css";
// import { nanoid } from "nanoid";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <h1 className={css.h1}>Phonebook</h1>

      <ContactForm />
      <h2 className={css.h2}>Contacts</h2>
      <Filter />
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
};

export default App;
