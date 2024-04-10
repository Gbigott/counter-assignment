import { render, screen,fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

// beforeEach(() => {
//   // Render the Counter component here
// })

test('renders counter message', () => {
  render(<Counter />);
  const welcomeMessage = screen.getByText(/counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {

  const{getByTestId} = render(<Counter />);
  const welcomeMessage = Number(getByTestId("count").textContent);
  expect(welcomeMessage).toEqual(0);
});

test('clicking + increments the count', () => {
  const{getByTestId,getByRole} = render(<Counter />);
  const detect_increment = getByRole("button",{name:"+"});
  const initial_val = Number(getByTestId("count").textContent);
  expect( initial_val).toEqual(0);
  fireEvent.click(detect_increment);
  const final_val = Number(getByTestId("count").textContent);
  
  expect(final_val).toEqual(1);
});

test('clicking - decrements the count', () => {
  const{getByTestId,getByRole} = render(<Counter />);
  const detect_decrement = getByRole("button",{name:"-"});
  const initial_val = Number(getByTestId("count").textContent);
  expect( initial_val).toEqual(0);
  fireEvent.click(detect_decrement);
  const final_val = Number(getByTestId("count").textContent);
  
  expect(final_val).toEqual(-1);
});
