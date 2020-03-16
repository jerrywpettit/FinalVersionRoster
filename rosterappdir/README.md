# Engineer Roster Application

Directory structure and files prior to installation of the dependicies:

/rosterappdir
    index.html
    roster.js
    README.MD
    package.json
    style.css
    restore.bat
    startserver.bat
    employee.json
    employeetest.json
    /bin
        app.js 
        
Installation:
After installing the rosterappdir file containing the above files, Navigate to /rosterappdir and execute the following shell commands to install dependencies:

npm init -y
npm install --save inquirer fs
npm install -g ./
npm install -g json-server

The /bin/app.js program is a command line program to collect information about an engineering team.  To start this program go to the command line terminal, navigate to /rosterappdir and execute the following shell command:

rosterapp

This will launch the program without you having to type:  node bin/app.js.  
if this fails look at your package.json file and make sure it looks like this:

{
  "name": "rosterappdir",
  "version": "1.0.0",
  "description": "Directory structure and files prior to installation of the dependicies:",
  "main": "bin/app.js",
  "bin": {
    "rosterapp": "bin/app.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "fs": "0.0.1-security",
    "inquirer": "^7.1.0"
  },
  "devDependencies": {},
  "directories": {
    "lib": "lib"
  }
}

Especially notice:
 "bin": {
    "rosterapp": "bin/app.js"
  },

This part of the package.json file assigns "rosterapp" as a substiture for typing "node bin/app.js".  This was put into effect when you executed:  npm install -g ./ 

The  'npm install -g json-server'  command installed json-server which we will use to host the employee.json file created by the app.js program.

app.js is the command line interface (CLI) application we created to load employee data and save it to the employee.json file.  the employee.json file is then used by our index.html/rostersrc.js program to produce an HTML employee roster of variable size, depending on the number of employees in the employee.json file.  We achieve this dynamic flexibility by using an HTML template and javascript looping through the employee.json file.

When using the app.js (CLI) program, The first data item to be collected is the Role of the employee.  This value is used to control subsequent behavior of the program, such as whether or not to ask certain questions of certain Role members.  Therefore, this item is not left to the user to type the data in, but rather use the arrow key to select from a list.  This elimiuates the risk of misspelling and thus causing the program to malfunction.  This is the only "list/choices" data entry type, the other types are all "input" types.

From your terminal program, you should always navigate to the rosterappdir working directory before starting the program so the files created will be in the correct place.  The program executes a recursive loop that allows you to input employee information until you indicate you are finished by pressing "n" at the continue prompt.

The program will remind you to execute  'json-server employee.json'  before opening index.html in the browser to see the results.  The system will also offer a quick tip for starting json-server.  At the Command Prompt simply execute: startserver    If using Windows PowerShell precede the command with ./  like this:  ./startserver   Linux, execute the full shell command as given.


If you want to run the CLI program again to load in a new set of employees, stop the server with ctrl-c, run the CLI again entering your new set of employees.  Then, as alwyays, the program will remind you to fire up the server with the command: "json-server employee.json" (or use quick tip method: "startserver").  When you open index.html or refresh your browser, the new inputs will be reflected.

To edit the file to make changes, from the terminal simply execute:

notepad employee.json   For Linux use your favoite text editor.  Be sure to take advantage of the slider at the bottom of the editor to get easy access to items on the far right of the file.

Testing tip: to quickly restore the employeetest.json file to employee.json, from the Windows Command prompt execute:  restore    If using PowerShell use: ./restore.  If using Linux, use cp command.


 



  