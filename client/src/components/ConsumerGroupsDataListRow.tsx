import React from "react";
import {
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
} from '@patternfly/react-core';
import { IConsumerGroupData } from "./ConsumerGroupsDataList"

export interface IRowData {
  row: IConsumerGroupData
}

export const ConsumerGroupsDataListRow: React.FunctionComponent<IRowData> = ({ row }) => {

  return (
    <DataListItem aria-labelledby="Data List Row">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell isFilled={false} >
              <span >{row?.groupId}</span>
            </DataListCell>,
            <DataListCell isFilled={false} alignRight >
              {row?.brokerId}
            </DataListCell>,
            <DataListCell isFilled={false} alignRight >
              {row.topic}
            </DataListCell>,
            <DataListCell isFilled={false} alignRight >
              {row.partition}
              <br />
            </DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>)
}
