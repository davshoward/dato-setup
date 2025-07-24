import { gql } from 'graphql-request';

export const AUTHOR_FRAGMENT = gql`
	fragment AuthorRecordFragment on AuthorRecord {
		id
		name
		slug
		photo {
			responsiveImage {
				...responsiveImageFragment
			}
		}
	}
`;
