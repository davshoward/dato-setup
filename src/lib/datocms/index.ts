import { executeQuery } from '@datocms/cda-client';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { RequestDocument, Variables } from 'graphql-request';
import { cache } from 'react';

const dedupedExecuteQuery = cache(async ([query, variables]: [string, any]) => {
	return executeQuery(query, {
		token: process.env.NEXT_DATOCMS_API_TOKEN!,
		includeDrafts: process.env.NEXT_DATOCMS_ENVIRONMENT === 'draft',
		excludeInvalid: true,
		variables,
	});
});

export function performRequest<TDocument = any>(
	query: RequestDocument | TypedDocumentNode<TDocument, Variables>,
	variables?: Variables
) {
	return dedupedExecuteQuery([query, variables || {}]) as Promise<T>;
}
