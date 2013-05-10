class Job < ActiveRecord::Base
  attr_accessible :archived, :employer, :link, :position, :practice_area, :title
	
	after_initialize :set_defaults
	
	def set_defaults
		self.position ||= Job.count + 1
		self.save
	end
end
