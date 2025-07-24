import type { HeroRecord } from 'graphql/generated';

import Hero from '@/ui/sections/Hero';

export type Block = HeroRecord;

export default function Blocks({ blocks }: { blocks: Block[] }) {
	return (
		<>
			{blocks.map(block => {
				// eslint-disable-next-line no-underscore-dangle
				switch (block.__typename) {
					case 'HeroRecord':
						return <Hero key={block.id} {...block} />;
					default:
						return null;
				}
			})}
		</>
	);
}
