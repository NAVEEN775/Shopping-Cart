import react from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import Home from '../Registration/Home'
import Login from './Login';



describe ("Home", ()=>{
it('dispalys error message for invalid data',()=>{
        const{getByText,getByPlaceholderText}= render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
    
        const submitbutton = getByText('Submit');
        expect(submitbutton).toBeInTheDocument();
    
    
        const fname= getByPlaceholderText('Enter FirstName')
        const lname= getByPlaceholderText('Enter LastName')
        const email= getByPlaceholderText('Enter email')
        const Already = getByText('Already have User?')
        const singin = getByText('SIGN IN') 
       
    
        expect(fname).toBeInTheDocument
        expect(lname).toBeInTheDocument
        expect(email).toBeInTheDocument
        expect(Already).toBeInTheDocument
        expect(singin).toBeInTheDocument
        // expect(signup).toBeInTheDocument
    })
it('renders the component',()=>{
    render(
    <MemoryRouter>
    <Home />
    </MemoryRouter>
    
    );
    const submitbutton = screen.getByText('Submit');
    expect(submitbutton).toBeInTheDocument();
})
test('submits the form',()=>{
    const{getByText,getByPlaceholderText}= render(
    <MemoryRouter>
    <Home/>
    </MemoryRouter>
    
    );
    const fname = getByPlaceholderText('Enter FirstName')
    const lname = getByPlaceholderText('Enter LastName')
    const email = getByPlaceholderText('Enter email')

    fireEvent.change(fname, {target:{value:"Naveen"}})
    fireEvent.change(lname, {target:{value:"chinthoju"}})
    fireEvent.change(email, {target:{value:"chinthojunaveen2@gmail.com"}})

    const submitbutton = getByText('Submit');
    expect(submitbutton).toBeInTheDocument();

})
})

