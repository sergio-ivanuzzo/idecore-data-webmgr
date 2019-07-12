import * as React from 'react';

import { Provider } from 'react-redux';

import {store} from '@store/store';

export class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                Test
            </Provider>
        );
    }
}
