import * as React from 'react';

import { Provider } from 'react-redux';

import UnitContainer from '~containers/UnitContainer';
import { store } from '~store/store';

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <UnitContainer>
                    Test
                </UnitContainer>
            </Provider>
        );
    }
}

export default App;
