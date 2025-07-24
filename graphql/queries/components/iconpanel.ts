import { gql } from 'graphql-request';

export const ICON_PANEL_FRAGMENT = gql`
	fragment IconPanelRecordFragment on IconPanelRecord {
		id
		heading
		icon {
			responsiveImage {
				...responsiveImageFragment
			}
		}
	}
`;
