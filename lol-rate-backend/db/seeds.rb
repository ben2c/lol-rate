User.where(username: "Barbara").first_or_create(username: "Barbara", email:"barbara@test.com", password:"password")
User.where(username: "Eric").first_or_create(username: "Eric", email:"eric@test.com", password:"password")
User.where(username: "Drew").first_or_create(username: "Drew", email:"drew@test.com", password:"password")

Toy.where(name: "Rubik's Cube").first_or_create(name: "Rubik's Cube", 
    description: "3D combination puzzle", 
    url: 'https://www.toyhalloffame.org/sites/www.toyhalloffame.org/files/toys/square/rubiks-cube.gif')

Toy.where(name: "My Little Pony").first_or_create(name: "My Little Pony", 
    description: "Ponies with colorful hair", 
    url: "http://mylittlewiki.org/w/images/5/59/Rainbowdash1.jpg")

Toy.where(name: "Speak & Spell").first_or_create(name: "Speak & Spell", 
    description: "Electronic toy by T.I. to teach spelling", 
    url: "http://www.retroland.com/wp-content/uploads/2011/12/Speak-and-Spell.jpg")

Toy.where(name: "Rock 'Em Sock 'Em Robots").first_or_create(name: "Rock 'Em Sock 'Em Robots", 
    description: "Red and blue boxing robots", 
    url: "http://www.retroland.com/wp-content/uploads/2012/02/Rock%E2%80%99em-Sock%E2%80%99em-Robots.jpg")

Toy.where(name: "Cabbage Patch Kid").first_or_create(name: "Cabbage Patch Kid", 
    description: "Baby dolls born in a cabbage patch who needed to be adopted", 
    url: "http://www.retroland.com/wp-content/uploads/2012/06/Cabbage-Patch-Kids.jpg")

Toy.where(name: "Commodore VIC-20").first_or_create(name: "Commodore VIC-20", 
    description: "8-bit computer", 
    url: "http://oldcomputers.net/pics/vic20.jpg")

Toy.where(name: "LEGO").first_or_create(name: "LEGO", 
    description: "Building blocks that are painful to step on", 
    url: "https://www.toyhalloffame.org/sites/www.toyhalloffame.org/files/toys/square/lego_0.png")



ToyOwnership.where(user_id: 1, toy_id: 1).first_or_create(user_id: 1, toy_id: 1)
ToyOwnership.where(user_id: 1, toy_id: 2).first_or_create(user_id: 1, toy_id: 2)
ToyOwnership.where(user_id: 2, toy_id: 4).first_or_create(user_id: 2, toy_id: 4)
ToyOwnership.where(user_id: 2, toy_id: 1).first_or_create(user_id: 2, toy_id: 1)
ToyOwnership.where(user_id: 3, toy_id: 1).first_or_create(user_id: 3, toy_id: 1)


