import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList () {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filter.name);
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase());
  });
    return (
      <ul className={css.list}>
        {filteredContacts.map((contact)=>
        <li key={contact.id} className={css.item}>
        <Contact name={contact.name} number={contact.number} id={contact.id}></Contact>
        </li>
        )}
    </ul>

    )
   
}