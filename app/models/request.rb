class Request < ActiveRecord::Base
  validates_presence_of :first_name, :last_name, :content
  validates_presence_of :email, :if => (Proc.new { |request| request.phone.blank? }), :message => "or phone number is required."  
  validates_presence_of :phone, :if => (Proc.new { |request| request.email.blank? }), :message => "or email is required."  

  def post_email
	  RestClient.post "https://api:key-7bf9b1ce6a9361686a732d3b9bc0fd10"\
	  "@api.mailgun.net/v3/sandbox74d962f807484c168ee7be3441ec3cd0.mailgun.org/messages",
	  :from => "New Smile <postmaster@sandbox74d962f807484c168ee7be3441ec3cd0.mailgun.org>",
	  :to => "Erin Knowles <erin.newsmile@gmail.com>",
	  :subject => "Newsmile.com Request Contact",
	  :text => _body
	end

	def _body
		text = "You recieved a request!\n\n"
    text << "First: #{first_name}\n"
    text << "Last: #{last_name}\n"
    text << "Email: #{email}\n"
    text << "Phone: #{phone}\n\n"
    text << content
    return text
	end

end
