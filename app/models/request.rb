class Request < ActiveRecord::Base
  validates_presence_of :first_name, :last_name, :content
  validates_presence_of :email, :if => (Proc.new { |request| request.phone.blank? }), :message => "or phone number is required."  
  validates_presence_of :phone, :if => (Proc.new { |request| request.email.blank? }), :message => "or email is required."  
end
