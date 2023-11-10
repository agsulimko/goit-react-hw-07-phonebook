import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContacts, editContacts } from "redux/operations";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(contacts.name || "");
  const [phone, setPhone] = useState(contacts.phone || "");

  const handlEdit = () => {
    setIsEditMode((prev) => !prev);
  };
  const handleDelete = () => dispatch(deleteContacts(contacts.id));

  useEffect(() => {
    if (!isEditMode && (name !== contacts.name || phone !== contacts.phone)) {
      dispatch(editContacts({ id: contacts.id, name, phone }));

      toast.success("Successfully edit a contact!", { duration: 1500 });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, name, phone]);

  const handleInputChange = ({ target }) => {
    if (target.name === "editName") {
      setName(target.value);
    } else if (target.name === "editPhone") {
      setPhone(target.value);
    }
  };

  return (
    <li className={css.item}>
      {!isEditMode ? (
        <div className={css.nameNumber}>
          <h3 className={css.name}>{contacts.name}</h3>
          <h3 className={css.number}>{contacts.phone}</h3>
        </div>
      ) : (
        <>
          <input
            onChange={handleInputChange}
            type="text"
            name="editName"
            value={name}
          />
          <input
            onChange={handleInputChange}
            type="tel"
            name="editPhone"
            value={phone}
          />
        </>
      )}
      <button onClick={handlEdit}>{isEditMode ? "Save" : "Edit"}</button>
      <button
        type="button"
        className={css.btnClose}
        aria-label="Close"
        onClick={handleDelete}
        sx={{ m: 1, width: "110px" }}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
