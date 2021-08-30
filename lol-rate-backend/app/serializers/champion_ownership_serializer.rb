class ChampionOwnershipSerializer < ActiveModel::Serializer
  attributes :id, :champion_id, :user_id
end
