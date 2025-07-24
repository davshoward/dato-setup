import { gql } from 'graphql-request';

export const POST_CAROUSEL_FRAGMENT = gql`
	fragment PostCarouselRecordFragment on PostCarouselRecord {
		id
		heading
		theme
		selectPosts
		selectedPosts {
			...PostRecordFragment
		}
	}
`;
