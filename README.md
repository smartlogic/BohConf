# BohConf Web site

## Developing

Serve the folder with any web server. For example:

```sh
ruby -rwebrick -e\"s = WEBrick::HTTPServer.new(:Port => 9000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start\"
```


## Publishing

Please keep `master` and `gh-pages` in sync. Because this is a "Project Page" not a User or Organization Page, we must use the `gh-pages` branch and not the `master` branch. So, only content on `gh-pages` will be published.

In the future, it would be nice to have a BohConf organization, if we made any other codes we wanted to share.
