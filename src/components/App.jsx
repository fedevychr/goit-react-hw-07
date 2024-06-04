import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import PhoneBookContainer from "./PhoneBookContainer/PhoneBookContainer";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  return (
    <PhoneBookContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </PhoneBookContainer>
  );
}

export default App;
