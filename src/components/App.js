import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
   
      
      <Form />
      <Section title="Контакти">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export { App };
