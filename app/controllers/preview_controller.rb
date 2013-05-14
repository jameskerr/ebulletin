class PreviewController < ApplicationController
	include PreviewHelper
	require 'premailer'
	
	before_filter :issue_number
	before_filter :inline_css, :except => [:index]
	
	def index
		@stories = Story.order(:position).all
		@jobs 	 = Job.order(:position).all
  end

  def generate
		render :text => @html
	end

  def raw
		render :layout => 'no_assets'
  end
	
	def download
		file_name = today
		fout = File.open("tmp/#{file_name}.html", "w")
		fout.puts @html.html_safe
		fout.close
		send_file("tmp/#{file_name}.html")
	end
end

