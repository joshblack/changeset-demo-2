# changeset-demo

Trying out changesets :eyes:

Checklist:

- [ ] Create your changeset repo
- [ ] Setup your yarn workspace
  - [ ] `.yarnrc.yml` config
  - [ ] package.json
  - [ ] packages folder
  - [ ] `.gitignore`
- [ ] Install `@changesets/cli`

```bash
yarn add @changesets/cli
```

- [ ] Run `yarn changeset init`
- [ ] Update `.changeset/config.json`
  - [ ] Change `baseBranch` to `main`
  - [ ] Change `updateInternalDependencies` to `"minor"`

GitHub Actions

- [ ] Add a `.github/workflows/ci.yml` file
- [ ] Add a `.github/workflows/release.yml` file

[Link](https://github.com/changesets/action)

```yml
# TODO
```

- [ ] Install the [`changeset-bot`](https://github.com/apps/changeset-bot) to your repo

Links & Resources:

- [`changeset/config.json` options](https://github.com/atlassian/changesets/blob/main/docs/config-file-options.md)
- [Automating
  changesets](https://github.com/atlassian/changesets/blob/main/docs/automating-changesets.md)

TODO:

- [ ] Prereleases
- [ ] Nightly / canary releases
- [ ] Linked packages
