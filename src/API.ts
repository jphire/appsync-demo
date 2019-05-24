/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDataInput = {
  id?: string | null,
  name: string,
  voltage?: number | null,
  current?: number | null,
  activePower?: number | null,
  energy?: number | null,
  relay?: boolean | null,
};

export type UpdateDataInput = {
  id: string,
  name?: string | null,
  voltage?: number | null,
  current?: number | null,
  activePower?: number | null,
  energy?: number | null,
  relay?: boolean | null,
};

export type DeleteDataInput = {
  id?: string | null,
};

export type ModelDataFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  voltage?: ModelFloatFilterInput | null,
  current?: ModelFloatFilterInput | null,
  activePower?: ModelFloatFilterInput | null,
  energy?: ModelFloatFilterInput | null,
  relay?: ModelBooleanFilterInput | null,
  and?: Array< ModelDataFilterInput | null > | null,
  or?: Array< ModelDataFilterInput | null > | null,
  not?: ModelDataFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateDataMutationVariables = {
  input: CreateDataInput,
};

export type CreateDataMutation = {
  createData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};

export type UpdateDataMutationVariables = {
  input: UpdateDataInput,
};

export type UpdateDataMutation = {
  updateData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};

export type DeleteDataMutationVariables = {
  input: DeleteDataInput,
};

export type DeleteDataMutation = {
  deleteData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};

export type GetDataQueryVariables = {
  id: string,
};

export type GetDataQuery = {
  getData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};

export type ListDatasQueryVariables = {
  filter?: ModelDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDatasQuery = {
  listDatas:  {
    __typename: "ModelDataConnection",
    items:  Array< {
      __typename: "Data",
      id: string,
      name: string,
      voltage: number | null,
      current: number | null,
      activePower: number | null,
      energy: number | null,
      relay: boolean | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDataSubscription = {
  onCreateData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};

export type OnUpdateDataSubscription = {
  onUpdateData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};

export type OnDeleteDataSubscription = {
  onDeleteData:  {
    __typename: "Data",
    id: string,
    name: string,
    voltage: number | null,
    current: number | null,
    activePower: number | null,
    energy: number | null,
    relay: boolean | null,
  } | null,
};
