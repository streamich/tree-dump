import {printJson} from '../printJson';
import {printTree} from '../printTree';

test('formats JSON object', () => {
  const data = {foo: 'bar'};
  const str = 'Node' + printTree('', [(tab) => printJson(tab, data)]);

  expect(str).toBe(
    `Node
└─ {
     "foo": "bar"
   }`,
  );
});

test('prints literal on the same line', () => {
  const str = 'Node' + printTree('', [(tab) => printJson(tab, 123)]);

  expect(str).toBe(
    `Node
└─ 123`,
  );
});
