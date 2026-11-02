import type {Server} from 'bun'


interface User {
    id: number ;
    name: string;
}

interface ApiResponse {
    message : string;
    method : string;
    route : string;
    data? : User | User[]

}

const users : User[] = [{
    id: 1,
    name: 'Ghost'
},
{
    id: 2,
    name: 'host'
},
{
    id: 3,
    name: 'ost'
},
{
    id: 4,
    name: 'st'
}]

const server : Server = Bun.serve({
    port : 3000,
    fetch(req: Request): Response{
        const url = new URL(req.url)
        const method = req.method;


        let response :ApiResponse = {
            message: 'Hello from Bun Server!',
            method: method,
            route : url.pathname
        }

        if(url.pathname === '/'){
            //root route
            if(method ==='GET'){
                response.message = "Welcome to Bun API"
            }else {
                response.message = "method not allowed for this route"
            }
        }else if(url.pathname === '/users') {
            switch(method){
                case 'GET': users
                    response.message = 'fetching all users'
                    response.data = users

                    break;

                    case 'POST': users
                        response.message = 'creating a newusers'
                        response.data = users
                        
                    default:
                        response.message = 'Method not allowed'
                        break;

            }
        }
        return Response.json(response)

    }
})

console.log(`Bun server is running on http://localhost:${server.port}`)