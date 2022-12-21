// import obj  from "./userList.json"
var obj = require("./userList.json");
var records = {
    record:[]
};

function ranId () {return Math.floor(Math.random()*5 +1)}
const ranAmount = () => {return Math.floor(Math.random()*100 +1)}
let users = obj.userList;

for (let i=0;i<50; i++){
    const nonRepeatId =(randFunc) =>{
        let id1 = randFunc();
        let id2 = randFunc();
        if (id1 === id2){
            return nonRepeatId(randFunc)
        }
        else return [id1,id2];
    }
    const amount = ranAmount();
    const id = nonRepeatId(ranId);

    records.table.push({"person":users[id[0]].id,
    "other_person":users[id[1]].id,
    "borrow":0,
    "lend":amount,
    "repay":0,
    "trans_date":new Date().getUTCDate(),
    "complete":false,
    "description":"test purpose"})
    
}

// records.table.push({"person":users[new ranId()],"other_person":"1018951593187618826","borrow":null,"lend":294.0,"repay":null,"trans_date":"2022-10-26T16:32:10Z","complete":0,"description":"test info"})

var fs = require('fs');
fs.writeFile('record.json',JSON.stringify(records,null,"\t"),(error) =>{
    if(error) console.log(error)
    else {
        console.log("json complete")
    }
})