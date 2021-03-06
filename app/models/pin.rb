# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  url         :string
#  user_id     :integer          not null
#  board_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord
    # validates :title, :user_id, :board_id, presence: true
    validates :title, presence: true
    validate :ensure_photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User,
        # remove after users
        optional: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board,
        # remove after boards
        optional: true

    has_many :board_pins,
        foreign_key: :pin_id,
        class_name: :BoardPin

    has_many :boards,
        through: :board_pins,
        source: :board

    has_one_attached :photo

    def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "is required to create a Pin."
    end
  end

end
