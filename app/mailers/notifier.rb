class Notifier < ActionMailer::Base
  default :from => "from@example.com"
  
  def request_contact(request)
    subject "Newsmile.com Request Contact"
    recipients "scott.s.johnson@att.net"
    
    text = "You recieved a request!\n"
    text << "First: #{request.first_name}\n"
    text << "Last: #{request.last_name}\n"
    text << "Email: #{request.email}\n"
    text << "Phone: #{request.phone}\n"
    text << request.content
    
    body text
  end
end
