# Smart Todo List App Design Doc
## Table of Content
- [User Stories & Acceptance Criteria](#user-stories--acceptance-criteria)
- [Information Architecture](#information-architecture)
- [User Flow](#user-flow)
- [ERD](#erd)
- [Planned Routes](#planned-routes)
## User Stories & Acceptance Criteria
| User Story | Acceptance Criteria |
| --- | --- |
| **As a** new user,<br>**I want to** sign up,<br>**So that** I can use the app. | **Given that** I'm on the new user registration page,<br>**When** I fill in my email, password and click the `Register` button,<br>**Then** I can log in with these credentials and start using the app. |
| **As a** logged-in user,<br>**I want to** update my profile,<br>**So that** I can update my user info. | **Given that** I'm logged in and on the `Profile` page,<br>**When** I change my user info and click the `Save` button,<br>**Then** the updated info is shown in the app. |
| **As a** logged-in user,<br>**I want to** add a task,<br>**So that** I can refer to it later AND the app should suggest an appropriate category to label the task. | **Given that** I'm logged in and added text to a task,<br>**When** I click the `Add` button,<br>**Then** the task is added to the list with an auto-populated category label. |
| **As a** logged-in user,<br>**I want to** change the category of a task when it's mis-categorized,<br>**So that** I can refer to it from the correct list. | **Given that** I just added a task and a wrong label is assigned to it,<br>**When** I click on the `label`,<br>**Then** it should show me a dropdown with available options and allow me to choose another one. |
| **As a** logged-in user,<br>**I want to** set the priority of a task,<br>**So that** I can check all my high-priority tasks in one place. | **Given that** I have added tasks with priority = `high`,<br>**When** I click on the `important` tab,<br>**Then** it should show me all the high-priority tasks on the page. |
| **As a** logged-in user,<br>**I want to** mark a task as complete,<br>**So that** I can keep track of my to-dos. | **Given that** I have a to-do item,<br>**When** I click on the checkbox at the beginning of the task,<br>**Then** it should mark the task as complete with a line striked through the title and add the task to the `Done` page. |
| **As a** logged-in user,<br>**I want to** view tasks per their category,<br>**So that** I can better organize them. | **Given that** I have added tasks labeled with the available categories,<br>**When** I click on category tab from the home page,<br>**Then** it should show me all the tasks with that label on the page. |


## Information Architecture
![ia](images/information-architecture.png)
## User Flow
![user flow](images/user-flow.png)
## ERD
![ERD](images/erd.png)

## Planned Routes
| Method | Route | Description
| ---       | ---              | ---                 |
| `GET`     | `/`              | Get home page       |
| `GET`     | `/register`      | Get sign up page    |
| `POST`    | `/register`      | Create new user     |
| `GET`     | `/login`         | Get login page      |
| `POST`    | `/login`         | Login user          |
| `GET`     | `/users/:id`     | Get user by id      |
| `POST`    | `/users`         | Create new user     |
| `PUT`     | `/users/:id`     | Edit user info      |
| `DELETE`  | `/users/:id`     | Delete account      |
| `GET`     | `/tasks`         | Get all tasks       |
| `GET`     | `/tasks/:id`     | Get task by id      |
| `POST`    | `/tasks`         | Create new task     |
| `PUT`     | `/tasks/:id`     | Edit task info      |
| `DELETE`  | `/tasks/:id`     | Delete task         |
| `GET`     | `/priorities`    | Get all priorities  |
| `GET`     | `/priorities:id` | Get priority by id  |
| `GET`     | `/labels`        | Get all labels      |
| `GET`     | `/labels/:id`    | Get label by id     |
| `POST`    | `/logout`        | Logout user         |

## Wireframes 
### Welcome Page:
![welcome page](images/welcome-page.png)
### Login Page:
![login page](images/login-page.png)
### Register Page:
![register page](images/register-page.png)
### Home Page:
![home page](images/home-page.png)
### Profile Page:
![profile page](images/profile-page.png)
### Add a New Task:
![add new task](images/add-new-task.png)
