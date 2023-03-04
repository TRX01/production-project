import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/sidebar'

describe('Sidebar', () => {
    test('simple', () => {
        render(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('toggled', () => {
        render(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
