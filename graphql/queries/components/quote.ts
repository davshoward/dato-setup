import { gql } from 'graphql-request';

export const QUOTE_FRAGMENT = gql`
	fragment QuoteRecordFragment on QuoteRecord {
		id
		quote
		citationName
		citationDetails
		pattern
		theme
	}
`;
