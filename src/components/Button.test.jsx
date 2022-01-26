import { render, screen } from '@testing-library/react';
import { makeCall, getNameByIndex } from './Button';

// const imported = require('./Button.jsx')

test('button returns array of objects', () => {
    expect(makeCall()).toEqual(true);
});

test('should return true bc it found a name', () => {
    const mock = jest.fn();
    expect(getNameByIndex(1, mock)).toEqual(true)
})

test('should get false bc out of bounds', () => {
    const mock = jest.fn();
    expect(getNameByIndex(-1, mock)).toEqual(false)
})