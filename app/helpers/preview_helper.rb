module PreviewHelper
	def inline_css
		logger.debug "I am in the Preview Helper"
		# Get all the locals
		@stories = Story.order(:position).all
		@jobs 	 = Job.order(:position).all		
		# Get the index page as a string
		@html = render_to_string(:action => 'classifieds', :layout => 'generate', :locals => {:stories => @stories, :jobs => @jobs, :issue => @issue})
		# Remove the action divs
		all_action_divs = /<div class="action.*<\/div>/
		# Remove the head
		@html.gsub!(all_action_divs, '')
		head_tag = /<title.*/
		@html.gsub!(head_tag, '')
		# Inline the CSS
		premailer = Premailer.new(@html, :with_html_string => true, base_url: 'http://chapmancso.com')
		@html = premailer.to_inline_css
		
		
		@html
	end
	def today
		t = Time.new
		return t.year.to_s + "-" + t.month.to_s + "-" + t.day.to_s
	end
	def issue_number
		seed = Time.new(2013,05,8)
		seconds_dif = Time.now - seed
		days_dif = seconds_dif.to_i / ( 60 * 60 * 24)
		@issue = (days_dif / 7) + 1
	end
end
