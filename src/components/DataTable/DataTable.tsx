import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import uniqid from 'uniqid';

import { IDataTableProps } from '~components/DataTable/DataTableProps';
import { maybe } from '~utils/maybe';

class DataTable extends React.Component<IDataTableProps> {
	public render(): React.ReactNode {
		if (maybe(this.props.items, 'length')) {
			return (
				<Table className={this.props.className} size={this.props.size}>
					<TableHead>
						{this.renderHeaders()}
					</TableHead>
					<TableBody>
						{this.renderRows()}
					</TableBody>
				</Table>
			);
		} else {
			return null;
		}
	}

	public shouldComponentUpdate(
		nextProps: Readonly<IDataTableProps>,
		nextState: Readonly<{}>, nextContext: any,
	): boolean {
		return JSON.stringify(this.props.items) !== JSON.stringify(nextProps.items);
	}

	protected renderHeaders = (): React.ReactNode => {
		let keys: Array<string> = Object.keys(this.props.items[0]);
		if (maybe(this.props.customCells, 'length')) {
			keys = this.props.customCells;
		}

		const headers = keys.map((key: string) => (
			<TableCell key={key}>{key}</TableCell>
		));

		return (
			<TableRow>
				{headers}
			</TableRow>
		);
	}

	protected renderRows = (): React.ReactNode => {
		const prefix = 'data-table-';

		return this.props.items.map((item) => (
			<TableRow key={uniqid(prefix)}>
				{this.renderCells(item)}
			</TableRow>
		));
	}

	protected renderCells = (item: object): React.ReactNode => {
		let keys: Array<string> = Object.keys(item);
		if (maybe(this.props.customCells, 'length')) {
			keys = this.props.customCells;
		}

		return keys.map((key: string) => (
			<TableCell key={key}>{item[key].toString()}</TableCell>
		));
	}
}

export default DataTable;
