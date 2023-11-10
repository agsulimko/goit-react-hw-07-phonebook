// import { useDispatch } from "react-redux";
// import css from "./Contact.module.css";
// import { deleteContacts } from "redux/operations";

// const Contact = ({ contact }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteContacts(contact.id));
//   return (
//     <li className={css.item}>
//       <h3>{contact.name}</h3>
//       <h3>{contact.phone}</h3>

//       <button
//         type="button"
//         className={css.btnClose}
//         aria-label="Close"
//         onClick={handleDelete}
//       >
//         Delete
//       </button>
//     </li>
//   );
// };
// export default Contact;
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContacts, editContacts } from "redux/operations";
import { useEffect, useState } from "react";

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
      // handlEditWord({
      // id: word.id,
      // ukWord,
      // enWord,
      // });
      dispatch(editContacts({ id: contacts.id, name, phone }));
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
  // const handleInputChange = ({ target }) => {
  //   if (target.name === "editName") {
  //     setName(target.value);
  //     return;
  //   }
  //   setNumber(target.value);
  // };
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
            type="text"
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
