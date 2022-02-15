import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import Quote from '../Quote';
import Home from '../Home';
import Operator from '../Operator';

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

  test('render Quote', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>
    );
    expect(getByText('William Paul Thurston')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<div>
  <p>
    Mathematics is not about numbers, equations, computations or algorithms: it is about understanding
  </p>
  <span>
    William Paul Thurston
  </span>
</div>
`);
  });

  test('render Quote', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(getByText('Welcome to Parkers Calculator')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<div
  class="container"
>
  <div
    class="home-container"
  >
    <h1>
      Welcome to Parkers Calculator
    </h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum incidunt quae, rerum labore, deleniti voluptatum accusantium exercitationem minima itaque illo quam tempora. Soluta veritatis impedit quis minus, accusamus dolores id, corrupti eos voluptate, commodi vitae consectetur odit consequuntur blanditiis dolorum.
    </p>
  </div>
</div>
`);
  });
});
