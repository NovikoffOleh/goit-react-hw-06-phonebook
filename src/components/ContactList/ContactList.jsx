import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contactActions';
import { Notify } from 'notiflix';
import s from './ContactList.module.css';
import { getVisibleContacts } from 'redux/contacts/contactSelectors';

export default function ContactList(){
    const dispatch = useDispatch();
    const visibleContacts = useSelector(getVisibleContacts);
    const onDeleteContact =(id, name)=>{
        Notify.info(`$(name)is deleted from contacts.`);
        dispatch(contactsActions.removeContact(id));
    };
    return(
        <ul className={s.list}>
            {visibleContacts.map(({id, name, number})=> {
                return(
                    <li key={id} className={s.item}>
                        <p>
                            {name}:{number}
                        </p>
                        <button className={s.button} type="button"
                        onClick={()=> onDeleteContact(id, number)}> 
                        Видалити
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}