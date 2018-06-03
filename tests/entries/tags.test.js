import React from 'react';
import renderer from 'react-test-renderer';

// Link to component(s)
import Tags from '../../app/js/components/entries/Tags';
import Tag from '../../app/js/components/entries/Tags';

// Describe
test('Tags Renders', () => {
  const component = renderer.create(
    <Tags />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Tag Renders', () => {
  const component = renderer.create(
    <Tag />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
