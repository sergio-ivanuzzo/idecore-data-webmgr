import { Size } from '@material-ui/core/Table';

export interface IDataTableProps {
	items: Array<any>;
	customCells?: Array<string>;
	className?: string;
	size?: Size;
}
