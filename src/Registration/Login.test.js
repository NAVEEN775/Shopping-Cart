import react from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import Login from './Login';



describe ("Login", ()=>{
it('dispalys error message for invalid data',()=>{
        const{getByText,getByPlaceholderText}= render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
    
        const submitbutton = getByText('Submit');
        expect(submitbutton).toBeInTheDocument();
    
    
        const pass= getByPlaceholderText('Password')
        const email= getByPlaceholderText('Enter email')
        const Already = getByText('Need An Account?')
        const singin = getByText('SIGN UP') 


    
        expect(pass).toBeInTheDocument
        expect(email).toBeInTheDocument
    
    
    })
it('renders the component',()=>{
    render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>
    
    );
    const submitbutton = screen.getByText('Submit');
    expect(submitbutton).toBeInTheDocument();
})
test('submits the form',()=>{
    const{getByText,getByPlaceholderText}= render(
    <MemoryRouter>
    <Login/>
    </MemoryRouter>
    
    );
    const pass = getByPlaceholderText('Password')
    const email = getByPlaceholderText('Enter email')

    fireEvent.change(pass, {target:{value:'1234567'}})
    fireEvent.change(email, {target:{value:"chinthojunaveen2@gmail.com"}})

    const submitbutton = getByText('Submit');
    expect(submitbutton).toBeInTheDocument();

})
})

