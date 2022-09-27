import renderer from 'react-test-renderer';
import React from 'react'
import Message from './Message';

describe("Message test", () => {

    test("Should render a Message correctly", () => {
        const component = renderer.create(
            <Message type="Alert">Hello</Message>,
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    })
})
