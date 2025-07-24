type BetterLinkType = 'record' | 'asset' | 'url' | 'tel' | 'email';

type BetterLinkRecord = {
	id: string;
	title: string;
	cms_url: string;
	slug: string;
	status: string;
	url: string;
};

type BetterLinkFormatted = {
	isValid: boolean;
	type: BetterLinkType;
	text: string;
	ariaLabel: string;
	url: string;
	target: '_self' | '_blank';
	class: string | null;
};

export type BetterLinkField = {
	linkType: {
		label: string;
		value: BetterLinkType;
	};
	record?: BetterLinkRecord;
	asset?: Record<string, unknown>;
	url?: Record<string, unknown>;
	tel?: Record<string, unknown>;
	email?: Record<string, unknown>;
	formatted: BetterLinkFormatted;
	open_in_new_window: boolean;
	isValid: boolean;
};
