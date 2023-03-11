import React from "react";

import {ContactList, ContactForm, Filter, Section } from "./index";
export default function App () {
  return(
    <>
    <Section title="ТелефонBook">
      <ContactForm/>
    </Section>

    <Section title="Контакти">
      <Filter/>
      <ContactList/>
    </Section>
    </>
  )
}