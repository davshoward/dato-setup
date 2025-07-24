import { gql } from 'graphql-request';

export const TEXTMEDIA_FEATURED_FRAGMENT = gql`
	fragment TextmediaFeaturedRecordFragment on TextmediaFeaturedRecord {
		id
		heading
		eyebrow
		content
		layout
		theme
		image {
			responsiveImage {
				...responsiveImageFragment
			}
		}
		icon {
			responsiveImage {
				...responsiveImageFragment
			}
		}
		actions {
			...ButtonRecordFragment
		}
	}
`;
