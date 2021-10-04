class Login
{
    getUserID()
    {
        return cy.get('#email')
    }
    getPassword()
    {
        return cy.get('#password')
    }
    getSignin()
    {
        return cy.get('.pt-8 > .justify-center')
    }

}
export default Login; 