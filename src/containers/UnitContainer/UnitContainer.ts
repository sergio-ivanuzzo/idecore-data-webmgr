import * as React from 'react';

import { connect } from 'react-redux';

import { IUnitContainerProps } from '~containers/UnitContainer/UnitContainerProps';

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
}

const mapStateToProps = (state) => ({
	unitsList: state.unitReducer.unitItems,
});

export default connect(mapStateToProps)(UnitContainer);
