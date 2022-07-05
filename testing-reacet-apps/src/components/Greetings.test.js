import {render, screen} from '@testing-library/react';
import Greeting from './Greetings';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
    test('checks the string in the document', () => {
        //arrange
        render(<Greeting />);
    
        //act
    
        //assert
        const wantedText = screen.getByText('Hello World!');
        expect(wantedText).toBeInTheDocument();
    });


    test('checking unchanged text', () => {
        render(<Greeting />)

        
        const unChangedText = screen.getByText('It\'s good to see you!');
        expect(unChangedText).toBeInTheDocument();

    });

    test('checking changed text', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const unChangedText = screen.getByText('Changed', {exact : false});
        expect(unChangedText).toBeInTheDocument();

    })

    test('does not render "good to see you"', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const unChangedText = screen.queryByText('good to see you', {exact : false});
        expect(unChangedText).toBeNull();

    })

})

