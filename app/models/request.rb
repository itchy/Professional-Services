class Request < ActiveRecord::Base
  validates_presence_of :first_name, :last_name, :content

end
