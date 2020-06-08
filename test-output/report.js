$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Automation/AutomationWorkspace/cucumber_project/src/test/java/features/Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Cogmento CRM Create Contacts",
  "description": "",
  "id": "cogmento-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "lipsita.987@gmail.com",
        "indu123$",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Cogmento CRM Create a new contact scenario",
  "description": "",
  "id": "cogmento-crm-create-contacts;cogmento-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"lipsita.987@gmail.com\" and \"indu123$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 21648473100,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 35621800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lipsita.987@gmail.com",
      "offset": 13
    },
    {
      "val": "indu123$",
      "offset": 41
    }
  ],
  "location": "ContactStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 7110068200,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 41267800,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_is_on_HomePage()"
});
formatter.result({
  "duration": 8559800,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 4448193700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "ContactStepDefination.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 21522238200,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 4636679300,
  "status": "passed"
});
});