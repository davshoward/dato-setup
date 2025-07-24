import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename'
				? T[P]
				: never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	BooleanType: { input: boolean; output: boolean };
	CustomData: {
		input: Record<string, unknown>;
		output: Record<string, unknown>;
	};
	DateTime: { input: string; output: string };
	FloatType: { input: number; output: number };
	IntType: { input: number; output: number };
	ItemId: { input: string; output: string };
	JsonField: { input: unknown; output: unknown };
	MetaTagAttributes: {
		input: Record<string, string>;
		output: Record<string, string>;
	};
	UploadId: { input: string; output: string };
};

/** Block of type Accreditation Bar (accreditation_bar) */
export type AccreditationBarRecord = RecordInterface & {
	__typename?: 'AccreditationBarRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	logos: Array<AltFileField>;
};

/** Block of type Accreditation Bar (accreditation_bar) */
export type AccreditationBarRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileField = FileFieldInterface & {
	__typename?: 'AltFileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt: Scalars['String']['output'];
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type AltFileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type AltFileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type AltFileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type AuthorModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	id?: InputMaybe<ItemIdFilter>;
	name?: InputMaybe<StringFilter>;
	photo?: InputMaybe<FileFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum AuthorModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
}

/** Record of type ✍️ Author (author) */
export type AuthorRecord = RecordInterface & {
	__typename?: 'AuthorRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	name?: Maybe<Scalars['String']['output']>;
	photo: ImageFileField;
	slug: Scalars['String']['output'];
};

/** Record of type ✍️ Author (author) */
export type AuthorRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Button (button) */
export type ButtonRecord = RecordInterface & {
	__typename?: 'ButtonRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	link: Scalars['JsonField']['output'];
	text: Scalars['String']['output'];
	variant: Scalars['String']['output'];
};

/** Block of type Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Card (card) */
export type CardRecord = RecordInterface & {
	__typename?: 'CardRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	image: ImageAltFileField;
	link?: Maybe<Scalars['JsonField']['output']>;
};

/** Block of type Card (card) */
export type CardRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Card (card) */
export type CardRecordDescriptionArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Case Study Listing (case_study_listing) */
export type CaseStudyListingRecord = RecordInterface & {
	__typename?: 'CaseStudyListingRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
	selectCaseStudies: Scalars['BooleanType']['output'];
	selectedCaseStudies: Array<CaseStudyRecord>;
	theme: Scalars['String']['output'];
};

/** Block of type Case Study Listing (case_study_listing) */
export type CaseStudyListingRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Case Study Listing (case_study_listing) */
export type CaseStudyListingRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaseStudyModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<CaseStudyModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	category?: InputMaybe<LinkFilter>;
	description?: InputMaybe<TextFilter>;
	heading?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum CaseStudyModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	HeadingAsc = 'heading_ASC',
	HeadingDesc = 'heading_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Record of type 📄 Case study (case_study) */
export type CaseStudyRecord = RecordInterface & {
	__typename?: 'CaseStudyRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	body: Array<Scalars['String']['output']>;
	category: CategoryRecord;
	description?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	seo?: Maybe<SeoField>;
	slug: Scalars['String']['output'];
};

/** Record of type 📄 Case study (case_study) */
export type CaseStudyRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📄 Case study (case_study) */
export type CaseStudyRecordDescriptionArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	heading?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum CategoryModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	HeadingAsc = 'heading_ASC',
	HeadingDesc = 'heading_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Record of type 🏷️ Category (category) */
export type CategoryRecord = RecordInterface & {
	__typename?: 'CategoryRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	slug: Scalars['String']['output'];
};

/** Record of type 🏷️ Category (category) */
export type CategoryRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
	__typename?: 'CollectionMetadata';
	count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
	Black = 'black',
	Blue = 'blue',
	Brown = 'brown',
	Cyan = 'cyan',
	Green = 'green',
	Grey = 'grey',
	Orange = 'orange',
	Pink = 'pink',
	Purple = 'purple',
	Red = 'red',
	White = 'white',
	Yellow = 'yellow',
}

export type ColorField = {
	__typename?: 'ColorField';
	alpha: Scalars['IntType']['output'];
	blue: Scalars['IntType']['output'];
	cssRgb: Scalars['String']['output'];
	green: Scalars['IntType']['output'];
	hex: Scalars['String']['output'];
	red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type CTA Separator (cta_separator) */
export type CtaSeparatorRecord = RecordInterface & {
	__typename?: 'CtaSeparatorRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	button: ButtonRecord;
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
	theme: Scalars['String']['output'];
};

/** Block of type CTA Separator (cta_separator) */
export type CtaSeparatorRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
	AppleTouchIcon = 'appleTouchIcon',
	Icon = 'icon',
	MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
	__typename?: 'FileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type FileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type FileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type FileFieldInterfaceAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type FileFieldInterfaceCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldInterfaceTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
	/** Search for records with an exact match. The specified value must be an Upload ID */
	eq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records that have one of the specified uploads */
	in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
	/** Exclude records with an exact match. The specified value must be an Upload ID */
	neq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Filter records that do not have one of the specified uploads */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

export type GlobalSeoField = {
	__typename?: 'GlobalSeoField';
	facebookPageUrl?: Maybe<Scalars['String']['output']>;
	fallbackSeo?: Maybe<SeoField>;
	siteName?: Maybe<Scalars['String']['output']>;
	titleSuffix?: Maybe<Scalars['String']['output']>;
	twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Block of type Grid (grid) */
export type GridRecord = RecordInterface & {
	__typename?: 'GridRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	items: Array<CardRecord>;
};

/** Block of type Grid (grid) */
export type GridRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Hero (hero) */
export type HeroRecord = RecordInterface & {
	__typename?: 'HeroRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	actions: Array<ButtonRecord>;
	backgroundVideo?: Maybe<VideoAltFileField>;
	content: Scalars['String']['output'];
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	image?: Maybe<ImageAltFileField>;
	layout: Scalars['String']['output'];
	theme: Scalars['String']['output'];
	useBackgroundVideo: Scalars['BooleanType']['output'];
};

/** Block of type Hero (hero) */
export type HeroRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Hero (hero) */
export type HeroRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Icon Grid (icon_grid) */
export type IconGridRecord = RecordInterface & {
	__typename?: 'IconGridRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	endContent?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	icons: Array<IconPanelRecord>;
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
};

/** Block of type Icon Grid (icon_grid) */
export type IconGridRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Icon Grid (icon_grid) */
export type IconGridRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Icon Grid (icon_grid) */
export type IconGridRecordEndContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Icon Panel (icon_panel) */
export type IconPanelRecord = RecordInterface & {
	__typename?: 'IconPanelRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	heading: Scalars['String']['output'];
	icon: AltFileField;
	id: Scalars['ItemId']['output'];
};

/** Block of type Icon Panel (icon_panel) */
export type IconPanelRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type ImageAltFileField = FileFieldInterface & {
	__typename?: 'ImageAltFileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt: Scalars['String']['output'];
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint: FocalPoint;
	format: Scalars['String']['output'];
	height: Scalars['IntType']['output'];
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage: ResponsiveImage;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width: Scalars['IntType']['output'];
};

export type ImageAltFileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageAltFileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type ImageAltFileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageAltFileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageAltFileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type ImageAltFileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageAltFileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type ImageFileField = FileFieldInterface & {
	__typename?: 'ImageFileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint: FocalPoint;
	format: Scalars['String']['output'];
	height: Scalars['IntType']['output'];
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage: ResponsiveImage;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width: Scalars['IntType']['output'];
};

export type ImageFileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type ImageFileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type ImageFileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type ImgixParams = {
	/**
	 * Aspect Ratio
	 *
	 * Specifies an aspect ratio to maintain when resizing and cropping the image
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
	 */
	ar?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Automatic
	 *
	 * Applies automatic enhancements to images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
	 */
	auto?: InputMaybe<Array<ImgixParamsAuto>>;
	/**
	 * Background Color
	 *
	 * Colors the background of padded and partially-transparent images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
	 */
	bg?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Background Removal
	 *
	 * Removes background from image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
	 */
	bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Removal Fallback
	 *
	 * Overrides default fallback behavior for bg-remove failures.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
	 */
	bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Removal Foreground Type
	 *
	 * Specifies the image foreground type for background removal.
	 *
	 * Depends on: `bg-remove=true`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
	 */
	bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
	/**
	 * Background Removal Semi Transparency
	 *
	 * Enables background removal while retaining semi-transparent areas.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
	 */
	bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Replacement
	 *
	 * Replaces background from image using a string based prompt.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
	 */
	bgReplace?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Background Replace Fallback
	 *
	 * Overrides default fallback behavior for bg-replace failures.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
	 */
	bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Replacement Negative Prompt
	 *
	 * Provides a negative text suggestion for background replacement.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
	 */
	bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend
	 *
	 * Specifies the location of the blend image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
	 */
	blend?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend Align
	 *
	 * Changes the blend alignment relative to the parent image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
	 */
	blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
	/**
	 * Blend Alpha
	 *
	 * Changes the alpha of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
	 */
	blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Color
	 *
	 * Specifies a color to use when applying the blend.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
	 */
	blendColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend Crop
	 *
	 * Specifies the type of crop for blend images.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
	 */
	blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
	/**
	 * Blend Fit
	 *
	 * Specifies the fit mode for blend images.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
	 */
	blendFit?: InputMaybe<ImgixParamsBlendFit>;
	/**
	 * Blend Height
	 *
	 * Adjusts the height of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
	 */
	blendH?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Blend Mode
	 *
	 * Sets the blend mode for a blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
	 */
	blendMode?: InputMaybe<ImgixParamsBlendMode>;
	/**
	 * Blend Padding
	 *
	 * Applies padding to the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
	 */
	blendPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Size
	 *
	 * Adjusts the size of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
	 */
	blendSize?: InputMaybe<ImgixParamsBlendSize>;
	/**
	 * Blend Width
	 *
	 * Adjusts the width of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
	 */
	blendW?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Blend X Position
	 *
	 * Adjusts the x-offset of the blend image relative to its parent.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
	 */
	blendX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Y Position
	 *
	 * Adjusts the y-offset of the blend image relative to its parent.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
	 */
	blendY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Gaussian Blur
	 *
	 * Applies a gaussian blur to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
	 */
	blur?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Size & Color
	 *
	 * Applies a border to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
	 */
	border?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Border Bottom
	 *
	 * Sets bottom border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
	 */
	borderBottom?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Left
	 *
	 * Sets left border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
	 */
	borderLeft?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Outer Border Radius
	 *
	 * Sets the outer radius of the image's border in pixels.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
	 */
	borderRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Inner Border Radius
	 *
	 * Sets the inner radius of the image's border in pixels.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
	 */
	borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Border Right
	 *
	 * Sets right border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
	 */
	borderRight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Top
	 *
	 * Sets top border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
	 */
	borderTop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Brightness
	 *
	 * Adjusts the brightness of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
	 */
	bri?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Client Hints
	 *
	 * Sets one or more Client-Hints headers
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
	 */
	ch?: InputMaybe<Array<ImgixParamsCh>>;
	/**
	 * Chroma Subsampling
	 *
	 * Specifies the output chroma subsampling rate.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
	 */
	chromasub?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Color Quantization
	 *
	 * Limits the number of unique colors in an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
	 */
	colorquant?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Palette Color Count
	 *
	 * Specifies how many colors to include in a palette-extraction response.
	 *
	 * Depends on: `palette`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
	 */
	colors?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Contrast
	 *
	 * Adjusts the contrast of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
	 */
	con?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Mask Corner Radius
	 *
	 * Specifies the radius value for a rounded corner mask.
	 *
	 * Depends on: `mask=corners`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
	 */
	cornerRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Crop Mode
	 *
	 * Specifies how to crop an image.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
	 */
	crop?: InputMaybe<Array<ImgixParamsCrop>>;
	/**
	 * Color Space
	 *
	 * Specifies the color space of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
	 */
	cs?: InputMaybe<ImgixParamsCs>;
	/**
	 * Download
	 *
	 * Forces a URL to use send-file in its response.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
	 */
	dl?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Dots Per Inch
	 *
	 * Sets the DPI value in the EXIF header.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
	 */
	dpi?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Device Pixel Ratio
	 *
	 * Adjusts the device-pixel ratio of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
	 */
	dpr?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Duotone
	 *
	 * Applies a duotone effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
	 */
	duotone?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Duotone Alpha
	 *
	 * Changes the alpha of the duotone effect atop the source image.
	 *
	 * Depends on: `duotone`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
	 */
	duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Exposure
	 *
	 * Adjusts the exposure of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
	 */
	exp?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Url Expiration Timestamp
	 *
	 * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
	 */
	expires?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Blur
	 *
	 * Specifies the amount of blur to apply to detected faces. Defaults to 0.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
	 */
	faceBlur?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Pixelation
	 *
	 * Specifies the pixelation amount of the face.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
	 */
	facePixel?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Index
	 *
	 * Selects a face to crop to.
	 *
	 * Depends on: `fit=facearea`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
	 */
	faceindex?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Padding
	 *
	 * Adjusts padding around a selected face.
	 *
	 * Depends on: `fit=facearea`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
	 */
	facepad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Json Face Data
	 *
	 * Specifies that face data should be included in output when combined with `fm=json`.
	 *
	 * Depends on: `fm=json`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
	 */
	faces?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Fill Mode
	 *
	 * Determines how to fill in additional space created by the fit setting
	 *
	 * Depends on: `fit`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
	 */
	fill?: InputMaybe<ImgixParamsFill>;
	/**
	 * Fill Color
	 *
	 * Sets the fill color for images with additional space created by the fit setting
	 *
	 * Depends on: `fill=solid`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
	 */
	fillColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Fallback
	 *
	 * Sets the fallback behavior for generative fill.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
	 */
	fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Fill Generative Negative Prompt
	 *
	 * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
	 */
	fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Position
	 *
	 * Sets the position of the Origin Image in relation to the generative fill.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
	 */
	fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
	/**
	 * Fill Generative Prompt
	 *
	 * Provides a text suggestion to the generative fill parameter.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
	 */
	fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Seed
	 *
	 * Sets the generative seed value. Used to generate similar outputs from different prompts.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
	 */
	fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Fill Gradient Color Space
	 *
	 * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
	 */
	fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
	/**
	 * Fill Gradient Linear
	 *
	 * Blends a gradient between two colors, {color1} and {color2}, along a straight path
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
	 */
	fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Linear Direction
	 *
	 * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
	 */
	fillGradientLinearDirection?: InputMaybe<
		Array<ImgixParamsFillGradientLinearDirection>
	>;
	/**
	 * Fill Gradient Radial
	 *
	 * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
	 */
	fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Radial Radius
	 *
	 * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
	 */
	fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Radial X
	 *
	 * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
	 */
	fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Fill Gradient Radial Y
	 *
	 * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
	 */
	fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Fill Gradient Type
	 *
	 * Specifies if a gradient is radial (circular) or linear (straight)
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
	 */
	fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
	/**
	 * Resize Fit Mode
	 *
	 * Specifies how to map the source image to the output image dimensions.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
	 */
	fit?: InputMaybe<ImgixParamsFit>;
	/**
	 * Flip Axis
	 *
	 * Flips an image on a specified axis.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
	 */
	flip?: InputMaybe<ImgixParamsFlip>;
	/**
	 * Output Format
	 *
	 * Changes the format of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
	 */
	fm?: InputMaybe<ImgixParamsFm>;
	/**
	 * Focal Point Debug
	 *
	 * Displays crosshairs identifying the location of the set focal point
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
	 */
	fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Focal Point X Position
	 *
	 * Sets the relative horizontal value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
	 */
	fpX?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Focal Point Y Position
	 *
	 * Sets the relative vertical value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
	 */
	fpY?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Focal Point Zoom
	 *
	 * Sets the relative zoom value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
	 */
	fpZ?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Frames Per Second
	 *
	 * Specifies the framerate of the generated image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
	 */
	fps?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Frame Selection
	 *
	 * Specifies the frame of an animated image to use.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
	 */
	frame?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Gamma
	 *
	 * Adjusts the gamma of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
	 */
	gam?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Animated Gif Quality
	 *
	 * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
	 *
	 * Depends on: `fm=gif`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
	 */
	gifQ?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Grid Colors
	 *
	 * Sets grid colors for the transparency checkerboard grid.
	 *
	 * Depends on: `transparency`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
	 */
	gridColors?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Grid Size
	 *
	 * Sets grid size for the transparency checkerboard grid.
	 *
	 * Depends on: `transparency`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
	 */
	gridSize?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Image Height
	 *
	 * Adjusts the height of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
	 */
	h?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Highlight
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
	 */
	high?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Halftone
	 *
	 * Applies a half-tone effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
	 */
	htn?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Hue Shift
	 *
	 * Adjusts the hue of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
	 */
	hue?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Frame Interval
	 *
	 * Displays every Nth frame starting with the first frame.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
	 */
	interval?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Invert
	 *
	 * Inverts the colors on the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
	 */
	invert?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Iptc Passthrough
	 *
	 * Determine if IPTC data should be passed for JPEG images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
	 */
	iptc?: InputMaybe<ImgixParamsIptc>;
	/**
	 * Jpg Progressive
	 *
	 * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
	 */
	jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Animation Loop Count
	 *
	 * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
	 */
	loop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Lossless Compression
	 *
	 * Specifies that the output image should be a lossless variant.
	 *
	 * Depends on: `fm=webp`, `fm=jxr`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
	 */
	lossless?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * License Plate Blur
	 *
	 * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
	 */
	lpBlur?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Image Url
	 *
	 * Specifies the location of the watermark image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
	 */
	mark?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Watermark Alignment Mode
	 *
	 * Changes the watermark alignment relative to the parent image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
	 */
	markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
	/**
	 * Watermark Alpha
	 *
	 * Changes the alpha of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
	 */
	markAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Base Url
	 *
	 * Changes base URL of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
	 */
	markBase?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Watermark Fit Mode
	 *
	 * Specifies the fit mode for watermark images.
	 *
	 * Depends on: `mark`, `markw`, `markh`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
	 */
	markFit?: InputMaybe<ImgixParamsMarkFit>;
	/**
	 * Watermark Height
	 *
	 * Adjusts the height of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
	 */
	markH?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark If Minimum Height
	 *
	 * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
	 */
	markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark If Minimum Width
	 *
	 * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
	 */
	markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Padding
	 *
	 * Applies padding to the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
	 */
	markPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Rotation
	 *
	 * Rotates a watermark or tiled watermarks by a specified number of degrees.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
	 */
	markRot?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark Scale
	 *
	 * Adjusts the scale of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
	 */
	markScale?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Tile
	 *
	 * Adds tiled watermark.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
	 */
	markTile?: InputMaybe<ImgixParamsMarkTile>;
	/**
	 * Watermark Width
	 *
	 * Adjusts the width of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
	 */
	markW?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark X Position
	 *
	 * Adjusts the x-offset of the watermark image relative to its parent.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
	 */
	markX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Y Position
	 *
	 * Adjusts the y-offset of the watermark image relative to its parent.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
	 */
	markY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Mask Type
	 *
	 * Defines the type of mask and specifies the URL if that type is selected.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
	 */
	mask?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Mask Background Color
	 *
	 * Colors the background of the transparent mask area of images
	 *
	 * Depends on: `mask`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
	 */
	maskBg?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Maximum Height
	 *
	 * Specifies the maximum height of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
	 */
	maxH?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Maximum Width
	 *
	 * Specifies the maximum width of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
	 */
	maxW?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Minimum Height
	 *
	 * Specifies the minimum height of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
	 */
	minH?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Minimum Width
	 *
	 * Specifies the minimum width of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
	 */
	minW?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Monochrome
	 *
	 * Applies a monochrome effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
	 */
	monochrome?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Noise Reduction Bound
	 *
	 * Reduces the noise in an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
	 */
	nr?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Noise Reduction Sharpen
	 *
	 * Provides a threshold by which to sharpen an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
	 */
	nrs?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Object Removal Negative Prompt
	 *
	 * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
	 *
	 * Depends on: `object-removal-rect`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
	 */
	objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Object Removal Prompt
	 *
	 * Suggest auto generative fill for the object-removal-rect parameter
	 *
	 * Depends on: `object-removal-rect`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
	 */
	objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Object Removal
	 *
	 * Using a specified rectangle, an object is removed from the image
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
	 */
	objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Object Removal Seed
	 *
	 * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
	 *
	 * Depends on: `object-removal-rect`, `object-removal-prompt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
	 */
	objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Orientation
	 *
	 * Changes the image orientation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
	 */
	orient?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding
	 *
	 * Pads an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
	 */
	pad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Bottom
	 *
	 * Sets bottom padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
	 */
	padBottom?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Left
	 *
	 * Sets left padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
	 */
	padLeft?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Right
	 *
	 * Sets right padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
	 */
	padRight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Top
	 *
	 * Sets top padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
	 */
	padTop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Pdf Page Number
	 *
	 * Selects a page from a PDF for display.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
	 */
	page?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Color Palette Extraction
	 *
	 * Specifies an output format for palette-extraction.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
	 */
	palette?: InputMaybe<ImgixParamsPalette>;
	/**
	 * Pdf Annotation
	 *
	 * Enables or disables PDF annotation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
	 */
	pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Css Prefix
	 *
	 * Specifies a CSS prefix for all classes in palette-extraction.
	 *
	 * Depends on: `palette=css`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
	 */
	prefix?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Pixellate
	 *
	 * Applies a pixelation effect to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
	 */
	px?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Output Quality
	 *
	 * Adjusts the quality of an output image.
	 *
	 * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
	 */
	q?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Rasterize Bypass
	 *
	 * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
	 */
	rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Source Rectangle Region
	 *
	 * Crops an image to a specified rectangle.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
	 */
	rect?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Reverse
	 *
	 * Reverses the frame order on the source animation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
	 */
	reverse?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Rotation
	 *
	 * Rotates an image by a specified number of degrees.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
	 */
	rot?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Rotation Type
	 *
	 * Changes the rotation type.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
	 */
	rotType?: InputMaybe<ImgixParamsRotType>;
	/**
	 * Saturation
	 *
	 * Adjusts the saturation of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
	 */
	sat?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Sepia Tone
	 *
	 * Applies a sepia effect to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
	 */
	sepia?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Shadow
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
	 */
	shad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Sharpen
	 *
	 * Adjusts the sharpness of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
	 */
	sharp?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Frame Skip
	 *
	 * Skips every Nth frame starting with the first frame.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
	 */
	skip?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
	 *
	 * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
	 */
	skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Sanitize Svg
	 *
	 * Specifies whether to sanitize an SVG.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
	 */
	svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Transparency
	 *
	 * Adds checkerboard behind images which support transparency.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
	 */
	transparency?: InputMaybe<ImgixParamsTransparency>;
	/**
	 * Trim Image
	 *
	 * Trims the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
	 */
	trim?: InputMaybe<ImgixParamsTrim>;
	/**
	 * Trim Alpha
	 *
	 * Specifies a trim alpha on a trim operation.
	 *
	 * Depends on: `trim=alpha`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
	 */
	trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Color
	 *
	 * Specifies a trim color on a trim operation.
	 *
	 * Depends on: `trim=color`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
	 */
	trimColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Trim Mean Difference
	 *
	 * Specifies the mean difference on a trim operation.
	 *
	 * Depends on: `trim=auto`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
	 */
	trimMd?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Padding
	 *
	 * Pads the area of the source image before trimming.
	 *
	 * Depends on: `trim`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
	 */
	trimPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Trim Standard Deviation
	 *
	 * Specifies the standard deviation on a trim operation.
	 *
	 * Depends on: `trim=auto`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
	 */
	trimSd?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Tolerance
	 *
	 * Specifies the tolerance on a trim operation.
	 *
	 * Depends on: `trim=color`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
	 */
	trimTol?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Text String
	 *
	 * Sets the text string to render.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
	 */
	txt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Align
	 *
	 * Sets the vertical and horizontal alignment of rendered text relative to the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
	 */
	txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
	/**
	 * Text Clipping Mode
	 *
	 * Sets the clipping properties of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
	 */
	txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
	/**
	 * Text Color
	 *
	 * Specifies the color of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
	 */
	txtColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Fit Mode
	 *
	 * Specifies the fit approach for rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
	 */
	txtFit?: InputMaybe<ImgixParamsTxtFit>;
	/**
	 * Text Font
	 *
	 * Selects a font for rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
	 */
	txtFont?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Leading
	 *
	 * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
	 */
	txtLead?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Outline
	 *
	 * Outlines the rendered text with a specified color.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
	 */
	txtLine?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Outline Color
	 *
	 * Specifies a text outline color.
	 *
	 * Depends on: `txt`, `txtline`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
	 */
	txtLineColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Padding
	 *
	 * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
	 */
	txtPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Shadow
	 *
	 * Applies a shadow to rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
	 */
	txtShad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Text Font Size
	 *
	 * Sets the font size of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
	 */
	txtSize?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Tracking
	 *
	 * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
	 */
	txtTrack?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Width
	 *
	 * Sets the width of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
	 */
	txtWidth?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text X Position
	 *
	 * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
	 */
	txtX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Y Position
	 *
	 * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
	 */
	txtY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Super Resolution
	 *
	 * Uses generative AI fill to upscale low resolution images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
	 */
	upscale?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Super Resolution Fallback
	 *
	 * Overrides default fallback behavior for super resolution failures
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
	 */
	upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Unsharp Mask
	 *
	 * Sharpens the source image using an unsharp mask.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
	 */
	usm?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Unsharp Mask Radius
	 *
	 * Specifies the radius for an unsharp mask operation.
	 *
	 * Depends on: `usm`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
	 */
	usmrad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Vibrance
	 *
	 * Adjusts the vibrance of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
	 */
	vib?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Image Width
	 *
	 * Adjusts the width of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
	 */
	w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
	Compress = 'compress',
	Enhance = 'enhance',
	Format = 'format',
	Redeye = 'redeye',
}

export enum ImgixParamsBgRemoveFgType {
	Auto = 'auto',
	Car = 'car',
}

export enum ImgixParamsBlendAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsBlendCrop {
	Bottom = 'bottom',
	Faces = 'faces',
	Left = 'left',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsBlendFit {
	Clamp = 'clamp',
	Clip = 'clip',
	Crop = 'crop',
	Max = 'max',
	Scale = 'scale',
}

export enum ImgixParamsBlendMode {
	Burn = 'burn',
	Color = 'color',
	Darken = 'darken',
	Difference = 'difference',
	Dodge = 'dodge',
	Exclusion = 'exclusion',
	Hardlight = 'hardlight',
	Hue = 'hue',
	Lighten = 'lighten',
	Luminosity = 'luminosity',
	Multiply = 'multiply',
	Normal = 'normal',
	Overlay = 'overlay',
	Saturation = 'saturation',
	Screen = 'screen',
	Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
	Inherit = 'inherit',
}

export enum ImgixParamsCh {
	Dpr = 'dpr',
	SaveData = 'saveData',
	Width = 'width',
}

export enum ImgixParamsCrop {
	Bottom = 'bottom',
	Edges = 'edges',
	Entropy = 'entropy',
	Faces = 'faces',
	Focalpoint = 'focalpoint',
	Left = 'left',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsCs {
	Adobergb1998 = 'adobergb1998',
	Origin = 'origin',
	Srgb = 'srgb',
	Strip = 'strip',
	Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
	Blur = 'blur',
	Gen = 'gen',
	Generative = 'generative',
	Gradient = 'gradient',
	Solid = 'solid',
}

export enum ImgixParamsFillGenPos {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsFillGradientCs {
	Hsl = 'hsl',
	Lch = 'lch',
	Linear = 'linear',
	Oklab = 'oklab',
	Srgb = 'srgb',
}

export enum ImgixParamsFillGradientLinearDirection {
	Bottom = 'bottom',
	Left = 'left',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsFillGradientType {
	Linear = 'linear',
	Radial = 'radial',
}

export enum ImgixParamsFit {
	Clamp = 'clamp',
	Clip = 'clip',
	Crop = 'crop',
	Facearea = 'facearea',
	Fill = 'fill',
	Fillmax = 'fillmax',
	Max = 'max',
	Min = 'min',
	Scale = 'scale',
}

export enum ImgixParamsFlip {
	H = 'h',
	Hv = 'hv',
	V = 'v',
}

export enum ImgixParamsFm {
	Avif = 'avif',
	Blurhash = 'blurhash',
	Gif = 'gif',
	Jp2 = 'jp2',
	Jpg = 'jpg',
	Json = 'json',
	Jxr = 'jxr',
	Mp4 = 'mp4',
	Pjpg = 'pjpg',
	Png = 'png',
	Png8 = 'png8',
	Png32 = 'png32',
	Webm = 'webm',
	Webp = 'webp',
}

export enum ImgixParamsIptc {
	Allow = 'allow',
	Block = 'block',
}

export enum ImgixParamsMarkAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsMarkFit {
	Clip = 'clip',
	Crop = 'crop',
	Fill = 'fill',
	Max = 'max',
	Scale = 'scale',
}

export enum ImgixParamsMarkTile {
	Grid = 'grid',
}

export enum ImgixParamsPalette {
	Css = 'css',
	Json = 'json',
}

export enum ImgixParamsRotType {
	Pivot = 'pivot',
	Straighten = 'straighten',
}

export enum ImgixParamsTransparency {
	Grid = 'grid',
}

export enum ImgixParamsTrim {
	Alpha = 'alpha',
	Auto = 'auto',
	Color = 'color',
}

export enum ImgixParamsTxtAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsTxtClip {
	Ellipsis = 'ellipsis',
	End = 'end',
	Middle = 'middle',
	Start = 'start',
}

export enum ImgixParamsTxtFit {
	Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
	/** Search uploads that are currently used by some record or not */
	eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
	/** Search the record with the specified ID */
	eq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Search records with the specified IDs */
	in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Exclude the record with the specified ID */
	neq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Search records that do not have the specified IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
	Draft = 'draft',
	Published = 'published',
	Updated = 'updated',
}

export type LayoutModelNavigationField = MenuDropdownRecord | MenuItemRecord;

/** Record of type 🧩 Layout (layout) */
export type LayoutRecord = RecordInterface & {
	__typename?: 'LayoutRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	announcementBanner?: Maybe<Scalars['String']['output']>;
	announcementBannerButton?: Maybe<Scalars['JsonField']['output']>;
	id: Scalars['ItemId']['output'];
	navigation: Array<LayoutModelNavigationField>;
};

/** Record of type 🧩 Layout (layout) */
export type LayoutRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 🧩 Layout (layout) */
export type LayoutRecordAnnouncementBannerArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPageModelContentField = {
	__typename?: 'LegalPageModelContentField';
	blocks: Array<Scalars['String']['output']>;
	inlineBlocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type LegalPageModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<LegalPageModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<LegalPageModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	content?: InputMaybe<StructuredTextFilter>;
	heading?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum LegalPageModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	HeadingAsc = 'heading_ASC',
	HeadingDesc = 'heading_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecord = RecordInterface & {
	__typename?: 'LegalPageRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content: LegalPageModelContentField;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	slug: Scalars['String']['output'];
};

/** Record of type 🏛️ Legal Page (legal_page) */
export type LegalPageRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
	/** Search for records with an exact match. The specified value must be a Record ID */
	eq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records linked to one of the specified records */
	in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Exclude records with an exact match. The specified value must be a Record ID */
	neq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Filter records not linked to one of the specified records */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Block of type Logo Cloud (logo_cloud) */
export type LogoCloudRecord = RecordInterface & {
	__typename?: 'LogoCloudRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	logos: Array<AltFileField>;
	theme: Scalars['String']['output'];
};

/** Block of type Logo Cloud (logo_cloud) */
export type LogoCloudRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Logo Cloud (logo_cloud) */
export type LogoCloudRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 🔁 Menu Dropdown Group (menu_dropdown_group) */
export type MenuDropdownGroupRecord = RecordInterface & {
	__typename?: 'MenuDropdownGroupRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	heading: PageRecord;
	icon: FileField;
	id: Scalars['ItemId']['output'];
	items: Array<MenuItemRecord>;
	useDescription: Scalars['BooleanType']['output'];
};

/** Block of type 🔁 Menu Dropdown Group (menu_dropdown_group) */
export type MenuDropdownGroupRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔁 Menu Dropdown Group (menu_dropdown_group) */
export type MenuDropdownGroupRecordDescriptionArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type ⬇️ Menu Dropdown (menu_dropdown) */
export type MenuDropdownRecord = RecordInterface & {
	__typename?: 'MenuDropdownRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	groups: Array<MenuDropdownGroupRecord>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
};

/** Block of type ⬇️ Menu Dropdown (menu_dropdown) */
export type MenuDropdownRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type ➡️ Menu Item (menu_item) */
export type MenuItemRecord = RecordInterface & {
	__typename?: 'MenuItemRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	target: PageRecord;
};

/** Block of type ➡️ Menu Item (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
	Gif = 'gif',
	Jpg = 'jpg',
	Png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
	/** Search uploads with the specified orientation */
	eq?: InputMaybe<UploadOrientation>;
	/** Exclude uploads with the specified orientation */
	neq?: InputMaybe<UploadOrientation>;
};

export type PageModelBodyField =
	| AccreditationBarRecord
	| CaseStudyListingRecord
	| CtaSeparatorRecord
	| HeroRecord
	| IconGridRecord
	| LogoCloudRecord
	| PeopleListingRecord
	| PostCarouselRecord
	| QuoteRecord
	| ScreenBreakerRecord
	| TextGridRecord
	| TextmediaFeaturedRecord
	| TextmediaSectionRecord
	| VideoRecord;

export type PageModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	description?: InputMaybe<TextFilter>;
	heading?: InputMaybe<StringFilter>;
	hideFromSearch?: InputMaybe<BooleanFilter>;
	id?: InputMaybe<ItemIdFilter>;
	parentPage?: InputMaybe<LinkFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum PageModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	HeadingAsc = 'heading_ASC',
	HeadingDesc = 'heading_DESC',
	HideFromSearchAsc = 'hideFromSearch_ASC',
	HideFromSearchDesc = 'hideFromSearch_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Record of type 📄 Page (page) */
export type PageRecord = RecordInterface & {
	__typename?: 'PageRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	body: Array<PageModelBodyField>;
	description?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	hideFromSearch: Scalars['BooleanType']['output'];
	id: Scalars['ItemId']['output'];
	parentPage?: Maybe<PageRecord>;
	seo?: Maybe<SeoField>;
	slug: Scalars['String']['output'];
};

/** Record of type 📄 Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📄 Page (page) */
export type PageRecordDescriptionArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type People Group (people_group) */
export type PeopleGroupRecord = RecordInterface & {
	__typename?: 'PeopleGroupRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	people: Array<PersonRecord>;
};

/** Block of type People Group (people_group) */
export type PeopleGroupRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type People Listing (people_listing) */
export type PeopleListingRecord = RecordInterface & {
	__typename?: 'PeopleListingRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
	peopleGroups: Array<PeopleGroupRecord>;
	theme: Scalars['String']['output'];
};

/** Block of type People Listing (people_listing) */
export type PeopleListingRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type People Listing (people_listing) */
export type PeopleListingRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Person (person) */
export type PersonRecord = RecordInterface & {
	__typename?: 'PersonRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	bio?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	name: Scalars['String']['output'];
	photo: ImageAltFileField;
	role: Scalars['String']['output'];
};

/** Block of type Person (person) */
export type PersonRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Person (person) */
export type PersonRecordBioArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Post Carousel (post_carousel) */
export type PostCarouselRecord = RecordInterface & {
	__typename?: 'PostCarouselRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	selectPosts: Scalars['BooleanType']['output'];
	selectedPosts: Array<PostRecord>;
	theme: Scalars['String']['output'];
};

/** Block of type Post Carousel (post_carousel) */
export type PostCarouselRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type PostModelContentField = {
	__typename?: 'PostModelContentField';
	blocks: Array<Scalars['String']['output']>;
	inlineBlocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type PostModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	author?: InputMaybe<LinkFilter>;
	category?: InputMaybe<LinkFilter>;
	content?: InputMaybe<StructuredTextFilter>;
	description?: InputMaybe<TextFilter>;
	heading?: InputMaybe<StringFilter>;
	id?: InputMaybe<ItemIdFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
};

export enum PostModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	HeadingAsc = 'heading_ASC',
	HeadingDesc = 'heading_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
}

/** Record of type ✏️ Post (post) */
export type PostRecord = RecordInterface & {
	__typename?: 'PostRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	author: AuthorRecord;
	category: CategoryRecord;
	content: PostModelContentField;
	description: Scalars['String']['output'];
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	seo?: Maybe<SeoField>;
	slug: Scalars['String']['output'];
};

/** Record of type ✏️ Post (post) */
export type PostRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type ✏️ Post (post) */
export type PostRecordDescriptionArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
	__typename?: 'Query';
	/** Returns meta information regarding a record collection */
	_allAuthorsMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allCaseStudiesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allCategoriesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allLegalPagesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allPagesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allPostsMeta: CollectionMetadata;
	/** Returns meta information regarding an assets collection */
	_allUploadsMeta: CollectionMetadata;
	/** Returns the single instance record */
	_site: Site;
	/** Returns a collection of records */
	allAuthors: Array<AuthorRecord>;
	/** Returns a collection of records */
	allCaseStudies: Array<CaseStudyRecord>;
	/** Returns a collection of records */
	allCategories: Array<CategoryRecord>;
	/** Returns a collection of records */
	allLegalPages: Array<LegalPageRecord>;
	/** Returns a collection of records */
	allPages: Array<PageRecord>;
	/** Returns a collection of records */
	allPosts: Array<PostRecord>;
	/** Returns a collection of assets */
	allUploads: Array<FileField>;
	/** Returns a specific record */
	author?: Maybe<AuthorRecord>;
	/** Returns a specific record */
	caseStudy?: Maybe<CaseStudyRecord>;
	/** Returns a specific record */
	category?: Maybe<CategoryRecord>;
	/** Returns the single instance record */
	layout?: Maybe<LayoutRecord>;
	/** Returns a specific record */
	legalPage?: Maybe<LegalPageRecord>;
	/** Returns a specific record */
	page?: Maybe<PageRecord>;
	/** Returns a specific record */
	post?: Maybe<PostRecord>;
	/** Returns a specific asset */
	upload?: Maybe<FileField>;
};

/** The query root for this schema */
export type Query_AllAuthorsMetaArgs = {
	filter?: InputMaybe<AuthorModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCaseStudiesMetaArgs = {
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCategoriesMetaArgs = {
	filter?: InputMaybe<CategoryModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLegalPagesMetaArgs = {
	filter?: InputMaybe<LegalPageModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
	filter?: InputMaybe<PageModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPostsMetaArgs = {
	filter?: InputMaybe<PostModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
	filter?: InputMaybe<UploadFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_SiteArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAllAuthorsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<AuthorModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllCaseStudiesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllCategoriesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CategoryModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllLegalPagesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<LegalPageModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<LegalPageModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllPagesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<PageModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllPostsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<PostModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllUploadsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<UploadFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAuthorArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<AuthorModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCaseStudyArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseStudyModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseStudyModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCategoryArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CategoryModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryLayoutArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryLegalPageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<LegalPageModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<LegalPageModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<PageModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPostArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<PostModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryUploadArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<UploadFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

/** Block of type Quote (quote) */
export type QuoteRecord = RecordInterface & {
	__typename?: 'QuoteRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	citationDetails: Scalars['String']['output'];
	citationName: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
	quote: Scalars['String']['output'];
	theme: Scalars['String']['output'];
};

/** Block of type Quote (quote) */
export type QuoteRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Quote (quote) */
export type QuoteRecordQuoteArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecordInterface = {
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
};

export type RecordInterface_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
	/** Search uploads with the specified resolution */
	eq?: InputMaybe<ResolutionType>;
	/** Search uploads with the specified resolutions */
	in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
	/** Exclude uploads with the specified resolution */
	neq?: InputMaybe<ResolutionType>;
	/** Search uploads without the specified resolutions */
	notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
	Icon = 'icon',
	Large = 'large',
	Medium = 'medium',
	Small = 'small',
}

export type ResponsiveImage = {
	__typename?: 'ResponsiveImage';
	alt?: Maybe<Scalars['String']['output']>;
	aspectRatio: Scalars['FloatType']['output'];
	base64?: Maybe<Scalars['String']['output']>;
	bgColor?: Maybe<Scalars['String']['output']>;
	height: Scalars['IntType']['output'];
	sizes: Scalars['String']['output'];
	src: Scalars['String']['output'];
	srcSet: Scalars['String']['output'];
	title?: Maybe<Scalars['String']['output']>;
	webpSrcSet: Scalars['String']['output'];
	width: Scalars['IntType']['output'];
};

/** Block of type Screen Breaker (screen_breaker) */
export type ScreenBreakerRecord = RecordInterface & {
	__typename?: 'ScreenBreakerRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	actions: Array<ButtonRecord>;
	content?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	image: ImageAltFileField;
	layout: Scalars['String']['output'];
	panel: Scalars['BooleanType']['output'];
};

/** Block of type Screen Breaker (screen_breaker) */
export type ScreenBreakerRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Screen Breaker (screen_breaker) */
export type ScreenBreakerRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoField = {
	__typename?: 'SeoField';
	description?: Maybe<Scalars['String']['output']>;
	image?: Maybe<FileField>;
	noIndex?: Maybe<Scalars['BooleanType']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type Site = {
	__typename?: 'Site';
	favicon?: Maybe<FileField>;
	faviconMetaTags: Array<Tag>;
	globalSeo?: Maybe<GlobalSeoField>;
	locales: Array<SiteLocale>;
	noIndex?: Maybe<Scalars['BooleanType']['output']>;
};

export type SiteFaviconMetaTagsArgs = {
	variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};

export type SiteGlobalSeoArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
	En = 'en',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that have one of the specified slugs */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that do have one of the specified slugs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
	/** Search the record with the specified status */
	eq?: InputMaybe<ItemStatus>;
	/** Search records with the specified statuses */
	in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
	/** Exclude the record with the specified status */
	neq?: InputMaybe<ItemStatus>;
	/** Search records without the specified statuses */
	notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records that equal one of the specified values */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter records with the specified field set as blank (null or empty string) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that do not equal one of the specified values */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
	caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
	pattern: Scalars['String']['input'];
	regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field set as blank (null or single empty paragraph) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
	__typename?: 'Tag';
	attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
	content?: Maybe<Scalars['String']['output']>;
	tag: Scalars['String']['output'];
};

/** Specifies how to filter text fields */
export type TextFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field set as blank (null or empty string) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Block of type Text Grid (text_grid) */
export type TextGridRecord = RecordInterface & {
	__typename?: 'TextGridRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	actions: Array<ButtonRecord>;
	content: Scalars['String']['output'];
	eyebrow?: Maybe<Scalars['String']['output']>;
	grid: GridRecord;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	layout: Scalars['String']['output'];
	pattern: Scalars['String']['output'];
	theme: Scalars['String']['output'];
};

/** Block of type Text Grid (text_grid) */
export type TextGridRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Text Grid (text_grid) */
export type TextGridRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Featured Text Media (textmedia_featured) */
export type TextmediaFeaturedRecord = RecordInterface & {
	__typename?: 'TextmediaFeaturedRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	actions: Array<ButtonRecord>;
	content?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	icon?: Maybe<AltFileField>;
	id: Scalars['ItemId']['output'];
	image: ImageAltFileField;
	layout: Scalars['String']['output'];
	theme: Scalars['String']['output'];
};

/** Block of type Featured Text Media (textmedia_featured) */
export type TextmediaFeaturedRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Featured Text Media (textmedia_featured) */
export type TextmediaFeaturedRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextmediaSectionModelContentField = {
	__typename?: 'TextmediaSectionModelContentField';
	blocks: Array<Scalars['String']['output']>;
	inlineBlocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

/** Block of type Text Media (textmedia_section) */
export type TextmediaSectionRecord = RecordInterface & {
	__typename?: 'TextmediaSectionRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content: TextmediaSectionModelContentField;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
	theme: Scalars['String']['output'];
};

/** Block of type Text Media (textmedia_section) */
export type TextmediaSectionRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
	/** Search uploads with the specified type */
	eq?: InputMaybe<UploadType>;
	/** Search uploads with the specified types */
	in?: InputMaybe<Array<InputMaybe<UploadType>>>;
	/** Exclude uploads with the specified type */
	neq?: InputMaybe<UploadType>;
	/** Search uploads without the specified types */
	notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
	/** Search the uploads with the specified alt */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter uploads with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Search uploads with the specified values as default alt */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the uploads with the specified alt */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search uploads that do not have the specified values as default alt */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
	/** Filter uploads with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
	/** Filter uploads that have all of the specified colors */
	allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
	/** Filter uploads that have at least one of the specified colors */
	anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
	/** Filter uploads that have the specified colors */
	contains?: InputMaybe<ColorBucketType>;
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
	/** Filter uploads that do not have any of the specified colors */
	notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Exclude uploads with an exact match */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
	AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
	_createdAt?: InputMaybe<UploadCreatedAtFilter>;
	_updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
	alt?: InputMaybe<UploadAltFilter>;
	author?: InputMaybe<UploadAuthorFilter>;
	basename?: InputMaybe<UploadBasenameFilter>;
	colors?: InputMaybe<UploadColorsFilter>;
	copyright?: InputMaybe<UploadCopyrightFilter>;
	filename?: InputMaybe<UploadFilenameFilter>;
	format?: InputMaybe<UploadFormatFilter>;
	height?: InputMaybe<UploadHeightFilter>;
	id?: InputMaybe<UploadIdFilter>;
	inUse?: InputMaybe<InUseFilter>;
	md5?: InputMaybe<UploadMd5Filter>;
	mimeType?: InputMaybe<UploadMimeTypeFilter>;
	notes?: InputMaybe<UploadNotesFilter>;
	orientation?: InputMaybe<OrientationFilter>;
	resolution?: InputMaybe<ResolutionFilter>;
	size?: InputMaybe<UploadSizeFilter>;
	smartTags?: InputMaybe<UploadTagsFilter>;
	tags?: InputMaybe<UploadTagsFilter>;
	title?: InputMaybe<UploadTitleFilter>;
	type?: InputMaybe<TypeFilter>;
	width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
	/** Search the asset with the specified format */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified formats */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude the asset with the specified format */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified formats */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
	/** Search assets with the specified height */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified height */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified height */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified height */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified height */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified height */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
	/** Search the asset with the specified ID */
	eq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Search assets with the specified IDs */
	in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
	/** Exclude the asset with the specified ID */
	neq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Search assets that do not have the specified IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
	/** Search the asset with the specified MD5 */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified MD5s */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude the asset with the specified MD5 */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified MD5s */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
	/** Search the asset with the specified mime type */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified mime types */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the asset with the specified mime type */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified mime types */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	BasenameAsc = 'basename_ASC',
	BasenameDesc = 'basename_DESC',
	FilenameAsc = 'filename_ASC',
	FilenameDesc = 'filename_DESC',
	FormatAsc = 'format_ASC',
	FormatDesc = 'format_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	ResolutionAsc = 'resolution_ASC',
	ResolutionDesc = 'resolution_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
	Landscape = 'landscape',
	Portrait = 'portrait',
	Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
	/** Search assets with the specified size (in bytes) */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified size (in bytes) */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified size (in bytes) */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified size (in bytes) */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified size (in bytes) */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified size (in bytes) */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
	/** Filter uploads linked to all of the specified tags */
	allIn?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads linked to at least one of the specified tags */
	anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads linked to the specified tag */
	contains?: InputMaybe<Scalars['String']['input']>;
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads not linked to any of the specified tags */
	notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
	/** Search the asset with the specified title */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter assets with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Search assets with the specified as default title */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the asset with the specified title */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified as default title */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
	Archive = 'archive',
	Audio = 'audio',
	Image = 'image',
	Pdfdocument = 'pdfdocument',
	Presentation = 'presentation',
	Richtext = 'richtext',
	Spreadsheet = 'spreadsheet',
	Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Exclude uploads with an exact match */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
	__typename?: 'UploadVideoField';
	alt?: Maybe<Scalars['String']['output']>;
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	duration?: Maybe<Scalars['Int']['output']>;
	framerate?: Maybe<Scalars['Int']['output']>;
	height: Scalars['IntType']['output'];
	mp4Url?: Maybe<Scalars['String']['output']>;
	muxAssetId: Scalars['String']['output'];
	muxPlaybackId: Scalars['String']['output'];
	streamingUrl: Scalars['String']['output'];
	thumbhash?: Maybe<Scalars['String']['output']>;
	thumbnailUrl: Scalars['String']['output'];
	title?: Maybe<Scalars['String']['output']>;
	width: Scalars['IntType']['output'];
};

export type UploadVideoFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type UploadVideoFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type UploadVideoFieldMp4UrlArgs = {
	exactRes?: InputMaybe<VideoMp4Res>;
	res?: InputMaybe<VideoMp4Res>;
};

export type UploadVideoFieldThumbnailUrlArgs = {
	format?: InputMaybe<MuxThumbnailFormatType>;
};

export type UploadVideoFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
	/** Search assets with the specified width */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified width */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified width */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified width */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified width */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified width */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type VideoAltFileField = FileFieldInterface & {
	__typename?: 'VideoAltFileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt: Scalars['String']['output'];
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height: Scalars['IntType']['output'];
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video: UploadVideoField;
	width: Scalars['IntType']['output'];
};

export type VideoAltFileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type VideoAltFileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type VideoAltFileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type VideoAltFileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type VideoAltFileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type VideoAltFileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type VideoAltFileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type VideoField = {
	__typename?: 'VideoField';
	height: Scalars['IntType']['output'];
	provider: Scalars['String']['output'];
	providerUid: Scalars['String']['output'];
	thumbnailUrl: Scalars['String']['output'];
	title: Scalars['String']['output'];
	url: Scalars['String']['output'];
	width: Scalars['IntType']['output'];
};

export enum VideoMp4Res {
	High = 'high',
	Low = 'low',
	Medium = 'medium',
}

/** Block of type Video (video) */
export type VideoRecord = RecordInterface & {
	__typename?: 'VideoRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt: Scalars['DateTime']['output'];
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt: Scalars['DateTime']['output'];
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus;
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	actions?: Maybe<ButtonRecord>;
	content?: Maybe<Scalars['String']['output']>;
	eyebrow?: Maybe<Scalars['String']['output']>;
	heading: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	pattern: Scalars['String']['output'];
	theme: Scalars['String']['output'];
	videoEmbed: VideoField;
};

/** Block of type Video (video) */
export type VideoRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Video (video) */
export type VideoRecordContentArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FocalPoint = {
	__typename?: 'focalPoint';
	x: Scalars['FloatType']['output'];
	y: Scalars['FloatType']['output'];
};

export type AccreditationBarRecordFragmentFragment = {
	__typename?: 'AccreditationBarRecord';
	id: string;
	logos: Array<{
		__typename?: 'AltFileField';
		responsiveImage?: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		} | null;
	}>;
};

export type ButtonRecordFragmentFragment = {
	__typename?: 'ButtonRecord';
	id: string;
	text: string;
	variant: string;
	link: unknown;
};

export type CardRecordFragmentFragment = {
	__typename?: 'CardRecord';
	id: string;
	heading: string;
	description?: string | null;
	link?: unknown | null;
	image: {
		__typename?: 'ImageAltFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		};
	};
};

export type CaseStudyListingRecordFragmentFragment = {
	__typename?: 'CaseStudyListingRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	content?: string | null;
	pattern: string;
	theme: string;
	selectCaseStudies: boolean;
	selectedCaseStudies: Array<{
		__typename?: 'CaseStudyRecord';
		id: string;
		heading: string;
		slug: string;
		description?: string | null;
		body: Array<string>;
		category: {
			__typename?: 'CategoryRecord';
			id: string;
			heading: string;
			slug: string;
		};
	}>;
};

export type CtaSeparatorRecordFragmentFragment = {
	__typename?: 'CtaSeparatorRecord';
	id: string;
	pattern: string;
	theme: string;
	button: {
		__typename?: 'ButtonRecord';
		id: string;
		text: string;
		variant: string;
		link: unknown;
	};
};

export type GridRecordFragmentFragment = {
	__typename?: 'GridRecord';
	id: string;
	items: Array<{
		__typename?: 'CardRecord';
		id: string;
		heading: string;
		description?: string | null;
		link?: unknown | null;
		image: {
			__typename?: 'ImageAltFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				srcSet: string;
				webpSrcSet: string;
				sizes: string;
				src: string;
				width: number;
				height: number;
				aspectRatio: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
			};
		};
	}>;
};

export type HeroRecordFragmentFragment = {
	__typename?: 'HeroRecord';
	id: string;
	heading: string;
	layout: string;
	theme: string;
	useBackgroundVideo: boolean;
	heroContent: string;
	heroImage?: {
		__typename?: 'ImageAltFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		};
	} | null;
	backgroundVideo?: { __typename?: 'VideoAltFileField'; url: string } | null;
};

export type IconGridRecordFragmentFragment = {
	__typename?: 'IconGridRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	content?: string | null;
	endContent?: string | null;
	pattern: string;
	icons: Array<{
		__typename?: 'IconPanelRecord';
		id: string;
		heading: string;
		icon: {
			__typename?: 'AltFileField';
			responsiveImage?: {
				__typename?: 'ResponsiveImage';
				srcSet: string;
				webpSrcSet: string;
				sizes: string;
				src: string;
				width: number;
				height: number;
				aspectRatio: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
			} | null;
		};
	}>;
};

export type IconPanelRecordFragmentFragment = {
	__typename?: 'IconPanelRecord';
	id: string;
	heading: string;
	icon: {
		__typename?: 'AltFileField';
		responsiveImage?: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		} | null;
	};
};

export type LogoCloudRecordFragmentFragment = {
	__typename?: 'LogoCloudRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	content?: string | null;
	theme: string;
	logos: Array<{
		__typename?: 'AltFileField';
		responsiveImage?: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		} | null;
	}>;
};

export type PeopleGroupRecordFragmentFragment = {
	__typename?: 'PeopleGroupRecord';
	id: string;
	people: Array<{
		__typename?: 'PersonRecord';
		id: string;
		name: string;
		role: string;
		bio?: string | null;
		photo: {
			__typename?: 'ImageAltFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				srcSet: string;
				webpSrcSet: string;
				sizes: string;
				src: string;
				width: number;
				height: number;
				aspectRatio: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
			};
		};
	}>;
};

export type PeopleListingRecordFragmentFragment = {
	__typename?: 'PeopleListingRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	content?: string | null;
	pattern: string;
	theme: string;
	peopleGroups: Array<{
		__typename?: 'PeopleGroupRecord';
		id: string;
		people: Array<{
			__typename?: 'PersonRecord';
			id: string;
			name: string;
			role: string;
			bio?: string | null;
			photo: {
				__typename?: 'ImageAltFileField';
				responsiveImage: {
					__typename?: 'ResponsiveImage';
					srcSet: string;
					webpSrcSet: string;
					sizes: string;
					src: string;
					width: number;
					height: number;
					aspectRatio: number;
					alt?: string | null;
					title?: string | null;
					base64?: string | null;
				};
			};
		}>;
	}>;
};

export type PersonRecordFragmentFragment = {
	__typename?: 'PersonRecord';
	id: string;
	name: string;
	role: string;
	bio?: string | null;
	photo: {
		__typename?: 'ImageAltFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		};
	};
};

export type PostCarouselRecordFragmentFragment = {
	__typename?: 'PostCarouselRecord';
	id: string;
	heading: string;
	theme: string;
	selectPosts: boolean;
	selectedPosts: Array<{
		__typename?: 'PostRecord';
		id: string;
		heading: string;
		slug: string;
		description: string;
		content: {
			__typename?: 'PostModelContentField';
			blocks: Array<string>;
			inlineBlocks: Array<string>;
			links: Array<string>;
			value: unknown;
		};
		author: {
			__typename?: 'AuthorRecord';
			id: string;
			name?: string | null;
			slug: string;
			photo: {
				__typename?: 'ImageFileField';
				responsiveImage: {
					__typename?: 'ResponsiveImage';
					srcSet: string;
					webpSrcSet: string;
					sizes: string;
					src: string;
					width: number;
					height: number;
					aspectRatio: number;
					alt?: string | null;
					title?: string | null;
					base64?: string | null;
				};
			};
		};
		category: {
			__typename?: 'CategoryRecord';
			id: string;
			heading: string;
			slug: string;
		};
	}>;
};

export type QuoteRecordFragmentFragment = {
	__typename?: 'QuoteRecord';
	id: string;
	quote: string;
	citationName: string;
	citationDetails: string;
	pattern: string;
	theme: string;
};

export type ScreenBreakerRecordFragmentFragment = {
	__typename?: 'ScreenBreakerRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	layout: string;
	panel: boolean;
	screenBreakerContent?: string | null;
	image: {
		__typename?: 'ImageAltFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		};
	};
	actionsGroup: Array<{
		__typename?: 'ButtonRecord';
		id: string;
		text: string;
		variant: string;
		link: unknown;
	}>;
};

export type TextGridRecordFragmentFragment = {
	__typename?: 'TextGridRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	theme: string;
	pattern: string;
	layout: string;
	textGridContent: string;
	actions: Array<{
		__typename?: 'ButtonRecord';
		id: string;
		text: string;
		variant: string;
		link: unknown;
	}>;
	grid: {
		__typename?: 'GridRecord';
		id: string;
		items: Array<{
			__typename?: 'CardRecord';
			id: string;
			heading: string;
			description?: string | null;
			link?: unknown | null;
			image: {
				__typename?: 'ImageAltFileField';
				responsiveImage: {
					__typename?: 'ResponsiveImage';
					srcSet: string;
					webpSrcSet: string;
					sizes: string;
					src: string;
					width: number;
					height: number;
					aspectRatio: number;
					alt?: string | null;
					title?: string | null;
					base64?: string | null;
				};
			};
		}>;
	};
};

export type TextmediaFeaturedRecordFragmentFragment = {
	__typename?: 'TextmediaFeaturedRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	layout: string;
	theme: string;
	textMediaFeaturedContent?: string | null;
	image: {
		__typename?: 'ImageAltFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		};
	};
	textMediaFeaturedIcon?: {
		__typename?: 'AltFileField';
		responsiveImage?: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		} | null;
	} | null;
	actions: Array<{
		__typename?: 'ButtonRecord';
		id: string;
		text: string;
		variant: string;
		link: unknown;
	}>;
};

export type TextmediaSectionRecordFragmentFragment = {
	__typename?: 'TextmediaSectionRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	pattern: string;
	theme: string;
	textMediaContent: {
		__typename?: 'TextmediaSectionModelContentField';
		blocks: Array<string>;
		inlineBlocks: Array<string>;
		links: Array<string>;
		value: unknown;
	};
};

export type VideoRecordFragmentFragment = {
	__typename?: 'VideoRecord';
	id: string;
	heading: string;
	eyebrow?: string | null;
	pattern: string;
	theme: string;
	videoContent?: string | null;
	videoEmbed: {
		__typename?: 'VideoField';
		url: string;
		provider: string;
		thumbnailUrl: string;
		title: string;
	};
	videoActions?: {
		__typename?: 'ButtonRecord';
		id: string;
		text: string;
		variant: string;
		link: unknown;
	} | null;
};

export type MetaTagsFragmentFragment = {
	__typename?: 'Tag';
	attributes?: Record<string, string> | null;
	content?: string | null;
	tag: string;
};

export type ResponsiveImageFragmentFragment = {
	__typename?: 'ResponsiveImage';
	srcSet: string;
	webpSrcSet: string;
	sizes: string;
	src: string;
	width: number;
	height: number;
	aspectRatio: number;
	alt?: string | null;
	title?: string | null;
	base64?: string | null;
};

export type AuthorRecordFragmentFragment = {
	__typename?: 'AuthorRecord';
	id: string;
	name?: string | null;
	slug: string;
	photo: {
		__typename?: 'ImageFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			srcSet: string;
			webpSrcSet: string;
			sizes: string;
			src: string;
			width: number;
			height: number;
			aspectRatio: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
		};
	};
};

export type CaseStudyRecordFragmentFragment = {
	__typename?: 'CaseStudyRecord';
	id: string;
	heading: string;
	slug: string;
	description?: string | null;
	body: Array<string>;
	category: {
		__typename?: 'CategoryRecord';
		id: string;
		heading: string;
		slug: string;
	};
};

export type CategoryRecordFragmentFragment = {
	__typename?: 'CategoryRecord';
	id: string;
	heading: string;
	slug: string;
};

export type LayoutQueryVariables = Exact<{ [key: string]: never }>;

export type LayoutQuery = {
	__typename?: 'Query';
	layout?: {
		__typename?: 'LayoutRecord';
		id: string;
		announcementBanner?: string | null;
		announcementBannerButton?: unknown | null;
		navigation: Array<
			| {
					__typename?: 'MenuDropdownRecord';
					id: string;
					heading: string;
					groups: Array<{
						__typename?: 'MenuDropdownGroupRecord';
						id: string;
						description?: string | null;
						useDescription: boolean;
						heading: {
							__typename?: 'PageRecord';
							id: string;
							heading: string;
						};
						items: Array<{
							__typename?: 'MenuItemRecord';
							id: string;
							heading: string;
							target: {
								__typename?: 'PageRecord';
								id: string;
								slug: string;
							};
						}>;
						icon: { __typename?: 'FileField'; url: string };
					}>;
			  }
			| {
					__typename?: 'MenuItemRecord';
					id: string;
					heading: string;
					target: {
						__typename?: 'PageRecord';
						id: string;
						slug: string;
					};
			  }
		>;
	} | null;
};

export type LegalPageRecordFragmentFragment = {
	__typename?: 'LegalPageRecord';
	id: string;
	heading: string;
	slug: string;
	content: {
		__typename?: 'LegalPageModelContentField';
		blocks: Array<string>;
		inlineBlocks: Array<string>;
		links: Array<string>;
		value: unknown;
	};
};

export type PageQueryVariables = Exact<{
	slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type PageQuery = {
	__typename?: 'Query';
	site: {
		__typename?: 'Site';
		favicon: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			content?: string | null;
			tag: string;
		}>;
	};
	page?: {
		__typename?: 'PageRecord';
		id: string;
		heading: string;
		description?: string | null;
		slug: string;
		parentPage?: { __typename?: 'PageRecord'; slug: string } | null;
		body: Array<
			| {
					__typename: 'AccreditationBarRecord';
					id: string;
					logos: Array<{
						__typename?: 'AltFileField';
						responsiveImage?: {
							__typename?: 'ResponsiveImage';
							srcSet: string;
							webpSrcSet: string;
							sizes: string;
							src: string;
							width: number;
							height: number;
							aspectRatio: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
						} | null;
					}>;
			  }
			| {
					__typename: 'CaseStudyListingRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					content?: string | null;
					pattern: string;
					theme: string;
					selectCaseStudies: boolean;
					selectedCaseStudies: Array<{
						__typename?: 'CaseStudyRecord';
						id: string;
						heading: string;
						slug: string;
						description?: string | null;
						body: Array<string>;
						category: {
							__typename?: 'CategoryRecord';
							id: string;
							heading: string;
							slug: string;
						};
					}>;
			  }
			| {
					__typename: 'CtaSeparatorRecord';
					id: string;
					pattern: string;
					theme: string;
					button: {
						__typename?: 'ButtonRecord';
						id: string;
						text: string;
						variant: string;
						link: unknown;
					};
			  }
			| {
					__typename: 'HeroRecord';
					id: string;
					heading: string;
					layout: string;
					theme: string;
					useBackgroundVideo: boolean;
					heroContent: string;
					heroImage?: {
						__typename?: 'ImageAltFileField';
						responsiveImage: {
							__typename?: 'ResponsiveImage';
							srcSet: string;
							webpSrcSet: string;
							sizes: string;
							src: string;
							width: number;
							height: number;
							aspectRatio: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
						};
					} | null;
					backgroundVideo?: {
						__typename?: 'VideoAltFileField';
						url: string;
					} | null;
			  }
			| {
					__typename: 'IconGridRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					content?: string | null;
					endContent?: string | null;
					pattern: string;
					icons: Array<{
						__typename?: 'IconPanelRecord';
						id: string;
						heading: string;
						icon: {
							__typename?: 'AltFileField';
							responsiveImage?: {
								__typename?: 'ResponsiveImage';
								srcSet: string;
								webpSrcSet: string;
								sizes: string;
								src: string;
								width: number;
								height: number;
								aspectRatio: number;
								alt?: string | null;
								title?: string | null;
								base64?: string | null;
							} | null;
						};
					}>;
			  }
			| {
					__typename: 'LogoCloudRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					content?: string | null;
					theme: string;
					logos: Array<{
						__typename?: 'AltFileField';
						responsiveImage?: {
							__typename?: 'ResponsiveImage';
							srcSet: string;
							webpSrcSet: string;
							sizes: string;
							src: string;
							width: number;
							height: number;
							aspectRatio: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
						} | null;
					}>;
			  }
			| {
					__typename: 'PeopleListingRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					content?: string | null;
					pattern: string;
					theme: string;
					peopleGroups: Array<{
						__typename?: 'PeopleGroupRecord';
						id: string;
						people: Array<{
							__typename?: 'PersonRecord';
							id: string;
							name: string;
							role: string;
							bio?: string | null;
							photo: {
								__typename?: 'ImageAltFileField';
								responsiveImage: {
									__typename?: 'ResponsiveImage';
									srcSet: string;
									webpSrcSet: string;
									sizes: string;
									src: string;
									width: number;
									height: number;
									aspectRatio: number;
									alt?: string | null;
									title?: string | null;
									base64?: string | null;
								};
							};
						}>;
					}>;
			  }
			| {
					__typename: 'PostCarouselRecord';
					id: string;
					heading: string;
					theme: string;
					selectPosts: boolean;
					selectedPosts: Array<{
						__typename?: 'PostRecord';
						id: string;
						heading: string;
						slug: string;
						description: string;
						content: {
							__typename?: 'PostModelContentField';
							blocks: Array<string>;
							inlineBlocks: Array<string>;
							links: Array<string>;
							value: unknown;
						};
						author: {
							__typename?: 'AuthorRecord';
							id: string;
							name?: string | null;
							slug: string;
							photo: {
								__typename?: 'ImageFileField';
								responsiveImage: {
									__typename?: 'ResponsiveImage';
									srcSet: string;
									webpSrcSet: string;
									sizes: string;
									src: string;
									width: number;
									height: number;
									aspectRatio: number;
									alt?: string | null;
									title?: string | null;
									base64?: string | null;
								};
							};
						};
						category: {
							__typename?: 'CategoryRecord';
							id: string;
							heading: string;
							slug: string;
						};
					}>;
			  }
			| {
					__typename: 'QuoteRecord';
					id: string;
					quote: string;
					citationName: string;
					citationDetails: string;
					pattern: string;
					theme: string;
			  }
			| {
					__typename: 'ScreenBreakerRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					layout: string;
					panel: boolean;
					screenBreakerContent?: string | null;
					image: {
						__typename?: 'ImageAltFileField';
						responsiveImage: {
							__typename?: 'ResponsiveImage';
							srcSet: string;
							webpSrcSet: string;
							sizes: string;
							src: string;
							width: number;
							height: number;
							aspectRatio: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
						};
					};
					actionsGroup: Array<{
						__typename?: 'ButtonRecord';
						id: string;
						text: string;
						variant: string;
						link: unknown;
					}>;
			  }
			| {
					__typename: 'TextGridRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					theme: string;
					pattern: string;
					layout: string;
					textGridContent: string;
					actions: Array<{
						__typename?: 'ButtonRecord';
						id: string;
						text: string;
						variant: string;
						link: unknown;
					}>;
					grid: {
						__typename?: 'GridRecord';
						id: string;
						items: Array<{
							__typename?: 'CardRecord';
							id: string;
							heading: string;
							description?: string | null;
							link?: unknown | null;
							image: {
								__typename?: 'ImageAltFileField';
								responsiveImage: {
									__typename?: 'ResponsiveImage';
									srcSet: string;
									webpSrcSet: string;
									sizes: string;
									src: string;
									width: number;
									height: number;
									aspectRatio: number;
									alt?: string | null;
									title?: string | null;
									base64?: string | null;
								};
							};
						}>;
					};
			  }
			| {
					__typename: 'TextmediaFeaturedRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					layout: string;
					theme: string;
					textMediaFeaturedContent?: string | null;
					image: {
						__typename?: 'ImageAltFileField';
						responsiveImage: {
							__typename?: 'ResponsiveImage';
							srcSet: string;
							webpSrcSet: string;
							sizes: string;
							src: string;
							width: number;
							height: number;
							aspectRatio: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
						};
					};
					textMediaFeaturedIcon?: {
						__typename?: 'AltFileField';
						responsiveImage?: {
							__typename?: 'ResponsiveImage';
							srcSet: string;
							webpSrcSet: string;
							sizes: string;
							src: string;
							width: number;
							height: number;
							aspectRatio: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
						} | null;
					} | null;
					actions: Array<{
						__typename?: 'ButtonRecord';
						id: string;
						text: string;
						variant: string;
						link: unknown;
					}>;
			  }
			| {
					__typename: 'TextmediaSectionRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					pattern: string;
					theme: string;
					textMediaContent: {
						__typename?: 'TextmediaSectionModelContentField';
						blocks: Array<string>;
						inlineBlocks: Array<string>;
						links: Array<string>;
						value: unknown;
					};
			  }
			| {
					__typename: 'VideoRecord';
					id: string;
					heading: string;
					eyebrow?: string | null;
					pattern: string;
					theme: string;
					videoContent?: string | null;
					videoEmbed: {
						__typename?: 'VideoField';
						url: string;
						provider: string;
						thumbnailUrl: string;
						title: string;
					};
					videoActions?: {
						__typename?: 'ButtonRecord';
						id: string;
						text: string;
						variant: string;
						link: unknown;
					} | null;
			  }
		>;
		seo: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			content?: string | null;
			tag: string;
		}>;
	} | null;
};

export type PostRecordFragmentFragment = {
	__typename?: 'PostRecord';
	id: string;
	heading: string;
	slug: string;
	description: string;
	content: {
		__typename?: 'PostModelContentField';
		blocks: Array<string>;
		inlineBlocks: Array<string>;
		links: Array<string>;
		value: unknown;
	};
	author: {
		__typename?: 'AuthorRecord';
		id: string;
		name?: string | null;
		slug: string;
		photo: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				srcSet: string;
				webpSrcSet: string;
				sizes: string;
				src: string;
				width: number;
				height: number;
				aspectRatio: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
			};
		};
	};
	category: {
		__typename?: 'CategoryRecord';
		id: string;
		heading: string;
		slug: string;
	};
};

export const ResponsiveImageFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<ResponsiveImageFragmentFragment, unknown>;
export const AccreditationBarRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AccreditationBarRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'AccreditationBarRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'logos' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<AccreditationBarRecordFragmentFragment, unknown>;
export const CategoryRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CategoryRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CategoryRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
	],
} as unknown as DocumentNode<CategoryRecordFragmentFragment, unknown>;
export const CaseStudyRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CaseStudyRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CaseStudyRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'body' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CategoryRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CategoryRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CategoryRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
	],
} as unknown as DocumentNode<CaseStudyRecordFragmentFragment, unknown>;
export const CaseStudyListingRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CaseStudyListingRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CaseStudyListingRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectCaseStudies' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectedCaseStudies' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CaseStudyRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CategoryRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CategoryRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CaseStudyRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CaseStudyRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'body' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CategoryRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CaseStudyListingRecordFragmentFragment, unknown>;
export const ButtonRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
	],
} as unknown as DocumentNode<ButtonRecordFragmentFragment, unknown>;
export const CtaSeparatorRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CtaSeparatorRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CtaSeparatorRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'button' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
	],
} as unknown as DocumentNode<CtaSeparatorRecordFragmentFragment, unknown>;
export const HeroRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'HeroRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'HeroRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'heroContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'useBackgroundVideo' },
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'heroImage' },
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'backgroundVideo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'url' },
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<HeroRecordFragmentFragment, unknown>;
export const IconPanelRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'IconPanelRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'IconPanelRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'icon' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<IconPanelRecordFragmentFragment, unknown>;
export const IconGridRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'IconGridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'IconGridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'endContent' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'icons' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'IconPanelRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'IconPanelRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'IconPanelRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'icon' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<IconGridRecordFragmentFragment, unknown>;
export const LogoCloudRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'LogoCloudRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'LogoCloudRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'logos' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<LogoCloudRecordFragmentFragment, unknown>;
export const PersonRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PersonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PersonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'role' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'bio' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<PersonRecordFragmentFragment, unknown>;
export const PeopleGroupRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PeopleGroupRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PeopleGroupRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'people' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PersonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PersonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PersonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'role' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'bio' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PeopleGroupRecordFragmentFragment, unknown>;
export const PeopleListingRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PeopleListingRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PeopleListingRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'peopleGroups' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PeopleGroupRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PersonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PersonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'role' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'bio' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PeopleGroupRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PeopleGroupRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'people' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PersonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PeopleListingRecordFragmentFragment, unknown>;
export const AuthorRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'AuthorRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<AuthorRecordFragmentFragment, unknown>;
export const PostRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PostRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PostRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'content' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'blocks' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'inlineBlocks',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'value' },
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'author' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'AuthorRecordFragment',
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CategoryRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'AuthorRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CategoryRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CategoryRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
	],
} as unknown as DocumentNode<PostRecordFragmentFragment, unknown>;
export const PostCarouselRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PostCarouselRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PostCarouselRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectPosts' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectedPosts' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PostRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'AuthorRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CategoryRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CategoryRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PostRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PostRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'content' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'blocks' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'inlineBlocks',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'value' },
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'author' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'AuthorRecordFragment',
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CategoryRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PostCarouselRecordFragmentFragment, unknown>;
export const QuoteRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'QuoteRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'QuoteRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'quote' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'citationName' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'citationDetails' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
				],
			},
		},
	],
} as unknown as DocumentNode<QuoteRecordFragmentFragment, unknown>;
export const ScreenBreakerRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ScreenBreakerRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ScreenBreakerRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'screenBreakerContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'panel' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'actionsGroup' },
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
	],
} as unknown as DocumentNode<ScreenBreakerRecordFragmentFragment, unknown>;
export const CardRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CardRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CardRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
	],
} as unknown as DocumentNode<CardRecordFragmentFragment, unknown>;
export const GridRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'GridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'GridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'items' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CardRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CardRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CardRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
	],
} as unknown as DocumentNode<GridRecordFragmentFragment, unknown>;
export const TextGridRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TextGridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'TextGridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'textGridContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'grid' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'GridRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CardRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CardRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'GridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'GridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'items' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CardRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<TextGridRecordFragmentFragment, unknown>;
export const TextmediaFeaturedRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TextmediaFeaturedRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'TextmediaFeaturedRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: {
							kind: 'Name',
							value: 'textMediaFeaturedContent',
						},
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'textMediaFeaturedIcon' },
						name: { kind: 'Name', value: 'icon' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
	],
} as unknown as DocumentNode<TextmediaFeaturedRecordFragmentFragment, unknown>;
export const TextmediaSectionRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TextmediaSectionRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'TextmediaSectionRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'textMediaContent' },
						name: { kind: 'Name', value: 'content' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'blocks' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'inlineBlocks',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'value' },
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
				],
			},
		},
	],
} as unknown as DocumentNode<TextmediaSectionRecordFragmentFragment, unknown>;
export const VideoRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'VideoRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'VideoRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'videoContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'videoEmbed' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'url' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'provider' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'thumbnailUrl',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'title' },
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'videoActions' },
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
	],
} as unknown as DocumentNode<VideoRecordFragmentFragment, unknown>;
export const MetaTagsFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'metaTagsFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'Tag' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'attributes' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tag' } },
				],
			},
		},
	],
} as unknown as DocumentNode<MetaTagsFragmentFragment, unknown>;
export const LegalPageRecordFragmentFragmentDoc = {
	kind: 'Document',
	definitions: [
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'LegalPageRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'LegalPageRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'content' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'blocks' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'inlineBlocks',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'value' },
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<LegalPageRecordFragmentFragment, unknown>;
export const LayoutDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Layout' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'layout' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'id' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'announcementBanner',
									},
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'announcementBannerButton',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'navigation' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'MenuItemRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'id',
															},
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'heading',
															},
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'target',
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'id',
																		},
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'slug',
																		},
																	},
																],
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'MenuDropdownRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'id',
															},
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'heading',
															},
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'groups',
															},
															selectionSet: {
																kind: 'SelectionSet',
																selections: [
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'id',
																		},
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'heading',
																		},
																		selectionSet:
																			{
																				kind: 'SelectionSet',
																				selections:
																					[
																						{
																							kind: 'Field',
																							name: {
																								kind: 'Name',
																								value: 'id',
																							},
																						},
																						{
																							kind: 'Field',
																							name: {
																								kind: 'Name',
																								value: 'heading',
																							},
																						},
																					],
																			},
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'description',
																		},
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'useDescription',
																		},
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'items',
																		},
																		selectionSet:
																			{
																				kind: 'SelectionSet',
																				selections:
																					[
																						{
																							kind: 'Field',
																							name: {
																								kind: 'Name',
																								value: 'id',
																							},
																						},
																						{
																							kind: 'Field',
																							name: {
																								kind: 'Name',
																								value: 'heading',
																							},
																						},
																						{
																							kind: 'Field',
																							name: {
																								kind: 'Name',
																								value: 'target',
																							},
																							selectionSet:
																								{
																									kind: 'SelectionSet',
																									selections:
																										[
																											{
																												kind: 'Field',
																												name: {
																													kind: 'Name',
																													value: 'id',
																												},
																											},
																											{
																												kind: 'Field',
																												name: {
																													kind: 'Name',
																													value: 'slug',
																												},
																											},
																										],
																								},
																						},
																					],
																			},
																	},
																	{
																		kind: 'Field',
																		name: {
																			kind: 'Name',
																			value: 'icon',
																		},
																		selectionSet:
																			{
																				kind: 'SelectionSet',
																				selections:
																					[
																						{
																							kind: 'Field',
																							name: {
																								kind: 'Name',
																								value: 'url',
																							},
																						},
																					],
																			},
																	},
																],
															},
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<LayoutQuery, LayoutQueryVariables>;
export const PageDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Page' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'slug' },
					},
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'String' },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'site' },
						name: { kind: 'Name', value: '_site' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									alias: { kind: 'Name', value: 'favicon' },
									name: {
										kind: 'Name',
										value: 'faviconMetaTags',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'metaTagsFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'page' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'filter' },
								value: {
									kind: 'ObjectValue',
									fields: [
										{
											kind: 'ObjectField',
											name: {
												kind: 'Name',
												value: 'slug',
											},
											value: {
												kind: 'ObjectValue',
												fields: [
													{
														kind: 'ObjectField',
														name: {
															kind: 'Name',
															value: 'eq',
														},
														value: {
															kind: 'Variable',
															name: {
																kind: 'Name',
																value: 'slug',
															},
														},
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'id' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'heading' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'description',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'parentPage' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: {
													kind: 'Name',
													value: 'slug',
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'slug' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'body' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: {
													kind: 'Name',
													value: '__typename',
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'HeroRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'HeroRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'TextGridRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'TextGridRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'QuoteRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'QuoteRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'ScreenBreakerRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'ScreenBreakerRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'VideoRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'VideoRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'TextmediaFeaturedRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'TextmediaFeaturedRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'TextmediaSectionRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'TextmediaSectionRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'IconGridRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'IconGridRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'LogoCloudRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'LogoCloudRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'AccreditationBarRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'AccreditationBarRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'PeopleListingRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'PeopleListingRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'PostCarouselRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'PostCarouselRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'CaseStudyListingRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'CaseStudyListingRecordFragment',
															},
														},
													],
												},
											},
											{
												kind: 'InlineFragment',
												typeCondition: {
													kind: 'NamedType',
													name: {
														kind: 'Name',
														value: 'CtaSeparatorRecord',
													},
												},
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'FragmentSpread',
															name: {
																kind: 'Name',
																value: 'CtaSeparatorRecordFragment',
															},
														},
													],
												},
											},
										],
									},
								},
								{
									kind: 'Field',
									alias: { kind: 'Name', value: 'seo' },
									name: {
										kind: 'Name',
										value: '_seoMetaTags',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'metaTagsFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'responsiveImageFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ResponsiveImage' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'webpSrcSet' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'src' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'width' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'height' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'aspectRatio' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'alt' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'title' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'base64' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ButtonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ButtonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'text' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'variant' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CardRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CardRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'link' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'GridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'GridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'items' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CardRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'IconPanelRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'IconPanelRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'icon' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PersonRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PersonRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'role' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'bio' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PeopleGroupRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PeopleGroupRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'people' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PersonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AuthorRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'AuthorRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'photo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CategoryRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CategoryRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PostRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PostRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'content' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'blocks' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'inlineBlocks',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'value' },
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'author' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'AuthorRecordFragment',
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CategoryRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CaseStudyRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CaseStudyRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'slug' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'description' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'body' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'category' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CategoryRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'metaTagsFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'Tag' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'attributes' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'tag' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'HeroRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'HeroRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'heroContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'useBackgroundVideo' },
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'heroImage' },
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'backgroundVideo' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'url' },
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TextGridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'TextGridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'textGridContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'grid' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'GridRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'QuoteRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'QuoteRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'quote' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'citationName' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'citationDetails' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'ScreenBreakerRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'ScreenBreakerRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'screenBreakerContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'panel' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'actionsGroup' },
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'VideoRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'VideoRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'videoContent' },
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'videoEmbed' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'url' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'provider' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'thumbnailUrl',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'title' },
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'videoActions' },
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TextmediaFeaturedRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'TextmediaFeaturedRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: {
							kind: 'Name',
							value: 'textMediaFeaturedContent',
						},
						name: { kind: 'Name', value: 'content' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'layout' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'image' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'textMediaFeaturedIcon' },
						name: { kind: 'Name', value: 'icon' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'actions' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'TextmediaSectionRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'TextmediaSectionRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{
						kind: 'Field',
						alias: { kind: 'Name', value: 'textMediaContent' },
						name: { kind: 'Name', value: 'content' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'blocks' },
								},
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'inlineBlocks',
									},
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'links' },
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'value' },
								},
							],
						},
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'IconGridRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'IconGridRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'endContent' },
					},
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'icons' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'IconPanelRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'LogoCloudRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'LogoCloudRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'logos' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'AccreditationBarRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'AccreditationBarRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'logos' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: {
										kind: 'Name',
										value: 'responsiveImage',
									},
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'FragmentSpread',
												name: {
													kind: 'Name',
													value: 'responsiveImageFragment',
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PeopleListingRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PeopleListingRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'peopleGroups' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PeopleGroupRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'PostCarouselRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'PostCarouselRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectPosts' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectedPosts' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'PostRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CaseStudyListingRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CaseStudyListingRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'heading' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'eyebrow' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'content' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectCaseStudies' },
					},
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'selectedCaseStudies' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'CaseStudyRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: 'FragmentDefinition',
			name: { kind: 'Name', value: 'CtaSeparatorRecordFragment' },
			typeCondition: {
				kind: 'NamedType',
				name: { kind: 'Name', value: 'CtaSeparatorRecord' },
			},
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'pattern' } },
					{ kind: 'Field', name: { kind: 'Name', value: 'theme' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'button' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'FragmentSpread',
									name: {
										kind: 'Name',
										value: 'ButtonRecordFragment',
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
