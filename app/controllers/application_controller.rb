class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  before_filter :set_current_user

  def set_current_user
    User.current = current_user
  end
end
