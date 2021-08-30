class ChampionSerializer < ActiveModel::Serializer
  has_many :users
  attributes :id, :name, :lane, :url
end