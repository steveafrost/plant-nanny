require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should require a email' do
    expect(FactoryGirl.create(:user, :email => nil)).to be_invalid
  end

  it 'should require a password' do
    expect(FactoryGirl.create(:user, :password => nil)).to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Password can't be blank")
  end

  it 'can visit their profile' do
    visit('/profile')
    expect page.status_code.should be 200
    expect page.should have_content('Hello #{@user.name}')
  end
end
