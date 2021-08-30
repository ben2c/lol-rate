class UserSerializer < ActiveModel::Serializer
  has_many :champions
  attributes :id, :username, :email, :created_at, :updated_at
end