import { gql } from 'graphql-request';

export const VIDEO_FRAGMENT = gql`
	fragment VideoRecordFragment on VideoRecord {
		id
		heading
		eyebrow
		content
		pattern
		theme
		videoEmbed {
			url
			provider
			thumbnailUrl
			title
		}
		actions {
			...ButtonRecordFragment
		}
	}
`;
