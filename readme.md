# The Odin Project Assignment 11 : A ToDo List

## Assignment 
https://www.theodinproject.com/lessons/node-path-javascript-todo-list

## Goals



## Summary of Learning
* More practice with React Hooks.  
 Settings hooks as the same array... `[...toDoLibrary] ` was an interesting problem.
* made keys using `date.now()`
* Made a transition animation.  AND IT WORKED!  set the original class with the transition timing and added the transform class.   


### Notes to Self

**12/12/22** 
finished with basic usage.  user can add and remove items from the list.
right now, really long tasks cause the whole box to change shape. It's ok but box needs to be standard in shape.  

Also, when removed, if you click a bunch at once, it will redraw after 1 sec, halting animation.

need to plan for next steps.  What else to add?

How to make this bigger?  
CRUD - Creates new tasks.  reads them.  Deletes them
NEED TO UPDATE / Alter  How?   select the div and find that one in the library array.  Change the name to new name.    not too bad.
Visually how?   a different formik form?   ick... maybe that's it.  OR, copy the one in use?

If I make the form similar in shape / style to the final product, it can make style problems easier to solve. 

also!  Change the TAB ICON.  

assignment calls for : 
title, description, dueDate, priority, notes and checklist.

can I make what I have as an accordion folder? click on it, and it opens and shows further details?   think about using tranform?   

can I change task color?   

Assignment also calls for separate TODO lists for different projects. 
insert the taskfactory within other libraries?   
Or keep 1 master library, but each item has a project identity.  select project, only display those tasks.   



Inspiration : 

https://mooniidev.github.io/todo-list/ - simple design.   