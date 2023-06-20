import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  strings,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { normalize } from 'path';
import { Schema } from './schema';

export function generateComponent(_options: Schema): Rule {
  
  return async (_tree: Tree, _context: SchematicContext) => {
    const movePath = normalize(`output/${strings.dasherize(_options.name)}`);
    const templateSource = apply(
      url('./files'),
      [
        template({
          ..._options,
          dasherize: strings.dasherize,
          classify: strings.classify,
        }),
        move(movePath)
      ]
    );

    return chain([
      mergeWith(templateSource, MergeStrategy.Overwrite)]);
  };
}