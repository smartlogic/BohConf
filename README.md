# BohConf Web site

## Developing

Serve the folder with any web server. For example:

```sh
ruby -rwebrick -e\"s = WEBrick::HTTPServer.new(:Port => 9000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start\"
```
