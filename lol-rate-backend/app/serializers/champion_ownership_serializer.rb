class ChampionOwnershipSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :toy
  attributes :id, :champion_id, :user_id
end
