describe('Testing app.js', () => {
    it('7 + 8 = 15', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=plus]').click()
        cy.get('[data-cy=eight]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '15')
    })

    it('7 - 8 = -1', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=minus]').click()
        cy.get('[data-cy=eight]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '-1')
    })

    it('7 x 8 = 56', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=multiply]').click()
        cy.get('[data-cy=eight]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '56')
    })

    it('7 / 8 = 0.875', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=divide]').click()
        cy.get('[data-cy=eight]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '0.875')
    })

    it('7 * 8 = 5764801', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=power-of]').click()
        cy.get('[data-cy=eight]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '5764801')
    })

    it('√ 7 = 2.64575131106', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=square-root]').click()
        cy.get('[data-cy=eight]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '2.64575131106')
    })

    it('71 + 12 = 83', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=seven]').click()
        cy.get('[data-cy=one]').click()
        cy.get('[data-cy=plus]').click()
        cy.get('[data-cy=one]').click()
        cy.get('[data-cy=two]').click()
        cy.get('[data-cy=equals]').click()

        cy.get('[data-cy=display]').should('contain', '83')
    })

    it('should reset the display', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy=reset]').click()

        cy.get('[data-cy=display]').should('have.value', '')
    })
})