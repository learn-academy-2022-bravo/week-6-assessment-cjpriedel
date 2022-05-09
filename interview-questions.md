# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key is student_id that links the tables together

  Researched answer: The foreign key is typically the model name followed by "_id"



2. Which RESTful routes must always be passed params? Why?

  Your answer: Any routes that require input or use .find, such as destroy, update or show routes.  

  Researched answer: Show, update and destroy are the routes that always require params so the specific post of data can be edited/deleted. 



3. Name three rails generator commands. What is created by each?

  Your answer: $rails generate resource, $rails generate model, $rails generate migration. The model creates tables, migration pushes new information to the schema, resource creates a model with routes.

  Researched answer: Resource, Model, Scaffold, Controller and Migration are all commands to generate within Rails. Scaffold generates a controller, model and new route, Model creates a table, resource creates models with routes, migration sends new info to the schema, and controller creates a new controller file that can be modified for specific requests.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students    
students#index  (shows all students)

action: "POST"   location: /students       
students#create (makes a new student)

action: "GET"    location: /students/new
students#new (editable form for student)

action: "GET"    location: /students/2  
students#show, shows student #2

action: "GET"    location: /students/2/edit  
students#edit   (generates form to edit student)

action: "PATCH"  location: /students/2 
students#update (updates student #2)

action: "DELETE" location: /students/2
students#delete  (deletes student #2)



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


1) As a user, I can see all the items of my list on the landing page.
2) As a user, I can add an item to my personal list when clicked.
3) As a user, I can navigate from the landing page to my list.
4) As a user, I can return to the landing page from my list.
5) As a user, I can enter a new task to the main list.
6) As a user, I can add the new task to my personal list. 
7) As a user, I can check items on my personal list as completed.
8) As a user, I can delete my list
9) As a user, I can save my list.
10) As a user, I can mark my list as finished and reset it.