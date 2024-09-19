# Raven Design System

[![npm](https://img.shields.io/npm/v/@carletonuniversity/rds)](https://www.npmjs.com/package/@carletonuniversity/rds) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://github.com/storybooks/storybook) ![Repo Size](https://img.shields.io/github/repo-size/cuweb/rds)

Raven Design System, better known as RDS, is Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language.

## Technologies Used

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

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

## Component Testing

Run Storybook and Cypress concurrently

```
npm run test
```

You can also run Storybook and Cypress individually by using the following commands in different terminal windows:

- Run Storybook - `npm run storybook`
- Run Cypress - `npx cypress Open`

### Other Commands

- Run tests in terminal while storybook is being launched - `npm run test:ci`

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
