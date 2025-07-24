import { gql } from 'graphql-request';

export const ACCREDITATION_BAR_FRAGMENT = gql`
	fragment AccreditationBarRecordFragment on AccreditationBarRecord {
		id
		logos {
			responsiveImage {
				...responsiveImageFragment
			}
		}
	}
`;
