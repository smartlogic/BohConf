require 'rubygems'
require 'sinatra'

get '/' do
  redirect '/index.html'
end

set :public, File.dirname(__FILE__) + "/public"
run Sinatra::Application
