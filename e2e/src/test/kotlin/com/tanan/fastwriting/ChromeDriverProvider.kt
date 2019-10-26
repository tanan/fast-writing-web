package com.tanan.fastwriting

import com.codeborne.selenide.WebDriverProvider
import org.openqa.selenium.Dimension
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.openqa.selenium.remote.DesiredCapabilities

class ChromeDriverProvider: WebDriverProvider {

    override fun createDriver(defaultCapabilities: DesiredCapabilities): WebDriver {
        val capabilities = DesiredCapabilities.chrome()
        val options = chromeOptions()
        capabilities.setCapability(ChromeOptions.CAPABILITY, options)

        println("ChromeDriverProvider#createDriver(" + defaultCapabilities.merge(capabilities) + ")")

        val chromeDriver = ChromeDriver(defaultCapabilities.merge(capabilities))
        chromeDriver.manage().window().size = Dimension(1920,2048)
        return chromeDriver
    }

    private fun chromeOptions(): ChromeOptions {
        val options = ChromeOptions()
        options.addArguments("--no-sandbox")
        options.addArguments("--disable-dev-shm-usage")
        options.setExperimentalOption("prefs", mapOf("intl.accept_languages" to "ja"))
        options.addArguments("disable-infobars")
        return options
    }
}