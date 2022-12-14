/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Board, Person } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PeersonComponent from "./PeersonComponent";
import { Collection } from "@aws-amplify/ui-react";
export default function PeersonComponentCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const boardItems = useDataStoreBinding({
    type: "collection",
    model: Board,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Person,
  }).items.map((item) => ({
    ...item,
    Boards: boardItems.filter((model) => model.personID === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "PeersonComponentCollection")}
    >
      {(item, index) => (
        <PeersonComponent
          person={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PeersonComponent>
      )}
    </Collection>
  );
}
