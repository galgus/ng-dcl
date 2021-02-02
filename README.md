# @galgus/ng-dcl

## Build Release

1. Run `npm version` to update **package.json** and **package-lock.json**

   ```bash
   npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
   ```

2. Run `npm run packagr` to compile project

   ```bash
   npm run packagr
   ```

3. Login to [Github Packages](https://docs.github.com/es/packages/guides/configuring-npm-for-use-with-github-packages)

   ```bash
   npm login --scope=@OWNER --registry=https://npm.pkg.github.com

    > Username: USERNAME
    > Password: TOKEN
    > Email: PUBLIC-EMAIL-ADDRESS
   ```

4. Move to `dist/` directory and publish NPM package

   ```bash
   cd dist/

   npm publish
   ```
