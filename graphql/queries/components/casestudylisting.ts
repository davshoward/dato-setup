import { gql } from 'graphql-request';

export const CASE_STUDY_LISTING_FRAGMENT = gql`
	fragment CaseStudyListingRecordFragment on CaseStudyListingRecord {
		id
		heading
		eyebrow
		content
		pattern
		theme
		selectCaseStudies
		selectedCaseStudies {
			...CaseStudyRecordFragment
		}
	}
`;
