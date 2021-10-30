Feature: Admin All Feature Validation

    application Regression
    @Regression
    Scenario: User Addition
    Given I Login Admin
    When I Fill User Details
    And Validate User Addition
    Then Search and Validate user

