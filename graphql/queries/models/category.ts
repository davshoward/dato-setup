import { gql } from 'graphql-request';

export const CATEGORY_FRAGMENT = gql`
	fragment CategoryRecordFragment on CategoryRecord {
		id
		heading
		slug
	}
`;
