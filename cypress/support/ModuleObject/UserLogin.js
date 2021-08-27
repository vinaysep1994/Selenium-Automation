class UserLogin
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
        return cy.get('.w-full.btn.btn-blue')
    }

}
export default UserLogin; 