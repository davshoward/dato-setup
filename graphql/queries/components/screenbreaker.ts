import { gql } from 'graphql-request';

export const SCREEN_BREAKER_FRAGMENT = gql`
	fragment ScreenBreakerRecordFragment on ScreenBreakerRecord {
		id
		heading
		eyebrow
		screenbreakerContent: content
		layout
		panel
		image {
			responsiveImage {
				...responsiveImageFragment
			}
		}
		screenbreakerActions: actions {
			...ButtonRecordFragment
		}
	}
`;
