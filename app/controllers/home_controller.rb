class HomeController < ApplicationController
  def index
    
  end

  def doctor
    
  end

  def service
    @service = params[:service] || "Implants"
    @service.capitalize!
  end
  
  def finance
    
  end
  
  def contact
    
  end

end
