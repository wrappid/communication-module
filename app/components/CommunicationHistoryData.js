import { CoreDataTable } from "@wrappid/core";

export const CommunicationHistoryData = (props) => {
  return (
    <CoreDataTable
      entity="CommounicationHistories"
      createEntityButtonText={props?.createEntityButtonText}
      hideCreateForm={true}
      filterQuery={{ filter: { type: props?.type } }}
      noHeaderInApp={true}
    />
  );
};
