require 'test_helper'

class PreviewControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get generate" do
    get :generate
    assert_response :success
  end

  test "should get raw" do
    get :raw
    assert_response :success
  end

end
