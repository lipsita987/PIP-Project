package stepDefination;


import java.awt.AWTException;
import java.awt.Robot;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class ContactStepDefination {

	 WebDriver driver;

	@Given("^user is already on Login page$")
	public void user_is_already_on_Login_Page() {		
		WebDriverManager.chromedriver().version("80.0.3987.106").setup();
		System.getProperty("webdriver.chrome.driver", "F:\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://freecrm.co.in/");			
		driver.manage().window().maximize();
		Robot r;
		try {
			r = new Robot();
			r.mouseMove(0,0);
		} catch (AWTException e) {
			e.printStackTrace();
		}		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^Title of login page is Cogmento CRM$")
	public void title_of_login_page_is_Cogmento_CRM() {		
		String title = null;
		try {
			title = driver.getTitle();
		} catch (Exception e) {
			e.printStackTrace();
		}
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
		public void user_enters_username_and_password(String username, String password) {
			driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
			driver.findElement(By.name("email")).sendKeys(username);
			driver.findElement(By.name("password")).sendKeys(password);
			
			}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);

	}

	@Then("^User is on HomePage$")
	public void user_is_on_HomePage() {
		String title = driver.getTitle();
		Assert.assertEquals("Cogmento CRM", title);
		
	}
	
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() throws InterruptedException {	
	
			driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();		
		
	}
	
	
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String firstname, String lastname, String position) {

		
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//button[contains(text(),'New')]"))));
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		
	  //Added this code to resolve site performance issue
				
		do {
			driver.navigate().refresh();
			} while(driver.findElements(By.name("first_name")).isEmpty());
		
		driver.findElement(By.name("first_name")).sendKeys(firstname);		
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.name("position")).sendKeys(position);
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();			
					
					
	}	

	@Then("^Close the browser$")
	public void close_the_browser()  {
		
        driver.findElement(By.xpath("//*[@role='listbox']")).click();
		driver.findElement(By.xpath("//span[contains(text(),'Log Out')]")).click();
		
		driver.close();
		driver.quit();	

}
}
