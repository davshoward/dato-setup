import { gql } from 'graphql-request';

export const TEXT_GRID_FRAGMENT = gql`
	fragment TextGridRecordFragment on TextGridRecord {
		id
		heading
		eyebrow
		textGridContent: content
		theme
		pattern
		layout
		actions {
			...ButtonRecordFragment
		}
		grid {
			...GridRecordFragment
		}
	}
`;
