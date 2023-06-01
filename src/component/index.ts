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
import { normalize } from 'path';

export function generateComponent(_options: any): Rule {
  return async (_tree: Tree, _context: SchematicContext) => {

    const movePath = normalize('output/components');
    const templateSource = apply(url('./files'), [
      template({..._options}),
      move(movePath)
    ]);

    return chain([mergeWith(templateSource, MergeStrategy.Overwrite)]);
  };
}