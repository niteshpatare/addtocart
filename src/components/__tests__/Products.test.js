import { render, screen, cleanup } from '@testing-library/react'
import Products from '../Shop/Products'

test('desc', () => {
  expect(true).toBe(true)
  const linkElement = screen.getByText(/Buy your favorite products/i)
  expect(linkElement).toBeInTheDocument()
})

test('should render Products component', () => {
  render(<Products />)
})
