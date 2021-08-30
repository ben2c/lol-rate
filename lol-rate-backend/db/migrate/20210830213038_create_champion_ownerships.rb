class CreateChampionOwnerships < ActiveRecord::Migration[6.0]
  def change
    create_table :champion_ownerships do |t|
      t.integer :champion_id
      t.integer :user_id

      t.timestamps
    end
  end
end
