import { gql } from 'graphql-request';

export const POST_FRAGMENT = gql`
	fragment PostRecordFragment on PostRecord {
		id
		heading
		slug
		description
		content {
			blocks
			inlineBlocks
			links
			value
		}
		author {
			...AuthorRecordFragment
		}
		category {
			...CategoryRecordFragment
		}
	}
`;
