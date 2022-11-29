declare module '@ioc:Adonis/Core/Request' {
    interface RequestContract {
        loggedInUser?: { id: number, email: string, password: string };
    }
 }