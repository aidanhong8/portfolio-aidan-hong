import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('home links to each portfolio page', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Hey there!' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Explore my projects' })).toHaveAttribute('href', '/projects');
  expect(screen.getByRole('link', { name: 'About Aidan' })).toHaveAttribute('href', '/about');
  expect(screen.getByRole('link', { name: 'Contact Aidan' })).toHaveAttribute('href', '/contact');
});

test('contact opens an encoded email draft and preserves the message', () => {
  const location = window.location;
  delete window.location;
  window.location = { href: '' };
  try {
    render(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>);
    expect(screen.getByRole('link', { name: 'ahong97@gatech.edu' })).toHaveAttribute('href', 'mailto:ahong97@gatech.edu');
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Sam Lee' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'sam@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject:'), { target: { value: 'Hello & questions?' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'A project #1\nThanks!' } });
    fireEvent.click(screen.getByRole('button', { name: 'Open Email App' }));
    const draft = new URL(window.location.href);
    expect(draft.protocol).toBe('mailto:');
    expect(draft.pathname).toBe('ahong97@gatech.edu');
    expect(draft.searchParams.get('subject')).toBe('Hello & questions?');
    expect(draft.searchParams.get('body')).toBe('A project #1\nThanks!\n\nFrom: Sam Lee\nReply to: sam@example.com');
    expect(screen.getByLabelText('Message:')).toHaveValue('A project #1\nThanks!');
    expect(screen.getByRole('status')).toHaveTextContent('Send it from your email app');
  } finally {
    window.location = location;
  }
});

test('Quick Links opens on click and closes on a second click', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const toggle = screen.getByRole('button', { name: 'Quick Links' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'GitHub' })).toBeVisible();
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
