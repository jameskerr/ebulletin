$:.unshift(File.expand_path('./lib', ENV['rvm_path']))

require "bundler/capistrano"
require "rvm/capistrano"

set :rvm_ruby_string, 'ruby-2.0.0-p0'

set :application, "Ebulletin"
set :repository,  "https://github.com/jkerr838/ebulletin"

set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "74.80.225.26"                          # Your HTTP server, Apache/etc
role :app, "74.80.225.26"                          # This may be the same as your `Web` server
role :db,  "74.80.225.26", :primary => true # This is where Rails migrations will run

set :user, "deployer"
set :deploy_to, "/var/www/#{application}"
set :deploy_via, :remote_cache
# set :use_sudo, false

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
    task :start do ; end
    task :stop do ; end
    task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
   end
end