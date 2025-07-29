import { gql } from 'graphql-request';

export const HERO_FRAGMENT = gql`
	fragment HeroRecordFragment on HeroRecord {
		id
		heading
		heroContent: content
		layout
		theme
		useBackgroundVideo
		heroImage: image {
			responsiveImage {
				...responsiveImageFragment
			}
		}
		backgroundVideo {
			url
		}
		actions {
			...ButtonRecordFragment
		}
	}
`;
