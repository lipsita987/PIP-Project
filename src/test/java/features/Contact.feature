Feature: Cogmento CRM Create Contacts

Scenario Outline: Cogmento CRM Create a new contact scenario

Given user is already on Login page
When Title of login page is Cogmento CRM
Then User enters "<username>" and "<password>"
Then User clicks on Login button
Then User is on HomePage
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser

Examples:
	| username | password | firstname | lastname | position |
	| lipsita.987@gmail.com  | indu123$ | Tom 	  | Peter    | Manager |
	| lipsita.987@gmail.com  | indu123$ | John 	  | Smith   | Developer |
 	| lipsita.987@gmail.com  | indu123$ | Javed	  | Ali   | Tester |
	

	