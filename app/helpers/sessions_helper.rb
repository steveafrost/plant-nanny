module SessionsHelper

  def current_user
    @current_user ||= false
  end
end
