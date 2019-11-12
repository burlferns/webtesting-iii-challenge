// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders correctly', () => {
  render(<Display />);
});

test('If closed prop is true then gate is closed and in red color', () => {
  const component= render(<Display  closed={true}/>);

  // console.log("This is in Display.js file and 2nd test and component is:",component);
  const { getByText } = component;  
  const closedBtn = getByText("Closed");

  // console.log("The component.childElementCount",component.childElementCount);
  // console.log("outputA:",component.container.firstChild);
  // console.log("outputB:",component.container.childElementCount);
  // console.log("outputC:",component.container.firstChild.firstChild);
  // console.log("outputD:",component.container.firstChild.childNodes[0]);
  // console.log("outputE:",component.container.firstChild.childNodes[1]);
  // console.log("outputF:",component.container.firstChild.childNodes[1].className);
  expect(component.container.firstChild.childNodes[1].className).toBe("led red-led");
  expect(closedBtn.className).toBe("led red-led");
  
});

test('If closed prop is false then gate is open and in green color', () => {
  const component= render(<Display  closed={false}/>);

  const { getByText } = component;  
  getByText("Open");

  expect(component.container.firstChild.childNodes[1].className).toBe("led green-led");
  
});

test('If locked prop is true then gate is locked and in red color', () => {
  const component= render(<Display  locked={true}/>);

  const { getByText } = component;  
  getByText("Locked");

  expect(component.container.firstChild.childNodes[0].className).toBe("led red-led");
  
});

test('If locked prop is false then gate is unlocked and in green color', () => {
  const component= render(<Display  locked={false}/>);

  const { getByText } = component;  
  getByText("Unlocked");

  expect(component.container.firstChild.childNodes[0].className).toBe("led green-led");
  
});