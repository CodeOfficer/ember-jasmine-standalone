# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'haml', :output => 'www', :input => 'public' do
  watch('public/index.html.haml')
  watch('public/test.html.haml')
end

guard 'jammit', :base_url => 'http://localhost:9292', :output_folder => 'www' do
  watch(/^public\/javascripts\/(.*)\.js/)
  watch(/^public\/stylesheets\/(.*)\.css/)
end

guard 'shell' do
  watch(/^public\/stylesheets\/(.*)\/images(?!\/embed)(.*)/) do |path|
		existing_path, new_path = path[0], path[0].gsub(/^public/, 'www')
		if File.directory?(existing_path)
			`mkdir -p #{new_path}`
		else
			`cp #{existing_path} #{new_path}`
		end
	end
end
