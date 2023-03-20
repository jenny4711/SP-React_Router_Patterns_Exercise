import { render, fireEvent } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom'

test('/colors route', () => {

   const {getByText}=
   render ((<MemoryRouter initialEntries={["/colors"]}>
    <App />
    </MemoryRouter>));
    expect(getByText('Welcome to the color factory.')).toBeInTheDocument()
    const link=getByText('ADD A COLOR')
    fireEvent.click(link)
    expect(getByText('This is Add Picker')).toBeInTheDocument()
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('/colors route', () => {

  const {getByText}=
  render ((<MemoryRouter initialEntries={["/colors/:color/:hex"]}>
   <App />
   </MemoryRouter>));
   expect(getByText("ISN'T IT BEAUTIFUL?")).toBeInTheDocument()

});
