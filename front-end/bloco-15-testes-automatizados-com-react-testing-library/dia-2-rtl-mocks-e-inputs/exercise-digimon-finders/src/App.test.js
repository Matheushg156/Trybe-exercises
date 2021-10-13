import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('contains a input', () => {
    render(<App />);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
  });

  it('renders App', async () => {

  });
});
