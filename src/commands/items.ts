import { call, callForInfo, callForPage, handlePaging } from "../http";
import type {
  DataPage,
  DeleteItem,
  DeleteReq,
  Equip,
  EquipReq,
  EquipSlot,
  Item,
  ItemReq,
  ItemsReq,
  SingleItem,
  UnequipReq,
} from "../types";
import { getCallerName } from "../util";

export function equip(body: EquipReq) {
  const method = "POST";
  const path = "/my/{name}/action/equip";
  return call<Equip>(getCallerName(), { method, path, body });
}

export function unequip(body: UnequipReq) {
  const method = "POST";
  const path = "/my/{name}/action/unequip";
  return call<Equip>(getCallerName(), { method, path, body });
}

export function discard(body: DeleteReq) {
  const method = "POST";
  const path = "/my/{name}/action/delete";
  return call<DeleteItem>(getCallerName(), { method, path, body });
}

/** Get a single item by code */
export async function getItem(query: ItemReq) {
  const method = "GET";
  const path = `/item/${query.code}`;
  return callForInfo<SingleItem>(getCallerName(), { method, path });
}

/**
 * Get a data page of a list of items, potentially filtered by a query.
 * Intended to be wrapped by `handlePaging()`
 **/
async function getItemsPage(query: ItemsReq = {}) {
  const method = "GET";
  const path = "/items/";
  return callForPage<DataPage<Item>>(getCallerName(), { method, path, query });
}

/**
 * Return a complete set of items matching the query,
 * collected across multiple pages of results as needed
 */
export async function getItems(query?: Omit<NonNullable<ItemsReq>, "page" | "size">) {
  return handlePaging<Item, ItemsReq>(getItemsPage, query);
}

export default { equip, unequip, discard, get: getItem, getAll: getItems };
