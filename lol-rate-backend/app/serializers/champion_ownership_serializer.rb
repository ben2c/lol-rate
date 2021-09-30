class ChampionOwnershipSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :champion
  attributes :id, :champion_id, :user_id
end
