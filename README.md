# Enjoy with my usefull templates

This schematics consists of following templates:
- component - basic Angular standalone component with template, scss, spec (with component injected as provider)

### How to use this app

- Download this repo to any catalogue
- run `npm install`
- run `npm run build`
- Run `generate-component` command form package.json

### How to use this app in an existing project

- Download this repo to your root project folder
- In root project path write `schematics ./my-templates:component --dry-run=false`
- Tip: you can add this command to your package.json

### Useful sources
- https://morioh.com/p/e2e00c50cd7e <- to build such app from scratch
- https://github.com/angular/angular-cli/tree/main/packages/schematics/angular/component - to see how schematics for an Angular Component is constructed

### Useful commands
- `npm install -g @angular-devkit/schematics-cli` - to install schamatics globally
- `schematics blank -name =put-your-own-name` - to initialize schematics project or add new schematic in an existing schematics project collections
- `schematics ./path-to-your-schematic/schematic-folder-name:schematic-name --dry-run=false` - to run a schematic from a custom path

### Documentation

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
