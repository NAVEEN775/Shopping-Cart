import {render, fireEvent, screen} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import Header from './Header'


const cart=[{}]
describe ("Header", ()=>{
    it('dispalys error message for invalid data',()=>{
            const{getByText,getByPlaceholderText}= render(
               <MemoryRouter>
                    <Header cart={cart}/>
                </MemoryRouter>
            );

            const Already = getByText('Shopping Cart')

            expect(Already).toBeInTheDocument;

        if(cart && cart.length > 0){
        const cartlengthElement = getByText(`${cart.length}`);
        expect(cartlengthElement).toBeInTheDocument();
        }else{
            expect(cartlengthElement).not.toBeInTheDocument();
        }
    })
})

