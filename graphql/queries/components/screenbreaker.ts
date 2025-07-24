import { gql } from 'graphql-request';

export const SCREEN_BREAKER_FRAGMENT = gql`
	fragment ScreenBreakerRecordFragment on ScreenBreakerRecord {
		id
		heading
		eyebrow
		content
		layout
		panel
		image {
			responsiveImage {
				...responsiveImageFragment
			}
		}
		actions {
			...ButtonRecordFragment
		}
	}
`;
