class Notifier < ActionMailer::Base
  default :from => "from@example.com"
  
  def request_contact()
    subject "Newsmile.com Request Contact"
    recipients "scott.s.johnson@att.net"
    
    body  :greeting => "Hello"
  end
end
