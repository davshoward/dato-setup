import { gql } from 'graphql-request';

export const CTA_SEPARATOR_FRAGMENT = gql`
	fragment CtaSeparatorRecordFragment on CtaSeparatorRecord {
		id
		pattern
		theme
		button {
			...ButtonRecordFragment
		}
	}
`;
