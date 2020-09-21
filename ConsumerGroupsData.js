const kafka = require('kafka-node');
const client = new kafka.KafkaClient();
const admin = new kafka.Admin(client);
var consumerGroupsList = []
var consumerGroupsData = {};
let count = 0;

module.exports.consumerGroupsInfo = function () {


  admin.listGroups((err, res) => {
    consumerGroupsList = Object.keys(res)
    consumerGroupsList.forEach(consumerGroup => {
      admin.describeGroups([consumerGroup], (err, res) => {
        consumerGroupsData[count] = res;
        count += 1;
      })
    })

  })

  return consumerGroupsData
}




