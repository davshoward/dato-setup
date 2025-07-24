import { gql } from 'graphql-request';

export const META_TAGS_FRAGMENT = gql`
	fragment metaTagsFragment on Tag {
		attributes
		content
		tag
	}
`;
