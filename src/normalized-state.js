import { schema, normalize } from "normalizr";

import defaultState from "./default-state";

const user = new schema.Entity("users");

const card = new schema.Entity("cards", { assignTo: user });

// this will have many cards
const list = new schema.Entity("lists", { cards: [card] });

const normalizedLists = normalize(defaultState.lists, [list]);

const normalizedUser = normalize(defaultState.users, [user]);

export const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result
};

export const users = {
  entities: normalizedUser.entities.users,
  ids: normalizedUser.result
};

export const cards = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards)
};
