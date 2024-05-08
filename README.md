## LOGIN CREDENTIALS:
growy@green.com / sempreverde

## This is Growy.
Track your goals, cultivate your habits.
Developing sustainable habits is like planting the seeds of success for lush growth, nourishing yourself and the planet. 
With Growy you can set up to 3 types of to-dos: 
-	your habits: weekly activities to be checked everyday, you can track them using the dots, and it restarts after 24h of inactivity;
-	your dailies: one-shot daily activities, after 24h the task returns uncompleted;
-	you to-dos: simple to-dos with a deadline from a calendar.
Each type of activity grants you water, soil, seed points. This points can be spent in your… Garden!

## The Garden
The Garden is the place where every effort becomes reality, the nursery of your good habits: you can spend your points to buy trees and enrich it. And if you get tired, you can cut down and grow others, just as you change and improve yourself.
Happy Growth!

## Behind the scenes.
Next.js + SASS + MongoDB = ❤️
The biggest feaure of this webapp is the Garden. 
1.	The page called GardenPage renders the garden and manage the user's interactions with it: it loads the garden and tree data, it manages interactions on the garden plots to plant or remove trees and the logic to check if the user has the resources needed to plant a tree.
2.	The Plot component, imported in GardenPage, is every single garden’s plot, identified through x and y coordinates. If a Plot is empty, you’ll see an empty grid cell; if it’s full, you’ll see the tree you chose. Clicking on the tree you’ll see the buttons to cut it down or to cancel your action. 
The GradenPage coordinates data retrieval and interaction management, while the Plot component takes care of the visual representation of the individual plots of the garden.
Tree data (name, image URL, cost in water, land and seeds) is retrieved from a json file.

## Development steps
1.	First ideas and design about the needed features as well as first draft layout on Excalidraw.
2.	Settlement of: layout on Figma, logo, color palette, icons, components. Meanwhile we managed backend implementation: schemas (habits, daily, todo, garden, user, userResources), API, user registration and authentication (next-auth).
3.	Frontend implementation with mixins and variables from SASS and Css modules, and backend integration.
4.	Final finishing step: media queries for bigger desktop viewports, animations (framer-motion animation library for React), last colors and font details care.
