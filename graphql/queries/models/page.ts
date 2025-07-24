import { gql } from 'graphql-request';

import { ACCREDITATION_BAR_FRAGMENT } from '../components/accreditationbar';
import { BUTTON_FRAGMENT } from '../components/button';
import { CARD_FRAGMENT } from '../components/card';
import { CASE_STUDY_LISTING_FRAGMENT } from '../components/casestudylisting';
import { CTA_SEPARATOR_FRAGMENT } from '../components/ctaseparator';
import { GRID_FRAGMENT } from '../components/grid';
import { HERO_FRAGMENT } from '../components/hero';
import { ICON_GRID_FRAGMENT } from '../components/icongrid';
import { ICON_PANEL_FRAGMENT } from '../components/iconpanel';
import { LOGO_CLOUD_FRAGMENT } from '../components/logocloud';
import { PEOPLE_GROUP_FRAGMENT } from '../components/peoplegroup';
import { PEOPLE_LISTING_FRAGMENT } from '../components/peoplelisting';
import { PERSON_FRAGMENT } from '../components/person';
import { POST_CAROUSEL_FRAGMENT } from '../components/postcarousel';
import { QUOTE_FRAGMENT } from '../components/quote';
import { SCREEN_BREAKER_FRAGMENT } from '../components/screenbreaker';
import { TEXT_GRID_FRAGMENT } from '../components/textgrid';
import { TEXTMEDIA_FEATURED_FRAGMENT } from '../components/textmediafeatured';
import { TEXTMEDIA_SECTION_FRAGMENT } from '../components/textmediasection';
import { VIDEO_FRAGMENT } from '../components/video';
import { META_TAGS_FRAGMENT } from '../fields/metatags';
import { RESPONSIVE_IMAGE_FRAGMENT } from '../fields/responsiveimage';
import { AUTHOR_FRAGMENT } from './author';
import { CASE_STUDY_FRAGMENT } from './casestudy';
import { CATEGORY_FRAGMENT } from './category';
import { POST_FRAGMENT } from './post';

export const PAGE_QUERY = gql`
	${RESPONSIVE_IMAGE_FRAGMENT}
	${META_TAGS_FRAGMENT}

	${BUTTON_FRAGMENT}
	${GRID_FRAGMENT}
	${CARD_FRAGMENT}
	${ICON_PANEL_FRAGMENT}
	${PEOPLE_GROUP_FRAGMENT}
	${PERSON_FRAGMENT}
	${POST_FRAGMENT}
	${AUTHOR_FRAGMENT}
	${CATEGORY_FRAGMENT}
	${CASE_STUDY_FRAGMENT}

	${HERO_FRAGMENT}
	${TEXT_GRID_FRAGMENT}
	${QUOTE_FRAGMENT}
	${SCREEN_BREAKER_FRAGMENT}
	${VIDEO_FRAGMENT}
	${TEXTMEDIA_FEATURED_FRAGMENT}
	${TEXTMEDIA_SECTION_FRAGMENT}
	${ICON_GRID_FRAGMENT}
	${LOGO_CLOUD_FRAGMENT}
	${ACCREDITATION_BAR_FRAGMENT}
	${PEOPLE_LISTING_FRAGMENT}
	${POST_CAROUSEL_FRAGMENT}
	${CASE_STUDY_LISTING_FRAGMENT}
	${CTA_SEPARATOR_FRAGMENT}

	query Page($slug: String) {
		site: _site {
			favicon: faviconMetaTags {
				...metaTagsFragment
			}
		}
		page(filter: { slug: { eq: $slug } }) {
			id
			heading
			description
			parentPage {
				slug
			}
			slug
			body {
				__typename
				... on HeroRecord {
					...HeroRecordFragment
				}
				... on TextGridRecord {
					...TextGridRecordFragment
				}
				... on QuoteRecord {
					...QuoteRecordFragment
				}
				... on ScreenBreakerRecord {
					...ScreenBreakerRecordFragment
				}
				... on VideoRecord {
					...VideoRecordFragment
				}
				... on TextmediaFeaturedRecord {
					...TextmediaFeaturedRecordFragment
				}
				... on TextmediaSectionRecord {
					...TextmediaSectionRecordFragment
				}
				... on IconGridRecord {
					...IconGridRecordFragment
				}
				... on LogoCloudRecord {
					...LogoCloudRecordFragment
				}
				... on AccreditationBarRecord {
					...AccreditationBarRecordFragment
				}
				... on PeopleListingRecord {
					...PeopleListingRecordFragment
				}
				... on PostCarouselRecord {
					...PostCarouselRecordFragment
				}
				... on CaseStudyListingRecord {
					...CaseStudyListingRecordFragment
				}
				... on CtaSeparatorRecord {
					...CtaSeparatorRecordFragment
				}
			}
			seo: _seoMetaTags {
				...metaTagsFragment
			}
		}
	}
`;
