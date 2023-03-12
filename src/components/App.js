import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
    <div className="telephone">
    <h1 >ТелефонBook</h1>
    </div>
      
      <Form />
      <Section title="Контакти">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export { App };
