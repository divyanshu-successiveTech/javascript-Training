# javascript-Training

#12 factor app

It gives us set of principles or best practices on how a web-app should be made that are now more commonly known as Software-as-a-service(SAAS)

The 12 factors are :-
1- CodeBase
It says that every app should only have a single codebase (where the code is written) that is available at only one place and the changes should be tracked using version control systems like git to maintain the code.

2- Dependencies 
It says that while developing the app we should explicitly mention all the dependencies ,their version and other important info so that the developer is free form the task of managing the dependencies manually and save time.

3- Configuration
It says that the codebase and configuration for the app should be completely seperate from each other. configurations like db credentials ,path,URL should be stored in environment variables as the enveironament variabes may change depending upon the environment like dev,test,prod etc .

4- Backing Services
It states that any external service used by the app over the network like database,cache etc. ,these should be treated as attached resource and can be changed without altering the application code.

5- Build, release and run
It states that the deployement of the application should be in 3 stages namely build,release and run,

-Build stage requires changes in codebase and gives a artifact at the end that is the compilation of the entire code till now .
-Release stage refers to adding the key cofigurations for a particular environement like api keys,db credentials etc .
-Run stage refers to running the artifact from the above stage ,here in this stage the codebase should not be changed any changes required should be addresed by making a new release.

6- Process
It refers to the way of application are executed ,focusing on statelessness and running multiple processes and do not store any data locally but in a database that is managed externally .

7- Port Binding 
It states that an application's services are accessed by their port number and does not require any server to listen to requests.

8- Concurrency
An application must be divided into smaller multiple processes rather than one large process.This feature is needede when we need to scale the application.

9- Disposability
An application muyst be robust i.e it should be able to start and end a process completely that does not affect the overall functionality of the application.

10- Dev/prod parity
It means that the development and production environment must be as similar as possible. 

11- Logs
It refers that any event should be logged to the standard output stream and environemnt is responsible for the management of such logs.

12- Admin processes
It says that management tasks should be executed as separate, short-lived processes, distinct from the main application so that nothing form the main application is compromised.


#Atomic design 

It is a methodology that is used when making a ui for a webpage it should be broken down into simpler re-usable,modular components.

It can be broken down into :-

Atoms:-Smallest UI elements like button,textfield etc .
Molecules:-Combination of atoms that form a block of UI.
Organisms:-Complex UI sections like a header, footer etc.
Templates:-These provide a structure for the webpage without any actual content.
Pages:-It is a fully populated template with complete data that is ready for user interaction.

#Git vs GitHub

Git is a software tool or a version control tool that allows us to track changes to our codebase overtime ,that and helps us to manage different versions of the project .
It can work locally on the machine and the changes to the project can be commit without any need for internet coinnction.

GitHub is a web based service that is used to host and store git repositiories and this repositories can be shared with others and can be used to collaborate with others.

#Git config

It is used to some default elements to the git like it uses the user name and mail to label every commit and some other settings that can be scoped into 3 types
-local
-global 
-system

#Git ignore

It tells the git to ignore the given files form every commit and do not store the information from the given files.
it can be used to secure some sensitive,personal information and not upload it to the repository.
