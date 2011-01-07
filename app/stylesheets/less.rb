#!/usr/bin/ruby
css_path = "../../public/stylesheets/"
my_less_files = Dir.glob("*.less")
my_less_files.each do |less_file|
  css_file = less_file.gsub(/\.less$/, '.css')
  cmd = "lessc #{less_file} #{css_path}#{css_file}"  
  puts "Converting #{less_file} to #{css_file} using command \n #{cmd}"
  `#{cmd}` 
end  