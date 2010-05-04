require 'rubygems'
require 'sinatra'

get '/' do
  redirect 'http://www.smartlogicsolutions.com'
  #send_file 'public/index.html'
end

set :public, File.dirname(__FILE__) + "/public"

