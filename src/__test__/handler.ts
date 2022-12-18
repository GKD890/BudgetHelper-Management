import { rest } from "msw";
import record from "./record.json" ;

export const handlers = [
    rest.post('/login/',(req,res,ctx) =>{
        sessionStorage.setItem("isAuthenticated", "true")
        return res(
            ctx.status(200),
        )
    }),

    rest.post('/logout/',(req,res,ctx) =>{
        sessionStorage.setItem("isAuthenticated", "false")
        
        return res(
            ctx.status(200),
        )
    }),

    rest.get('/api/members/',(req,res,ctx) =>{
        return res(
            ctx.status(200),
            ctx.json(userList)
        )
    }),

    rest.get('/api/records/',(req,res,ctx) =>{
        return res(
            ctx.status(200),
            ctx.json(record)
        )
    }),

    rest.get('/api/servers/',(req,res,ctx) =>{
        return res(
            ctx.status(200),
            ctx.json(serverList)
        )
    }),
];


export const userList = 
[{"name":"User A","id":"518213","borrow":4.0,"lend":2309.4},
{"name":"User B","id":"830347","borrow":0.0,"lend":0.0},
{"name":"User_C","id":"982154","borrow":0.0,"lend":0.0},
{"name":"Vistor A","id":"101895","borrow":0.0,"lend":129.3},
{"name":"User_D","id":"101924","borrow":29.34,"lend":0.0},
{"name":"User_bot","id":"101943","borrow":0.0,"lend":0.0},];

const serverList = 
[{"name":"OverWatch-happy time","id":"0029"},
{"name":"Genshin-global","id":"0048"},
{"name":"Web Developer","id":"1367"},
{"name":"Career Finding","id":"8764"},];
