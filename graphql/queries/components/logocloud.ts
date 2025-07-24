import { gql } from 'graphql-request';

export const LOGO_CLOUD_FRAGMENT = gql`
	fragment LogoCloudRecordFragment on LogoCloudRecord {
		id
		heading
		eyebrow
		content
		theme
		logos {
			responsiveImage {
				...responsiveImageFragment
			}
		}
	}
`;
