/* eslint-disable unicorn/consistent-function-scoping */
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer2/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { codeImport } from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { rehypeComponent } from './src/lib/rehype-component';
import { rehypeNpmCommand } from './src/lib/rehype-npm-command';

/** @type {import('contentlayer2/source-files').ComputedFields} */
const computedFields = {
  slug: {
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
    type: 'string',
  },
  slugAsParams: {
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    type: 'string',
  },
};

const LinksProperties = defineNestedType(() => ({
  fields: {
    api: {
      type: 'string',
    },
    doc: {
      type: 'string',
    },
  },
  name: 'LinksProperties',
}));

export const Doc = defineDocumentType(() => ({
  computedFields,
  contentType: 'mdx',
  fields: {
    component: {
      default: false,
      required: false,
      type: 'boolean',
    },
    description: {
      required: true,
      type: 'string',
    },
    featured: {
      default: false,
      required: false,
      type: 'boolean',
    },
    links: {
      of: LinksProperties,
      type: 'nested',
    },
    published: {
      default: true,
      type: 'boolean',
    },
    title: {
      required: true,
      type: 'string',
    },
    toc: {
      default: true,
      required: false,
      type: 'boolean',
    },
  },
  filePathPattern: `docs/**/*.mdx`,
  name: 'Doc',
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') {
              return;
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, '');
              }
            }

            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: 'github-dark-default',
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== 'pre') {
              return;
            }

            preElement.properties.__withMeta__ =
              node.children.at(0).tagName === 'div';
            preElement.properties.__rawString__ = node.__rawString__;

            if (node.__src__) {
              preElement.properties.__src__ = node.__src__;
            }

            if (node.__event__) {
              preElement.properties.__event__ = node.__event__;
            }

            if (node.__style__) {
              preElement.properties.__style__ = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            ariaLabel: 'Link to section',
            className: ['subheading-anchor'],
          },
        },
      ],
    ],
    remarkPlugins: [remarkGfm, codeImport],
  },
});