import { gql } from 'graphql-request';

export const PERSON_FRAGMENT = gql`
	fragment PersonRecordFragment on PersonRecord {
		id
		name
		role
		bio
		photo {
			responsiveImage {
				...responsiveImageFragment
			}
		}
	}
`;
