Feature: Funcionalidad de inicio de Sesion

    Scenario: Inicio de sesion exitoso con usaurio estandar
        Given que Michael esta en la pagina de inicio de sesion
        When inicia sesipn con usuario "standard_user" y contrasena "secret_sauce"
        Then deberia ver la pagina de productos

