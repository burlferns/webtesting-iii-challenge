// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';
import expectExport from 'expect';

test('Controls renders correctly', () => {
  render(<Controls />);
});

test('closed=false & locked=false: "Lock Gate" button disabled, "Close Gate" button can toggle', () => {
  const mockFunc = jest.fn();

  const {getByText} = render(<Controls closed={false} locked={false} toggleClosed={mockFunc}/>);

  //Check that the "Lock Gate" button is there
  const lockBtn = getByText("Lock Gate")

  //Check that the "Lock Gate" button is disabled
  expectExport(lockBtn.disabled).toEqual(true);

  //Check that the "Close Gate" button is there and press it
  fireEvent.click(getByText("Close Gate"));

  //Check that the toggleClosed function was called by checking that the 
  //mockFunc was called
  expect(mockFunc).toHaveBeenCalledTimes(1);
});

test('closed=true & locked=true: "Unlock Gate" button can toggle, "Open Gate" button disabled', () => {
  const mockFunc = jest.fn();

  const {getByText} = render(<Controls closed={true} locked={true} toggleLocked={mockFunc}/>);

  //Check that the "Open Gate" button is there
  const openBtn = getByText("Open Gate")

  //Check that the "Open Gate" button is disabled
  expectExport(openBtn.disabled).toEqual(true);

  //Check that the "Unlock Gate" button is there and press it
  fireEvent.click(getByText("Unlock Gate"));

  //Check that the toggleLocked function was called by checking that the 
  //mockFunc was called
  expect(mockFunc).toHaveBeenCalledTimes(1);
});

test('closed=true & locked=false: "Lock Gate" button can toggle, "Open Gate" button can toggle', () => {
  const mockFuncLock = jest.fn();
  const mockFuncOpen = jest.fn();

  const {getByText} = render(<Controls 
    closed={true} 
    locked={false} 
    toggleLocked={mockFuncLock}
    toggleClosed={mockFuncOpen}
  />);

  // Check that the "Open Gate" button is there and press it
  fireEvent.click(getByText("Open Gate"));

  //Check that the toggleClosed function was called by checking that the 
  //mockFuncOpen was called
  expect(mockFuncOpen).toHaveBeenCalledTimes(1);

  // Check that the "Lock Gate" button is there and press it
  fireEvent.click(getByText("Lock Gate"));

  //Check that the toggleLocked function was called by checking that the 
  //mockFuncLock was called
  expect(mockFuncLock).toHaveBeenCalledTimes(1);
  
});