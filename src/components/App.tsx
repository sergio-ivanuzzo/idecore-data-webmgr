import * as React from 'react';

import { Provider } from 'react-redux';

import DataTable from '~components/DataTable';
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
        return (
            <DataTable items={props.regionItems} />
        );
    }
}

export default App;
