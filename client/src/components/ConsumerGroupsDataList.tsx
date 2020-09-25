
import React from "react";
import { useFetch } from "react-async"
import {
  Title,
  PageSection,
  DataList
} from '@patternfly/react-core';
import ConsumerGroupDataListHeader from "./ConsumerGroupDataListHeaders"
import { ConsumerGroupsDataListRow } from "./ConsumerGroupsDataListRow"

export interface IConsumerGroupData {
  brokerId: string;
  groupId: string;
  topic: string;
  partition: number;


}
export interface IConsumerGroupResponse {
  count: number
  results: IConsumerGroupData[] | []
}
export default function ConsumerGroupsDataList() {


  const headers = { Accept: "application/json" }
  const { data } = useFetch<IConsumerGroupResponse>("http://localhost:5000", { headers })
  const { results = [] } = data || {}

  const dataList = results.map((consumerGroupData) => ({
    groupId: consumerGroupData.groupId,
    brokerId: consumerGroupData.brokerId,
    topic: consumerGroupData.topic,
    partition: Object.values(consumerGroupData.partition)[0].length

  }));
  const dataListRows = Object.values(dataList)


  return (
    <PageSection>
      <Title headingLevel="h1" size="xl">Consumer Groups Data</Title>
      <br />
      <br />


      <DataList aria-label="Simple data list example">
        <ConsumerGroupDataListHeader />

        {dataListRows.map((row) => 
          <ConsumerGroupsDataListRow  row={row} />
        )}
      </DataList>
    </PageSection>)



}
