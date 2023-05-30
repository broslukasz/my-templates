import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { join, normalize } from 'path';

export function setupOptions(host: Tree, options: any): Tree {
  options.path = join(normalize('output/components'));
  return host;
}

export function generateComponent(_options: any): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    setupOptions(tree, _options);

    const movePath = normalize(_options.path + '/');
    const templateSource = apply(url('./files'), [
      template({..._options}),
      move(movePath)
    ]);

    return chain([mergeWith(templateSource, MergeStrategy.Overwrite)]);
  };
}