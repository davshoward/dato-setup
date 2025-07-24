import { gql } from 'graphql-request';

export const BUTTON_FRAGMENT = gql`
	fragment ButtonRecordFragment on ButtonRecord {
		id
		text
		variant
		link
	}
`;
