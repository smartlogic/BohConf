require 'rubygems'
require 'sinatra'
enable :sessions

MOBILE_BROWSER_REGEX = /(android|ipod|opera mini|blackberry|palm|hiptop|avantgo|plucker|xiino|blazer|elaine|windows ce; ppc;|windows ce; smartphone;|windows ce; iemobile|up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo)/i

get '/' do
  if request.user_agent =~ MOBILE_BROWSER_REGEX and !session[:force_desktop]
    redirect '/m'
  else
    send_file 'public/index.html'
  end
end

get '/m' do
  session[:force_desktop] = nil
  send_file 'public/mobile/index.html'
end

get '/force_desktop' do
  session[:force_desktop] = 'true'
  redirect '/'
end

set :public, File.dirname(__FILE__) + "/public"

