# Raven Design System

![npm](https://img.shields.io/npm/v/@carletonuniversity/rds)

Raven Design System, better known as RDS, is Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

## Build Tools

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cypress](https://www.cypress.io/)

## Getting Started

1. In a terminal window open your install location and run the following:

   ```shell
   git clone https://github.com/cuweb/rds.git
   ```

2. Once the clone is complete move into the `RDS` directory and run:

   ```shell
   npm install
   ```

3. Run Storybook

   ```shell
   npm run storybook
   ```

4. Other useful shell commands

- `npm run rebuild` - deletes node modules, package lock and run npm install
- `npm run format` - format files with prettier
- `npm run lint` - check for errors with eslint
- `npm run size` - compare compiled size against pre-defined limit

## Testing Components and End to End Testing

### Start component and e2e tests

Will automaically run the storybook and cypress concurrently

```shell
   npm run test
```

OR

if you want to run them individually you can use the below commands

> [!WARNING]  
> For testig storybook should be running

1. Run storybook

```shell
   npm run storybook
```

2. Running the Cypress test

```shell
   npx cypress Open
```

### Running Cypress Test CI , Run headless / ci tests

```shell
   npm run test:ci
```

## Comment Linting

When adding a commit with a commit you may be blocked if you do not prefix your comment with one of the following types. So a commit should look like: `git commit -m "change: updated spacing around button"`. The prefix requires a colon to separate it from the comment.

- `add` - used when adding something new such as a component, story or test file
- `change` - used when making a change to an existing file in the project
- `deprecate` - used when deprecating code
- `doc` - used when updating something related to documentation
- `fix` - used when fixing an error, warning or something else
- `finish` - used when finishing a feature or fix
- `refactor` - used when refactoring something such as a component or build tool
- `release` - used when preparing a new release
- `revert` - used when revert to a past commit
- `test` - used when making changes relating to testing
- `upgrade` - used when upgrading packages

## Deployment

This project is available as an [NPM Package](https://www.npmjs.com/package/@carletonuniversity/rds).

## How to use in a project

1. Install the package using one of the following command:

   ```shell
   yarn add @carletonuniversity/rds
   npm install @carletonuniversity/rds
   ```

2. Import the css file into your primary css file using:

   ```css
   /* primarycssfile.css */
   @import '../node_modules/@carletonuniversity/rds/dist/index.css';
   ```

   OR

   ```css
   /* primarycssfile.css */
   @import '~@carletonuniversity/rds/dist/index.css';
   ```
