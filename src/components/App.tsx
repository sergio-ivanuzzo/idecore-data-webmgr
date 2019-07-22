import * as React from 'react';

import { Provider } from 'react-redux';

import RegionsContainer, {IInjectedProps} from '~containers/RegionsContainer';
import { store } from '~store/store';

class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <RegionsContainer>
                    {this.renderTable}
                </RegionsContainer>
            </Provider>
        );
    }

    protected renderTable = (props: IInjectedProps): React.ReactNode => {
        return null;
    }
}

export default App;
