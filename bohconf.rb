require 'rubygems'
require 'sinatra'

get '/' do
  redirect 'http://www.smartlogicsolutions.com'
end

get '/m' do
  send_file 'public/mobile/index.html'
end

get '/bibbityboh' do
  send_file 'public/index.html'
end

set :public, File.dirname(__FILE__) + "/public"

