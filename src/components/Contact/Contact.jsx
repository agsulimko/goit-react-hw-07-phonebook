import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContacts } from "redux/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(contact.id));
  return (
    <li className={css.item}>
      <h3>{contact.name}</h3>
      <h3>{contact.phone}</h3>

      <button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
