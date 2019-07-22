import * as React from 'react';

import { connect } from 'react-redux';

import { IInjectedProps, IRegionsContainerProps } from '~containers/RegionsContainer/RegionsContainerProps';
import { IStoreState } from '~store/reducers/rootReducer';

class RegionsContainer extends React.Component<IRegionsContainerProps> {
	public render(): React.ReactNode {
		return this.props.children(this.injectedProps);
	}

	protected get injectedProps(): IInjectedProps {
		const props = this.props as any;
		return {
			regionItems: props.regionItems,
		};
	}
}

const mapStateToProps = (state: IStoreState) => ({
	regionItems: state.regionsReducer.regionItems,
});

export default connect(mapStateToProps)(RegionsContainer);
