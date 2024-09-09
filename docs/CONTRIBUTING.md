# Contributing

## Code Style Guidelines

Please ensure you follow the [code style guidelines](./CODE_STYLE.md) when contributing.

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.

## Structure

This repository is structured as follows:

```sh

```

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```sh
git clone https://github.com/your-username/devgrove.git
```

### Navigate to project directory

```bash
cd devgrove
```

### Create a new Branch

```sh
git checkout -b my-new-branch
```

### Install dependencies

```sh
pnpm install
```

#### Examples

1. To run the `devgrove.dev` website:

```sh
pnpm dev
```

## Documentation

You can run the documentation locally by running the following command:

```sh
pnpm dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `src/content/docs` directory.

## Components

We use a registry system for developing components. You can find the source code for the components under `src/registry`. The components are organized by styles

```sh

```

When adding or modifying components, please ensure that:

1. You make the changes for every style.
2. You update the documentation.
3. You run `pnpm build:registry` to update the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention `category(scope or module): message` in your commit message while using one of the following categories:

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `style`: changes that do not affect the meaning of the code
- `refactor`: any code related change that is not a fix nor a feature
- `perf`: a code change that improves performance
- `test`: adding missing tests or correcting existing tests
- `build`: changes that affect the build system or external dependencies
- `ci`: changes to our ci configuration files and scripts
- `chore`: other changes that don't modify src or test files
- `revert`: reverts a previous commit

e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit [conventional commits](https://www.conventionalcommits.org/) or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
