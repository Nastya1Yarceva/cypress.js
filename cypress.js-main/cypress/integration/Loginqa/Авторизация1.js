describe('Проверка авторизации', function () {
    
    it('Позитивный кейс: верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').should ('not.be.disabled');
        cy.get('#loginButton').click ();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })


    it('Проверка восстановления пароля', function () {
        cy.reload();
        cy.get('#forgotEmailButton').click ();
        cy.get('#mailForgot').type ('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click ();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: верный логин, неверный пароль', function () {
        cy.reload();
        cy.get('#mail').type ('german@dolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type ('iLoveqastudio222');
        cy.get('#loginButton').should ('not.be.disabled');
        cy.get('#loginButton').click ();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс: неверный логин, верный пароль', function () {
        cy.reload();
        cy.get('#mail').type ('jartzeva.nastya@yandex.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').should ('not.be.disabled');
        cy.get('#loginButton').click ();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Проверка валидации', function () {
        cy.reload();
        cy.get('#mail').type ('germandolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').should ('not.be.disabled');
        cy.get('#loginButton').click ();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Проверка приведения к строчным буквам логина', function () {
        cy.reload();
        cy.get('#mail').type ('GERman@dolnikov.ru');
        cy.get('#loginButton').should ('be.disabled');
        cy.get('#pass').type ('iLoveqastudio1');
        cy.get('#loginButton').should ('not.be.disabled');
        cy.get('#loginButton').click ();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})


