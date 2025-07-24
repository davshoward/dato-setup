import { gql } from 'graphql-request';

export const PEOPLE_LISTING_FRAGMENT = gql`
	fragment PeopleListingRecordFragment on PeopleListingRecord {
		id
		heading
		eyebrow
		content
		pattern
		theme
		peopleGroups {
			...PeopleGroupRecordFragment
		}
	}
`;
