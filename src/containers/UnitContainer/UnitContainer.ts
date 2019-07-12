import * as React from 'react';

import { IUnitContainerProps } from '@containers/UnitContainer/UnitContainerProps';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

class UnitContainer extends React.Component<IUnitContainerProps> {

	public async componentDidMount(): Promise<void> {
		await this.props.onUnitListFetch();
	}

	public render(): React.ReactNode {
		return this.props.children;
	}

	protected handleUnitListFetch(): Promise<void> {
		return;
	}
}

const mapStateToProps = (state) => undefined;
const mapDispatchToProps = (dispatch: Dispatch) => ({
	onUnitListFetch: this.handleUnitListFetch,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitContainer);
