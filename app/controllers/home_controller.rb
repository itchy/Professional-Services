class HomeController < ApplicationController
  def index
    
  end

  def doctor
    
  end

  def service
    @service = params[:service] || "Dentures"
    @service_partial= "/home/service/#{@service.split(/\s/)[0]}"
    @service.capitalize!
    
  end
  
  def finance
    
  end
  
  def contact
    @request = Request.new
  end
  
  def send_request
    @request = Request.new(params[:request])
  end

end
