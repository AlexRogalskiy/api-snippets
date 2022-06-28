require 'twilio-ruby'

response = Twilio::TwiML::VoiceResponse.new
response.connect(action: 'https://your-action-url.com/', method: 'GET') do |connect|
    connect.conversation(service_instance_sid: 'ISxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
end

puts response
