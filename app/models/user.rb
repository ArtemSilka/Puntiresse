# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    has_many :boards,
        foreign_key: :user_id,
        class_name: :Board

    has_many :pins,
        foreign_key: :user_id,
        class_name: :Board

    has_many :followers,
        foreign_key: :follower_id,
        class_name: :Follow

    has_many :followed,
        foreign_key: :followed_id,
        class_name: :Follow

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private

    def self.generate_session_token
        SecureRandom.base64(64)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
