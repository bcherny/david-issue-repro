// @flow

'use strict';

import type { StoreProps } from './store';

import React from 'react';

import { withStore } from './store';

type Props = {
  products: number,
}

let MyComponent = withStore(
  class extends React.Component<StoreProps & Props> {
    render() {
      const { store } = this.props;
      const b = store.get('newissues');
      return (
        <div>
          <button onClick={() => store.get('newissues')}>Test</button>
        </div>
      );
    }
  },
);

let MyComponent2 = withStore(({ store }) => (
  <div>
    <button onClick={() => store.get('a')}>Test</button>
  </div>
));
