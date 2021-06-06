# Childcare Center - React Native application - Expo
This project was created using Expo framework (https://expo.io/).

## How to run this project
```
git clone https://github.com/emrachid/child-care-react-native.git
cd child-care-react-native
npm install
npm start
```

## Main features

1. List of all children in the classroom and their attendance
status.
- Teachers should be able to visualize a list of all children in the
classroom and their attendance status (checked-in or checked-out).

2. Classroom Actions
- Teachers should be able to check-in/check-out children.
- Teachers with multiple classroom permissions should be able to
move children between classrooms.

3. Navigate between classrooms
- Teachers with multiple classroom permissions should be able to
switch between classrooms.

## Development approach

I started the developed of this application planning the UI flow.
First, I checked if the UI meets all the requirements.
Then, I priorized the tasks based on the most important features.
Finaly, I implemented the task following the backlog.

During the development, I changed part of the initial plan.
For example, I was not planning to use Redux in the beginning
because the application is very simple. But, then, I realize that
using Redux made the code cleanner and easier to modify latter.

Unfortunatelly, I did not finish the project. I spent too much 
time to create the screens. However, I followed the tasks priority
and I am pretty satisfied with the results.

Missing requirement: check teacher permissions

Tasks backlog:
- Create a login screen for teachers
- Check if teacher has permission to enter in the room
- Check if teacher has permission to move child to another room
