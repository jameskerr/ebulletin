class UserController < ApplicationController
  def index
		if params[:approved] == "false"
			@users = User.find_all_by_approved(false)
		else
			@users = User.all
		end
	end
	
	def approve
		user = User.find(params[:id])
		user.update_attributes(:approved => true)
		redirect_to :action => "index", :approved => "false"
	end
end
