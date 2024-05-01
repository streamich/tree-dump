import {printTree} from '../printTree';

test('renders a single child node', () => {
  const str = 'Node' + printTree('', [() => `foo`]);

  expect(str).toBe(
    `Node
└─ foo`,
  );
});

test('renders two children node', () => {
  const str = 'Node' + printTree('', [() => `foo`, () => `bar`]);

  expect(str).toBe(
    `Node
├─ foo
└─ bar`,
  );
});

test('renders two levels of nodes', () => {
  const str = 'Node' + printTree('', [() => `foo`, (tab) => `bar` + printTree(tab, [() => `baz`])]);

  expect(str).toBe(
    `Node
├─ foo
└─ bar
   └─ baz`,
  );
});

test('renders two levels of nodes, with double tree line', () => {
  const str =
    'Node' +
    printTree('', [(tab) => `foo` + printTree(tab, [() => `baz`]), (tab) => `bar` + printTree(tab, [() => `baz`])]);

  expect(str).toBe(
    `Node
├─ foo
│  └─ baz
└─ bar
   └─ baz`,
  );
});

test('family tree example', () => {
  // prettier-ignore
  const str = 'Me' + printTree('', [
    (tab) => `Father` + printTree(tab, [
      (tab) => `Grandfather` + printTree(tab, [
        () => `Great-grandfather`,
        () => `Great-grandmother`,
      ]),
      () => `Grandmother`,
    ]),
    (tab) => `Mother` + printTree(tab, [
      () => `Grandfather`,
      () => `Grandmother`,
    ]),
  ]);

  expect('\n' + str).toBe(
    `
Me
├─ Father
│  ├─ Grandfather
│  │  ├─ Great-grandfather
│  │  └─ Great-grandmother
│  └─ Grandmother
└─ Mother
   ├─ Grandfather
   └─ Grandmother`,
  );
});

test('can add a blank line', () => {
  // prettier-ignore
  const str = 'start' + printTree('', [
    (tab) => 'line 1',
    () => '',
    (tab) => 'line 2',
  ]);

  expect('\n' + str).toBe(
    `
start
├─ line 1
│
└─ line 2`);
});

test('can produce wide tabs', () => {
  // prettier-ignore
  const str = 'Array' + printTree('', [
    (tab) => '[5]: Object' + printTree(tab + ' '.repeat('[5]: '.length), [
      (tab) => 'item 1',
      (tab) => 'item 2',
    ]),
  ]);

  expect('\n' + str).toBe(
    `
Array
└─ [5]: Object
        ├─ item 1
        └─ item 2`);
});

