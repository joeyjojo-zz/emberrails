class Product < ActiveRecord::Base
  validates :price, presence: true
  validates :title, presence: true
  validates :description, presence: true
  validates :image_url, presence: true
end
