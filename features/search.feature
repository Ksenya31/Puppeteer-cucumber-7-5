Feature: The first link text Идёмвкино
    Scenario: I open a main page
        Given I open a main "/index.php" page
        Then I sees "Идёмвкино"
      
    Scenario: I Buy tickets
        Given I open a main "/index.php" page
        Then I sees "Идёмвкино"
        Given I open a main "/hall.php" page
        Then I sees "Идёмвкино"
        When click tickets Train arrival 
        Then I sees tickets "Вы выбрали билеты:"

    Scenario: I No Buy tickets
        Given I open a main "/index.php" page
        Then I sees "Идёмвкино"
        Given I open a main "/hall.php" page
        Then I sees "Идёмвкино"
        When no click tickets 
        Then I sees tickets "Train arrival"
    
    Scenario: I Buy tickets
        Given I open a main "/index.php" page
        Then I sees "Идёмвкино"
        Given I open a main "/hall.php" page
        Then I sees "Идёмвкино"
        When click tickets Logan 
        Then I sees tickets "Вы выбрали билеты:"