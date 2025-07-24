import { gql } from 'graphql-request';

export const HERO_FRAGMENT = gql`
	fragment HeroRecordFragment on HeroRecord {
		id
		heading
		content
		layout
		theme
		useBackgroundVideo
		image {
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
