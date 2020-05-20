package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber; 


@RunWith(Cucumber.class)
	@CucumberOptions(
			
			features = "F:/Automation/AutomationWorkspace/cucumber_project/src/test/java/features/Contact.feature", //the path of the feature files
			glue={"stepDefination"} ,	
			monochrome = true, //display the console output in a proper readable format
			strict = true,   //it will check if any step is not defined in step definition file
			dryRun =false, //to check the mapping is proper between feature file and step def file			
            format= {"pretty","html:test-output","json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}   
			// generate different types of reporting		

		)
	 
	public class TestRunner {
	 
	
	

}
