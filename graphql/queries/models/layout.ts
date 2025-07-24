import { gql } from 'graphql-request';

export const LAYOUT_QUERY = gql`
	query Layout {
		layout {
			id
			announcementBanner
			announcementBannerButton
			navigation {
				... on MenuItemRecord {
					id
					heading
					target {
						id
						slug
					}
				}
				... on MenuDropdownRecord {
					id
					heading
					groups {
						id
						heading {
							id
							heading
						}
						description
						useDescription
						items {
							id
							heading
							target {
								id
								slug
							}
						}
						icon {
							url
						}
					}
				}
			}
		}
	}
`;
