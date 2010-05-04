use Rack::Static, :urls => ["/"], :root => "public"
run Rack::Static.new
