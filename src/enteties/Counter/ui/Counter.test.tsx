import { screen, userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/config/tests/componentRender';
import { Counter } from './Counter';

describe('Counter component testing', () => {
    test('to be on page', () => {
        componentRender(
            <Counter />,
            { initialState: { counter: { value: 10 } } },
        )
        expect(screen.getByTestId('title-value')).toHaveTextContent('10')
    });

    test('increment', () => {
        componentRender(
            <Counter />,
            { initialState: { counter: { value: 10 } } },
        )
        userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('title-value')).toHaveTextContent('11')
    });

    test('increment', () => {
        componentRender(
            <Counter />,
            { initialState: { counter: { value: 10 } } },
        )
        userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('title-value')).toHaveTextContent('9')
    });
});
