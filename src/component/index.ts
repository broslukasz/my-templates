import {
  chain,
  MergeStrategy,
  mergeWith,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { Schema } from './schema';
import { createTemplatesRule } from './rules/create-templates.rule';

export function generateComponent(_options: Schema): Rule {
  
  return async (_tree: Tree, _context: SchematicContext) => {
    return chain([
      mergeWith(createTemplatesRule(_options.name), MergeStrategy.Overwrite)]);
  };
}