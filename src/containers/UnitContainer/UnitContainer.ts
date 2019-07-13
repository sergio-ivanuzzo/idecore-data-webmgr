import * as React from 'react';

import { connect } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators, Dispatch } from 'redux';

import { IUnitContainerProps } from '~containers/UnitContainer/UnitContainerProps';
import * as UnitAction from '~store/actions/unitActions';

class UnitContainer extends React.Component<IUnitContainerProps> {

	public async componentDidMount(): Promise<void> {
		await this.props.onUnitListFetch();
	}

	public render(): React.ReactNode {
		return this.props.children;
	}
}

const mapStateToProps = (state) => ({
	unitsList: state.unitReducer.unitItems,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionCreatorsMapObject => bindActionCreators({
	onUnitListFetch: () => dispatch(UnitAction.actionFetchUnitsList()),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnitContainer);
