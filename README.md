
## SNAKE: MULTIPLAYER CLIENT DEVELOPMENT  

### INTRODUCTION
##### ** Project Overview **
Contained here is multiplayer version of a traditional/popular snake video game. This project was inspired by the snake video game that was created by Tania Rascia and named "Snek".  Snek is a single player game and employs both a game server and code that makes up a game client.     
  
In this project, a multiplyyer version of the game is created, where the project's focus and scope was limited to building a new game client.  This new game client employs and connects to the server that was previously developed and deployed by Tania in her project Snek.  Links to Tania's website and her Snek project are provide here.  
  - [Tania Rascia](https://www.taniarascia.com/).
  - [Snek](https://store.steampowered.com/app/765590/Coop_SNEK_Online/) 

*(Please note that this project is part of the curriculum and one of several projects that student's are required to complete as part of their participation in Lighthouse Lab's Web Development Flex Program curriculum.)*


### SNAKE VIDEO GAME 

##### ** Game Overview **
A video game based on the concept of maneuvering a snake existed and been popular for a long time.   

In most of the implementations of the concept, a player is required to maneuver a snake within a relatively small area and towards a small area or a dot.  When the head of the snake overlaps the dot, the snakes increases in size.  Each dot represents a pieces of food, and the snake grows each time it eats.

##### ** Challenges Presented to Players **
As the player's snake continues to move and eat, it continues to grow and take up more and more of the area allotted by the game. The relatively small size of the area and the snake's own size begins to becomes obstacles to its maneuvering. In most versions of the game, the game places a condition on the player/snake that does not allow bumping into the side walls or into itself.  Doing so, results in the player loosing the game.  

##### ** Ultimate Goal of Game **
As most implementations of the game involve a single player, the goal of the game then becomes to eat as much as possible and grow as big as possible without and before bumping into the side walls or into itself.  

### MULTIPLAYER VERSION OF GAME

Within the scope of this project, students were to create a multiplayer version of a snake game.  

##### ** Specific Implementation of Multiplayer ** 
In this case, a multiplayer version each player contains to direct there own snake, however all of the players/snakes are placed within the same game area. The same restrictions apply where players are not allowed to bump into the side walls or into itself.  

There is also an added restriction that players can not bump into each other. Doing so will result in the player also loosing the game.
##### ** Multiplayer Adds Additional Dimension to Game Play **
  

Multiple players and the same  restriction bring a new dimension to the game as players are able to interfere (i.e., limit, block, encircle, etc.) with other players individually or in some type of team to gain advantage and be the last snake to exit the game.  

## HOW TO PLAY  - Control Your Snake's Movement 

##### ** Overview of Play  **
Once the server and client are up adn running, you will see the game board and the other players in the game.

You can control your snake by pressing different keys on your keyboard and to move.  
Remember to be careful!  If you bump into the walls, yourself or other players, your snake will die and you will loose the game.  

##### ** Commands to Move Snake **
 - The table below listed the four keys that you can use to move your snake (up, down, left and right).

      |   Key(s)       |  Command              |
      |----------------|-----------------------|
      |  `W`  or  `w`  |   move up             |
      |  `A`  or  `a`  |   move left           |
      |  `S`  or  `s`  |   move down           |
      |  `D`  or  `d`  |   move right          |
      

##### ** Commands to Send Messages **
 - You can also send a couple of 'canned' messages that will display on all players' screen.  
 - The two keys and the messages that will be displayed are detailed below.  

      |   Key(s)       |  Canned Message        |
      |----------------|------------------------|
      |  `V`  or  `v`  | `Hit 'V' for Victory`  |
      |  `X`  or  `x`  | `You're going to lose` |
      

##### ** Command to Exit Game **
- Typing `ctrl + c` will allow any player to exit the game they are currently playing. 



## INITIAL INSTALL / GETTING SETUP 
## Getting Started
As the game has both a server and client, prior to playing the game for the first time, you are required to download the both repositories and setup both the server and client up on your local machine.

You need to have two separate instances of terminal running -  
one to run the server and one to run the client.  

##### ** Client **
  - This repository contains all the code required for the multiplayer client 
  - Clone or download the client repository 
  - ensure you are in the correct directory (main project directory - snake)
  - In its own instance of terminal - start the client using the command `node play.js`

##### ** Server **
  - Server's code and installation instructions can be downloaded from [here](https://github.com/lighthouse-labs/snek-multiplayer).
  - Follow the specific directions detailed in this downloaded repo.
  - install the necessary dependencies using `npm install`.
  - ensure you are in the server's main directory (snek-multiplayer)
  - In its own instance of terminal - start the server using the command `node play.js`

##### ** Dependencies **
- Node.js
- Net module