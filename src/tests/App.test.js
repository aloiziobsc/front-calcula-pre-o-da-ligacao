import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders título Telzir', () => {
  const { getAllByText } = render(<App />);
  const tituloText = getAllByText(/Telzir/i)[0];
  expect(tituloText).toBeInTheDocument();
});

test('renders 3 input type radio', () => {
  const { getAllByRole } = render(<App />);
  const radio = getAllByRole('radio');
  expect(radio.length).toEqual(3);
});

test('renders label Planos', () => {
  const { getByLabelText } = render(<App />);
  const labelFaleMais30 = getByLabelText(/FaleMais30/i);
  const labelFaleMais60 = getByLabelText(/FaleMais60/i);
  const labelFaleMais120 = getByLabelText(/FaleMais120/i);
  expect(labelFaleMais30).toBeInTheDocument();
  expect(labelFaleMais60).toBeInTheDocument();
  expect(labelFaleMais120).toBeInTheDocument();
});

test('renders 2 selects', () => {
  const { getAllByTestId } = render(<App />);
  const selectItem = getAllByTestId('select-option');
  expect(selectItem.length).toEqual(2);
});

test('renders input minutos', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputMinutos = getByPlaceholderText(/^ex: 10$/i);
  expect(inputMinutos).toBeInTheDocument();
});

test('renders button Calcular disabled', () => {
  const { getByText } = render(<App />);
  const buttonCalcular = getByText(/^Calcular$/i);
  expect(buttonCalcular).toBeDisabled();
});

test('renders button Calcular ativo', () => {
  const { getByText, getAllByRole, getByPlaceholderText } = render(<App />);
  const radio = getAllByRole('radio')[0];
  const inputMinutos = getByPlaceholderText(/^ex: 10$/i);
  fireEvent.click(radio)
  fireEvent.change(inputMinutos, { target: { value: '10' } })
  const buttonCalcular = getByText(/^Calcular$/i);
  expect(buttonCalcular).not.toBeDisabled();
});

test('renders new Card', () => {
  const { getByText,getAllByText, getAllByRole } = render(<App />);
  const buttonCalcularNovaLicacao = getByText(/^Calcular nova ligação$/i);
  fireEvent.click(buttonCalcularNovaLicacao)
  const subTituloSelecionePlano = getAllByText(/^Selecione seu Plano:$/i);
  const radio = getAllByRole('radio');
  expect(radio.length).toEqual(6);
  expect(subTituloSelecionePlano.length).toEqual(2);
});

test('teste botão fecha Card', () => {
  const { getByText } = render(<App />);
  const buttonFechar = getByText(/^X$/i);
  const subTituloSelecionePlano = getByText(/^Selecione seu Plano:$/i);
  fireEvent.click(buttonFechar)
  expect(subTituloSelecionePlano).not.toBeInTheDocument();
});
test('renders table after click Calcular', () => {
  const { getByText, getAllByRole, getByPlaceholderText } = render(<App />);
  const radio = getAllByRole('radio')[0];
  const inputMinutos = getByPlaceholderText(/^ex: 10$/i);
  fireEvent.click(radio)
  fireEvent.change(inputMinutos, { target: { value: '10' } })
  const buttonCalcular = getByText(/^Calcular$/i);
  fireEvent.click(buttonCalcular)
  const tableRender = getAllByRole('table')[0]
  expect(tableRender).toBeInTheDocument();
});
