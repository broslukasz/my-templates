import { normalize } from '@angular-devkit/core';
import { apply, applyTemplates, move, Source, strings, url } from '@angular-devkit/schematics';

export const createTemplatesRule: (name: string) => Source = (name) => {
  const path = `output/${strings.dasherize(name)}`;
  const templateSource = apply(url('./files'), [
    applyTemplates({
      classify: strings.classify,
      dasherize: strings.dasherize,
      camelize: strings.camelize,
      name
    }),
    move(normalize(path)),
  ]);

  return templateSource;
};
