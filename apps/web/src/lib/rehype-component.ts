import fs from 'node:fs';
import path from 'node:path';

import { u } from 'unist-builder';
import { visit } from 'unist-util-visit';

import { Index } from '../__registry__';
import { styles } from '../registry/registry-styles';
import { type UnistNode, type UnistTree } from '../types/unist';

export function rehypeComponent() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      // src prop overrides both name and fileName.
      const { value: srcPath } =
        (getNodeAttributeByName(node, 'src') as {
          name: string;
          value?: string;
          type?: string;
        }) || {};

      if (node.name === 'ComponentSource') {
        const name = getNodeAttributeByName(node, 'name')?.value as string;
        const fileName = getNodeAttributeByName(node, 'fileName')?.value as
          | string
          | undefined;

        if (!name && !srcPath) {
          return null;
        }

        try {
          for (const style of styles) {
            let src: string;

            if (srcPath) {
              src = srcPath;
            } else {
              const component = Index[style.name][name];
              src = fileName
                ? component.files.find((file: string) => {
                    return (
                      file.endsWith(`${fileName}.tsx`) ||
                      file.endsWith(`${fileName}.ts`)
                    );
                  }) || component.files[0]
                : component.files[0];
            }

            // Read the source file.
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, 'utf8');

            // Replace imports.
            // TODO: Use @swc/core and a visitor to replace this.
            // For now a simple regex should do.
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              '@/components/',
            );
            source = source.replaceAll('export default', 'export');

            // Add code as children so that rehype can take over at build time.
            node.children?.push(
              u('element', {
                attributes: [
                  {
                    name: 'styleName',
                    type: 'mdxJsxAttribute',
                    value: style.name,
                  },
                ],
                children: [
                  u('element', {
                    children: [
                      {
                        type: 'text',
                        value: source,
                      },
                    ],
                    properties: {
                      className: ['language-tsx'],
                    },
                    tagName: 'code',
                  }),
                ],
                properties: {
                  __src__: src,
                  __style__: style.name,
                },
                tagName: 'pre',
              }),
            );
          }
        } catch (error) {
          console.error(error);
        }
      }

      if (node.name === 'ComponentPreview') {
        const name = getNodeAttributeByName(node, 'name')?.value as string;

        if (!name) {
          return null;
        }

        try {
          for (const style of styles) {
            const component = Index[style.name][name];
            const src = component.files[0];

            // Read the source file.
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, 'utf8');

            // Replace imports.
            // TODO: Use @swc/core and a visitor to replace this.
            // For now a simple regex should do.
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              '@/components/',
            );
            source = source.replaceAll('export default', 'export');

            // Add code as children so that rehype can take over at build time.
            node.children?.push(
              u('element', {
                children: [
                  u('element', {
                    children: [
                      {
                        type: 'text',
                        value: source,
                      },
                    ],
                    properties: {
                      className: ['language-tsx'],
                    },
                    tagName: 'code',
                  }),
                ],
                properties: {
                  __src__: src,
                },
                tagName: 'pre',
              }),
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
