require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should require a username' do
    expect (User.new(:email => "")).to be_invalid
  end

  it 'should require a password' do
    expect (User.new(:email => "test", :password => "")).to be_invalid
  end

  it 'can visit their profile' do
    visit('/profile')
    expect page.status_code.should be 200
    expect page.should have_content('Hello #{@user.name}')
  end
end
