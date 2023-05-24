Feature: pruebas1

  Scenario: pruebas
    Given url 'https://reqres.in/api/users/2'
      When method GET
      And match response.data.first_name == 'Janet'
      Then status 200