# swapped this our for mailgun solution when we moved server to Digital ocean

# class Notifier < ActionMailer::Base
#   # default :from => "scott.s.johnson@att.net"
  
#   def request_contact(request)
#     from "system@newsmile.com"
#     subject "Newsmile.com Request Contact"    
#     recipients "erin.newsmile@gmail.com"
    
#     text = "You recieved a request!\n\n"
#     text << "First: #{request.first_name}\n"
#     text << "Last: #{request.last_name}\n"
#     text << "Email: #{request.email}\n"
#     text << "Phone: #{request.phone}\n\n"
#     text << request.content
    
#     body text
#   end
# end
