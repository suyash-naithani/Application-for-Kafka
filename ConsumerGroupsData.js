const kafka = require('kafka-node');
const client = new kafka.KafkaClient();
const admin = new kafka.Admin(client); // client must be KafkaClient
const express = require('express')
const app = express()
const port = 3000
var consumerGroupsList =[]
var consumerGroupsData = {};
let count =0;

module.exports.consumerGroupsInfo =  function(){


  admin.listGroups((err, res) => {
  consumerGroupsList=Object.keys(res)
consumerGroupsList.forEach(consumerGroup => {
admin.describeGroups([consumerGroup], (err, res) => {
  //console.log(JSON.stringify(res,null,1));
  //consumerGroupsList=res;
   consumerGroupsData[count] = res;
   //console.log(consumerGroupsData);
   count+=1;
})
})

})

//console.log(consumerGroupsData)
return consumerGroupsData
}

/*result()
app.get('/', (req, res) => {
  res.send(result())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/



