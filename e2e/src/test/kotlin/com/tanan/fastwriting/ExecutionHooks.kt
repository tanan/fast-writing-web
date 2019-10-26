package com.tanan.fastwriting

import com.codeborne.selenide.Condition.visible
import com.codeborne.selenide.Configuration
import com.codeborne.selenide.Selenide.*
import com.codeborne.selenide.Selenide.switchTo
import com.codeborne.selenide.WebDriverRunner
import com.natpryce.konfig.ConfigurationProperties
import com.thoughtworks.gauge.AfterScenario
import com.thoughtworks.gauge.BeforeSuite

class ExecutionHooks {

    val config = ConfigurationProperties.fromResource("uat.properties")

    @BeforeSuite
    fun setUp() {
        ConfigurationProperties.fromResource("uat.properties")
                .list()
                .forEach {(l, m) -> m.forEach {(k, v) -> System.setProperty(k, v)}}
        println(System.getProperties())
        Configuration.timeout = 20000
        Configuration.fastSetValue = true
    }

    @AfterScenario
    fun teardown() {
//        logout()
        WebDriverRunner.closeWebDriver()
    }

    private fun logout() {}
}