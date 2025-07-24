import { gql } from 'graphql-request';

export const CASE_STUDY_FRAGMENT = gql`
	fragment CaseStudyRecordFragment on CaseStudyRecord {
		id
		heading
		slug
		description
		body
		category {
			...CategoryRecordFragment
		}
	}
`;
