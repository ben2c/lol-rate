class User < ApplicationRecord
  has_secure_password
  has_many :champion_ownerships, dependent: :destroy
  has_many :champions, through: :champion_ownerships
end
