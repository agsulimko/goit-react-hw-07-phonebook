import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContacts } from "redux/contactsSlice";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <h3>{contacts.name}</h3>
      <h3>{contacts.number}</h3>

      <button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={() => dispatch(deleteContacts(contacts.id))}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
