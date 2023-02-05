describe('Автотест для https://testqastudio.me/', function () {
    
    it('Поиск тумбочки', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11328 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click ();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').dblclick ();
        cy.wait(1000);
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click ();
        cy.wait(2500);
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg > [x1="6"]').click ();
        cy.get('[href="https://testqastudio.me"]').click ();
        cy.wait(2500);
        cy.get('.post-11341 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click ();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click ();
        cy.wait(1000);
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click ();
        cy.get('.header-right-items > .header-cart > a > .counter').click ();
        cy.wait(500);
        cy.get('.checkout').click ();
        cy.wait(2500);
        cy.get('#billing_first_name').type ('Анастасия');
        cy.get('#billing_last_name').type ('Ярцева');
        cy.get('#billing_address_1').type ('ул. Ивана Бабушкина 11/2');
        cy.get('#billing_address_2').type ('1 подъезд, квартира 3');
        cy.get('#billing_city').type ('Москва');
        cy.get('#billing_state').type ('Москва');
        cy.get('#billing_postcode').type ('117592');
        cy.get('#billing_phone').type ('+79377054914');
        cy.get('#billing_email').type ('jartseva.nastya@yandex.ru');
        cy.wait(500);
        cy.get('#place_order');
        cy.get('#place_order').click ();
        cy.contains('Ваш заказ принят. Благодарим вас.');

    })
})