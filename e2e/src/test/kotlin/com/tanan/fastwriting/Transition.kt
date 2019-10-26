package com.tanan.fastwriting

import com.codeborne.selenide.Selenide
import com.thoughtworks.gauge.Step

class Transition {
    @Step("Open Top page")
    fun openTopPage() {
        Selenide.open("/")
    }
}