class Champion < ApplicationRecord
  has_many :champion_ownerships, dependent: :destroy
  has_many :users, through: :champion_ownerships
end
