# README

## To manage dependencies

- Ensure you have an up to date version of Node/NPM installed (nodejs.org)
- `npm install` to fetch dependencies

## To develop

- If you have the base branch (the branch which currently contains the latest state from
  which you want to begin; usually `development` but not always) on your local already:
  - `git checkout base_branch_name`
  - `git pull origin base_branch_name`
- Or, if you DO NOT have the base branch on your local already:
  - `git fetch origin base_branch_name`
  - `git checkout base_branch_name
- `git checkout -b new_branch_name`, where the new name is a branch name you haven't used before
- Run `npm run dev` to run a local dev server on `localhost:1234`. This will take over the terminal (you can't use it while this is running,
  start a local server, and autoupdate the view on changes to the source files.
- Make your changes on one screen, watch them be rendered in browser on the other
- When you're done, `CTRL + C` stops the server

## To publish/push

- `npm run build` to build the production copies of the CSS and JS files, so that they can be run on the site
- `git add .` to add any new local files to the Git tracker
- `git commit -am "This is a descriptive message"` to commit all current changes and any new files added in the previous step
- If this is a version that needs to be found by JSDelivr:
  - `git tag 'vx.x.x.x'` with appropriate Xs for the version number you intend.
- `git push origin new_branch_name --tags` to get it onto GitHub
- Open a PR, assign appropriate users, labels, project and milestones. Include links to any affected issues,
  which can be done by starting a line with "Closes #"; available ticket IDs will appear after the octothorpe.
