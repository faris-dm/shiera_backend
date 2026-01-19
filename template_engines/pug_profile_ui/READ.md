### pug:- bug-engine template formal known for Jade,

the main goal of the template is to read and to write html fast by removing tags or syntaxs
it make it easy to write html it uses identation to represent the strcture of the html tags

    #### with bug  you write less border plate codes  and forget about closeing tags
    =  you can usebug  to create    dynamic contenent  with  working server side rendering

    ########  the syntax and  the strcture is more clean  and readable  also simpililer

#### JavaScript with Bug

we can use javascript with pug like embeded method.we can include varables ,expression and control strcture within ppug code

#### easy to use with node and express

###### npm install concurrently --save-dev

the importance of this npm concurrently --save-dev
is act as a manager and allow you to run multiple as aserver and send the request with the sum of them

if concurrent is not found the trimnal will be locked untile the nodemon end the server

    nodemon for backend and tailwind for front  by concerent  you see thr both changes

###### "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon -e js,pug,html server.js",
    "build:css": "npx @tailwindcss/cli -i ./src/input.css -o ./public/style.css --watch",
    "dev": "concurrently \"npm run server\" \"npm run build:css\""

},

server runs nodemon and watch changes
buildcss see changes in the tailwindcss in the pug and use style css to genrate the needed result  
 dev:order the concerance to watch the both files

##### --save-dev

this --save-dev tell the concurrent is Development Dependency :needed only when writing a code
not for Production

app.set("views", "./views");

the need of code is to give the express a path where the template stored
