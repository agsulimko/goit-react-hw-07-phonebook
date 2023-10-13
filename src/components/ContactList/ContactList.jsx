import Contact from "components/Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/selectors";

const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  const filteredContacts = (filter, contacts) => {
    if (!filter) return;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filteredContacts(filter, contacts);

  return (
    <ul className={css.list}>
      {(visibleContacts ?? contacts).map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
export default ContactList;
