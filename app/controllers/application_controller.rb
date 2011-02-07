class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :defaults
  
  def defaults
    date = Date.today
    @footer = "NewSmileTulsa.com " + Date.today.strftime("%m/%d/%Y")
  end
  
end
