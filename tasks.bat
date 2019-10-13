@ECHO OFF

SETLOCAL

SET PATH=%PATH%;C:\Users\bedna\scoop\apps\allure\2.13.0\bin
SET PATH=%PATH%;D:\Software Testing\Projects\webdriverio-test\node_modules\.bin

wdio wdio.conf.js && allure generate --clean ./allure-results && allure serve