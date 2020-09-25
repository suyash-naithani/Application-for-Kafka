import React from "react";
import {
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,

} from '@patternfly/react-core';
export default function ConsumerGroupsDataListHeader() {

  return (
    <DataListItem aria-labelledby="simple-item1">

      <DataListItemRow>

        <DataListItemCells
          dataListCells={[
            <DataListCell key="primary content">
              <span id="simple-item1">Group ID</span>
            </DataListCell>,
            <DataListCell key="secondary content">Broker ID</DataListCell>,
            <DataListCell key="tertiary content">Topic</DataListCell>,
            <DataListCell key="quaternary content">Partition</DataListCell>
          ]}
        />
      </DataListItemRow>
    </DataListItem>)
}
