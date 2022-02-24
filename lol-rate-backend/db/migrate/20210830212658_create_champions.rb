class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :lane
      t.string :url

      t.timestamps
    end
  end
end
