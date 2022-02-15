import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import Quote from '../Quote';

describe('Navbar Test', () => {
  test('render nav bar', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(getByText('Math Magicians')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<div>
  <div
    class="navbar-container"
  >
    <h1>
      Math Magicians
    </h1>
    <ul>
      <a
        href="/"
      >
        <li>
          Home
        </li>
      </a>
      <a
        href="/calculator"
      >
        <li>
          Calulator
        </li>
      </a>
      <a
        href="/quotes"
      >
        <li>
          Quote
        </li>
      </a>
    </ul>
  </div>
</div>
`);
  });
});
