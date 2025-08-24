import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import type {Props} from '@theme/BlogTagsListPage';
import SearchMetadata from '@theme/SearchMetadata';
import TagsListSimple from '@site/src/components/TagsListSimple';
import Heading from '@theme/Heading';

export default function BlogTagsListPage({tags, sidebar}: Props): ReactNode {
  const title = translateTagsPageTitle();
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <BlogLayout sidebar={sidebar}>
        <Heading as="h1">{title}</Heading>
        <TagsListSimple tags={tags} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
