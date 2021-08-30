class Champion < ApplicationRecord
  has_many :champion_ownerships
  has_many :users, through: :champion_ownerships
end
