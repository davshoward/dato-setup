import { gql } from 'graphql-request';

export const ICON_GRID_FRAGMENT = gql`
	fragment IconGridRecordFragment on IconGridRecord {
		id
		heading
		eyebrow
		content
		endContent
		pattern
		icons {
			...IconPanelRecordFragment
		}
	}
`;
