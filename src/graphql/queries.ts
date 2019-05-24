// tslint:disable
// this is an auto generated file. This will be overwritten

export const getData = `query GetData($id: ID!) {
  getData(id: $id) {
    id
    name
    voltage
    current
    activePower
    energy
    relay
  }
}
`;
export const listDatas = `query ListDatas(
  $filter: ModelDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      voltage
      current
      activePower
      energy
      relay
    }
    nextToken
  }
}
`;
