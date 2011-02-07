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
  
  def show
    render(:action => 'index')
  end
  
  def contact
    @request = Request.new
    if params[:content]
      @request.content = "Please send me information about a FREE first visit including exam and x-rays."
    end  
  end
  
  def send_request
    request = Request.new(params[:request])
    if request.valid?
      tmail = Notifier.deliver_request_contact(request)
      # render(:text => tmail)
    else
      render(:action => :contact )
    end    
  end

end
