# Campaign-To-Connect
The purpose of this project is to create a pop-up form with OptinMonster that replaces the current ‘Campaign to Connect’ page on the uso.org website. The form should contain a drop-down menu with canned messages and an option for the user to write a custom message themselves (250-character limit). The form should also have text input fields for a first name, last name, and an email address (the email address is a required field). The submit button on the form should post the user’s data (names, email address and message) to the Trilogy Hub API. The pop up should display a confirmation message to the user upon submission.

In the current data flow model, once a user submits a form the data is pushed to ‘Postgres Database 1,’ and every 15 minutes, that data is then pushed to the ‘Transaction Data Store SQL.’ Similarly, the data in the Transaction DataStore SQL (from CTC, Anniversary Messages, Email Sign Up, and IMO/IHO) is synced to the Trilogy Hub SQL every 15 minutes.
The proposed pop-form was designed to push the retreived data directly to Trilogy Hub.

![alt text](https://github.com/GeorgeArubi/Campaign-To-Connect/blob/master/Data%20Flow.png?raw=true)

The pop-up form utilized the jQuery validation library and during development it was critical that we figured out the logical sequence that the CTC program should follow. For example, how the JavaScript functions, jQuery functions and validations will interact with each other when the pop-up is launched.
