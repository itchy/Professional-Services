class Notifier < ActionMailer::Base
  # default :from => "scott.s.johnson@att.net"
  
  def request_contact(request)
    from "system@newsmile.com"
    subject "Newsmile.com Request Contact"    
    recipients "7.scott.j@gmail.com"
    
    text = "You recieved a request!\n"
    text << "First: #{request.first_name}\n"
    text << "Last: #{request.last_name}\n"
    text << "Email: #{request.email}\n"
    text << "Phone: #{request.phone}\n"
    text << request.content
    
    body text
  end
end
