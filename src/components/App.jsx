import React from 'react';

import { Filter, ContactList, Section, ContactForm } from './index';

export default function App() {
  return (
    <>
      <Section title="ТелефонBook">
        <ContactForm />
      </Section>
      <Section title="Контакти">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
