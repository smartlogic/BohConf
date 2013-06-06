# BohConf Web site

## Developing

Serve the folder with any web server. For example:

```sh
ruby -rwebrick -e\"s = WEBrick::HTTPServer.new(:Port => 9000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start\"
```


## Publishing

Please keep `master` and `gh-pages` in sync. Because this is a "Project Page" not a User or Organization Page, we must use the `gh-pages` branch and not the `master` branch. So, only content on `gh-pages` will be published.

In the future, it would be nice to have a BohConf organization, if we made any other codes we wanted to share.

In the meantime, run these commands / follow these steps (instructions below assume you are working in the root director of the `master` branch):
1. Update the cache (see below): `bin/update-manifest`
2. Add new and modified files to the commit: `git commit -am "<your message>"`
3. Checkout the `gh-pages` branch: `git checkout gh-pages`
4. Merge `master`'s changes in: `git merge master`
5. Go back to `master` so you don't accidentally screw up `gh-pages`: `git checkout master`
6. Publish: `git push`

## Updating the cache

Before committing, run `bin/update-manifest` to update the cache manifest. This will ensure people with an offline copy will get the update. I recommend using a tool like [live](http://github.com/ngauthier/nicks-toolbox/blob/master/live) to run it on file system changes.

Sometimes the appcache gets stuck. In chrome visit [chrome://appcache-internals/](chrome://appcache-internals/) to clear it manually.
