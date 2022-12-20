import { rest } from "msw";
// import record from "./record.json" ;

export const handlers = [
    rest.post('/login/',(req,res,ctx) =>{
        sessionStorage.setItem("isAuthenticated", "true")
        console.log(`login. \nisAuthenticated: ${sessionStorage.getItem("isAuthenticated")} @handler`)
        return res(
            ctx.status(200),
        )
    }),

    rest.post('/logout/',(req,res,ctx) =>{
        sessionStorage.setItem("isAuthenticated", "false")
        console.log(`logout.\nisAuthenticated: ${sessionStorage.getItem("isAuthenticated")} @handler`)
        return res(
            ctx.status(200),
        )
    }),

    rest.get('/api/members/',(req,res,ctx) =>{
        return res(
            ctx.status(200),
            ctx.json([
                    {"name":"User A","id":"518213","borrow":4.0,"lend":2309.4},
                    {"name":"User B","id":"830347","borrow":0.0,"lend":0.0},
                    {"name":"User_C","id":"982154","borrow":0.0,"lend":0.0},
                    {"name":"Vistor A","id":"101895","borrow":0.0,"lend":129.3},
                    {"name":"User_D","id":"101924","borrow":29.34,"lend":0.0},
                    {"name":"User_bot","id":"101943","borrow":0.0,"lend":0.0},]
            )
        )
    }),

    rest.get('/api/records/',(req,res,ctx) =>{
        return res(
            ctx.status(200),
            ctx.json(
                [{
                "person": "101924",
                "other_person": "101895",
                "borrow": 0,
                "lend": 66,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "982154",
                "other_person": "830347",
                "borrow": 0,
                "lend": 95,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101895",
                "other_person": "101924",
                "borrow": 0,
                "lend": 61,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "830347",
                "other_person": "101943",
                "borrow": 0,
                "lend": 21,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "830347",
                "other_person": "101924",
                "borrow": 0,
                "lend": 86,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101924",
                "other_person": "830347",
                "borrow": 0,
                "lend": 72,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "830347",
                "other_person": "982154",
                "borrow": 0,
                "lend": 30,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101943",
                "other_person": "830347",
                "borrow": 0,
                "lend": 71,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "982154",
                "other_person": "101943",
                "borrow": 0,
                "lend": 63,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "982154",
                "other_person": "101924",
                "borrow": 0,
                "lend": 47,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101943",
                "other_person": "982154",
                "borrow": 0,
                "lend": 95,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101943",
                "other_person": "101895",
                "borrow": 0,
                "lend": 93,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101924",
                "other_person": "830347",
                "borrow": 0,
                "lend": 74,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101924",
                "other_person": "830347",
                "borrow": 0,
                "lend": 51,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "830347",
                "other_person": "982154",
                "borrow": 0,
                "lend": 91,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101924",
                "other_person": "101895",
                "borrow": 0,
                "lend": 93,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "982154",
                "other_person": "830347",
                "borrow": 0,
                "lend": 52,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "830347",
                "other_person": "101924",
                "borrow": 0,
                "lend": 90,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            },
            {
                "person": "101924",
                "other_person": "830347",
                "borrow": 0,
                "lend": 31,
                "repay": 0,
                "trans_date": 18,
                "complete": false,
                "description": "test purpose"
            }])
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

const recordList = [
    {
        "person": "101924",
        "other_person": "101895",
        "borrow": 0,
        "lend": 66,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "830347",
        "borrow": 0,
        "lend": 95,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101895",
        "other_person": "101924",
        "borrow": 0,
        "lend": 61,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "830347",
        "other_person": "101943",
        "borrow": 0,
        "lend": 21,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "830347",
        "other_person": "101924",
        "borrow": 0,
        "lend": 86,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "830347",
        "borrow": 0,
        "lend": 72,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "830347",
        "other_person": "982154",
        "borrow": 0,
        "lend": 30,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101943",
        "other_person": "830347",
        "borrow": 0,
        "lend": 71,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101943",
        "borrow": 0,
        "lend": 63,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101924",
        "borrow": 0,
        "lend": 47,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101943",
        "other_person": "982154",
        "borrow": 0,
        "lend": 95,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101943",
        "other_person": "101895",
        "borrow": 0,
        "lend": 93,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "830347",
        "borrow": 0,
        "lend": 74,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "830347",
        "borrow": 0,
        "lend": 51,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "830347",
        "other_person": "982154",
        "borrow": 0,
        "lend": 91,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "101895",
        "borrow": 0,
        "lend": 93,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "830347",
        "borrow": 0,
        "lend": 52,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "830347",
        "other_person": "101924",
        "borrow": 0,
        "lend": 90,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "830347",
        "borrow": 0,
        "lend": 31,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "982154",
        "borrow": 0,
        "lend": 73,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101924",
        "borrow": 0,
        "lend": 56,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101895",
        "other_person": "101924",
        "borrow": 0,
        "lend": 31,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101895",
        "other_person": "982154",
        "borrow": 0,
        "lend": 18,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101943",
        "other_person": "101924",
        "borrow": 0,
        "lend": 69,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "830347",
        "borrow": 0,
        "lend": 68,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101895",
        "other_person": "101943",
        "borrow": 0,
        "lend": 48,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "830347",
        "borrow": 0,
        "lend": 72,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101924",
        "borrow": 0,
        "lend": 64,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101895",
        "borrow": 0,
        "lend": 30,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101924",
        "borrow": 0,
        "lend": 72,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "101943",
        "borrow": 0,
        "lend": 44,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "982154",
        "borrow": 0,
        "lend": 93,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "830347",
        "other_person": "982154",
        "borrow": 0,
        "lend": 99,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101943",
        "borrow": 0,
        "lend": 97,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101924",
        "borrow": 0,
        "lend": 70,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101943",
        "other_person": "830347",
        "borrow": 0,
        "lend": 14,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "101943",
        "borrow": 0,
        "lend": 58,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101924",
        "other_person": "982154",
        "borrow": 0,
        "lend": 92,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101943",
        "other_person": "101895",
        "borrow": 0,
        "lend": 91,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "101895",
        "other_person": "101924",
        "borrow": 0,
        "lend": 95,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "830347",
        "borrow": 0,
        "lend": 48,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    },
    {
        "person": "982154",
        "other_person": "101943",
        "borrow": 0,
        "lend": 76,
        "repay": 0,
        "trans_date": 18,
        "complete": false,
        "description": "test purpose"
    }];
