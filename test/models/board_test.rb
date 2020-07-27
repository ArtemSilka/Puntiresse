# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  secret      :boolean          default(FALSE), not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
