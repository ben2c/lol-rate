User.where(username: "Ben").first_or_create(username: "ben", email:"ben@wow.com", password:"ben")
User.where(username: "Vonnie").first_or_create(username: "vonnie", email:"vonnie@wow.com", password:"vonnie")
User.where(username: "David").first_or_create(username: "david", email:"david@wow.com", password:"david")

Champion.where(name: "Ahri").first_or_create(name: "Ahri", 
    lane: "Middle", 
    url: 'https://i.imgur.com/hYVCQG8.png')

Champion.where(name: "Akshan").first_or_create(name: "Akshan", 
    lane: "Bottom", 
    url: "https://i.imgur.com/vxI9S6b.png")

Champion.where(name: "Alistar").first_or_create(name: "Alistar", 
    lane: "Support", 
    url: "https://i.imgur.com/K2mIk2d.png")

Champion.where(name: "Camille").first_or_create(name: "Camille", 
    lane: "Top", 
    url: "https://i.imgur.com/xzERedX.png")

Champion.where(name: "Cassiopeia").first_or_create(name: "Cassiopeia", 
    lane: "Mid", 
    url: "https://i.imgur.com/YARPPiZ.png")

Champion.where(name: "Diana").first_or_create(name: "Diana", 
    lane: "Jungle", 
    url: "https://i.imgur.com/VrnIkmC.png")

Champion.where(name: "Elise").first_or_create(name: "Elise", 
    lane: "Jungle", 
    url: "https://i.imgur.com/gYHxhzd.png")

    Champion.where(name: "Garen").first_or_create(name: "Garen", 
    lane: "Top", 
    url: "https://i.imgur.com/KGyk0L1.png")
    

=begin

ChampionOwnership.where(user_id: 1, champion_id: 1).first_or_create(user_id: 1, champion_id: 1)
ChampionOwnership.where(user_id: 1, champion_id: 2).first_or_create(user_id: 1, champion_id: 2)
ChampionOwnership.where(user_id: 2, champion_id: 4).first_or_create(user_id: 2, champion_id: 4)
ChampionOwnership.where(user_id: 2, champion_id: 3).first_or_create(user_id: 2, champion_id: 3)
ChampionOwnership.where(user_id: 3, champion_id: 1).first_or_create(user_id: 3, champion_id: 1)

=end

