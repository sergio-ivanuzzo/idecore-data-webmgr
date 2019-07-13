import * as React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IUnitContainerProps } from 'containers/UnitContainer/UnitContainerProps';

class UnitContainer extends React.Component<IUnitContainerProps> {

	public async componentDidMount(): Promise<void> {
		try {
			await this.props.onUnitListFetch();
		} catch (e) {
			return;
		}
	}

	public render(): React.ReactNode {
		return this.props.children;
	}

	protected handleUnitListFetch(): Promise<void> {
		return;
	}
}

const mapStateToProps = (state) => ({
	unitsList: state.unitReducer.unitItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onUnitListFetch: dispatch(this.handleUnitListFetch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitContainer);
