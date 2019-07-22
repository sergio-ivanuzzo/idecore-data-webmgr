import { IRegion } from '~store/reducers/regionsReducer';

export interface IInjectedProps {
	regionItems: Array<IRegion>;
}

export interface IRegionsContainerProps {
	children: (injectedProps: IInjectedProps) => React.ReactNode;
}
