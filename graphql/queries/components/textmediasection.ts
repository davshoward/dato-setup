import { gql } from 'graphql-request';

export const TEXTMEDIA_SECTION_FRAGMENT = gql`
	fragment TextmediaSectionRecordFragment on TextmediaSectionRecord {
		id
		heading
		eyebrow
		textMediaSectionContent: content {
			blocks
			inlineBlocks
			links
			value
		}
		pattern
		theme
	}
`;
