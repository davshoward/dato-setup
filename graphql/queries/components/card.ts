import { gql } from 'graphql-request';

export const CARD_FRAGMENT = gql`
	fragment CardRecordFragment on CardRecord {
		id
		heading
		description
		image {
			responsiveImage {
				...responsiveImageFragment
			}
		}
		link
	}
`;
