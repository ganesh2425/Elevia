import React from 'react';
import Header from "./NewProject/components/Header";
import AddContact from "./NewProject/components/AddContact";
import ContactList from "./NewProject/components/ContactList";

export default function App() {
    const contacts = [
        {
            id: '1',
            name: 'Ganesh',
            email: 'ganesh023@gmail.com'
        },
        {
            id: '2',
            name: 'Ram',
            email: 'ram@gmail.com'
        }
    ]
    return (
        <>
        <div className='ui container'>
         <Header />
         <AddContact />
         <ContactList contacts={contacts}/>
         </div>  
        </>
    )
}
