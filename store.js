// @flow

const { connect, createStore } = require('undux');

import type { Store } from 'undux';


type UnduxStore = {
  newissues: string,
};

// Create a store with an initial value.
let store = createStore<UnduxStore>({
  newissues: 'a',
});

export type StoreProps = {
  store: Store<UnduxStore>,
};

module.exports.withStore = connect(store);
