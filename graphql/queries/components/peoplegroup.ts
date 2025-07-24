import { gql } from 'graphql-request';

export const PEOPLE_GROUP_FRAGMENT = gql`
	fragment PeopleGroupRecordFragment on PeopleGroupRecord {
		id
		people {
			...PersonRecordFragment
		}
	}
`;
