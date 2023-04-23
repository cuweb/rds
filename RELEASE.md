# RDS Release Guide

There are several ways to create a release, this doc is based on a Git Flow model managed by [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh).

- GitFlow AVH Git Repo - https://github.com/petervanderdoes/gitflow-avh
- GitFlow Cheatsheet - http://danielkummer.github.io/git-flow-cheatsheet/

## Initial Setup

Install gitflow-avh globally with homebrew:

- `brew install git-flow-avh`

## Setup repo for Git flow

If you're repo isn't already setup for Git flow run the following using the defaults for branch prefix options:

- `git flow init`

## Create an RDS release branch

Starting from the `develop` branch do the following:

- `git pull`
- `git flow release start 0.0.40`

## Update package and changelog

**Note:** this step assumes that all PRs included changelog notes.

- Open `package.json` and update the version number near the top
- Open `CHANGELOG.mdx` and add a release number heading

## Completing the release

- `git add --all`
- `git commit -m "release: 0.0.40"`
- `git flow release finish 0.0.40`

You will be prompted to add notes 3 times.

- First time type `:q!` and hit enter
- Second time type `i`, add the version number and hit `esc`, then type `:wq!` and hit enter
- Third time type `:q!` and hit enter

## Pushing new release

**Note:** you should be on the `develop` branch after finishing the release in Git flow.

- `git push`
- `git checkout main`
- `git push`
- `git push --tags`
