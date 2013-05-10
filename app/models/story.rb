class Story < ActiveRecord::Base
  attr_accessible :archived, :body, :call_to_action, :image_name, :link, :position, :title
	after_initialize :set_defaults
	
	def set_defaults
		self.position 			||= Story.count + 1
		self.body 					||= ""
		self.title 					||= ""
		self.image_name 		||= ""
		self.link 					||= ""
		self.call_to_action ||= ""
		self.save
	end
end
