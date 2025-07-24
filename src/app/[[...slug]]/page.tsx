import type { PageQuery, PageQueryVariables } from 'graphql/generated';
import { PAGE_QUERY } from 'graphql/queries/models/page';
import { notFound } from 'next/navigation';

import { performRequest } from '@/lib/datocms';
import type { Block } from '@/lib/datocms/blocks';
import Blocks from '@/lib/datocms/blocks';

const Page = async ({ params }: { params: { slug?: string[] } }) => {
	const { slug: paramsSlug } = await params;

	const slug = paramsSlug ? paramsSlug.join('/') : 'home';

	const data = await performRequest<PageQuery, PageQueryVariables>(
		PAGE_QUERY,
		{
			slug,
		}
	);
	const { page } = data;

	if (!page) return notFound();

	return <Blocks blocks={page.body as unknown as Block[]} />;
};

export default Page;
