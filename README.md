# League of Legends Rate
### Description
League of Legends Rate is a web application that is built with a Javascript frontend utilizing the React-Redux UI library with a Ruby on Rails API backend.

### Installation
1. Fork and clone the repository to your local directory. 

2. Change directory into lol-rate-backend and start up:
* `cd lol-rate-backend`
* `bundle install`

### Create and seed the database by the following:
* `rake db:create`
* `rake db:migrate`
* `rake db:seed`

3. Run the rails server from localhost:3000
* `rails s`

4. You should see the list of champions and its associated information from the seed at `localhost:3000/api/v1/champions`

5. Navigate to the lol-rate/lol-rate-frontend.
* `cd ../lol-rate-frontend`
* `cd npm start`

6. You should see the application from `localhost:3001`.
 
### How to use application
* Sign up to register as a user.
* Log in as a registered user.
* you can view all the champions.
* Click on my champions to see your profile of favorite champions.
* You can enter new champion's info.
* Click on the Like button to retain your favorite champions. 
* Unlike champions with the unlike button to remove a champion from your profile.
 
 
