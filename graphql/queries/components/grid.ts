import { gql } from 'graphql-request';

export const GRID_FRAGMENT = gql`
	fragment GridRecordFragment on GridRecord {
		id
		items {
			...CardRecordFragment
		}
	}
`;
