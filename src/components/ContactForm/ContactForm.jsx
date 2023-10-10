import { useReducer } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createContacts } from "redux/contactsSlice";

const initialState = {
  name: "",
  number: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, [action.payload.name]: action.payload.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ContactForm = () => {
  const dispatchToredux = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = ({ target: { value, name } }) => {
    dispatch({ type: "change", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchToredux(createContacts({ ...state, id: nanoid(5) }));

    dispatch({ type: "reset" });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        {" "}
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleInputChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter number XXX-XX-XX"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleInputChange}
          className={css.input}
        />
      </label>
      <button className={css.btnAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
