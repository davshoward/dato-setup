import '@/styles/globals.css';

import type { LayoutQuery, LayoutQueryVariables } from 'graphql/generated';
import { LAYOUT_QUERY } from 'graphql/queries/models/layout';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { siteConfig } from '@/lib/config';
import { performRequest } from '@/lib/datocms';
import Layout from '@/ui/layout/Layout';

export default async function RootLayout({ children }: PropsWithChildren) {
	const global = await performRequest<LayoutQuery, LayoutQueryVariables>(
		LAYOUT_QUERY
	);

	return <Layout global={global}>{children}</Layout>;
}
