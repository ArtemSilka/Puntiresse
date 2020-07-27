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
class Board < ApplicationRecord
    validates :name, presence: true
    validates :secret, inclusion: { in: [true, false]}

    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :User

    has_many :pins
end
