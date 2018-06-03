import React from 'react';
import renderer from 'react-test-renderer';

// Link to component(s)
import Rating from '../../app/js/components/entries/Rating';
import Star from '../../app/js/components/entries/Rating';

// Describe
test('Rating Renders', () => {
  const component = renderer.create(
    <Rating />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Star Renders', () => {
  const component = renderer.create(
    <Star />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
