
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# replace <USERNAME> with your GitHub username and <REPO> with your repository name
# For example: git push -f git@github.com:johndoe/my-project.git main:gh-pages
git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
