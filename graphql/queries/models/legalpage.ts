import { gql } from 'graphql-request';

export const LEGAL_PAGE_FRAGMENT = gql`
	fragment LegalPageRecordFragment on LegalPageRecord {
		id
		heading
		slug
		content {
			blocks
			inlineBlocks
			links
			value
		}
	}
`;
