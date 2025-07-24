import type { HeroRecord } from 'graphql/generated';
import React from 'react';

import { getLinkUrl } from '@/lib/datocms/helpers';
import type { BetterLinkField } from '@/lib/datocms/types';
import type { ComponentThemes } from '@/types/components';

import H from '../atoms/typography/H';
import ButtonGroup from '../components/ButtonGroup';
import type { ButtonVariants } from '../elements/Button';
import Button from '../elements/Button';
import Container from '../layout/Container';
import PageSection from '../layout/PageSection';

const Hero = (block: HeroRecord) => {
	const { heading, content } = block;

	return (
		<div className="flex min-h-52 flex-col justify-center gap-4 py-12 md:min-h-80 md:gap-6 lg:gap-8">
			<div className="max-w-4xl">
				<h1>
					{heading}
				</h1>
			</div>

			{content && (
				<div className="max-w-3xl">
					<p>
						{content}
					</p>
				</div>
			)}
		</div>
	);
};

export default Hero;
