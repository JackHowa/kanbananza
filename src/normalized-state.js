import { schema, normalize } from 'normalizr';

import defaultState from './default-state';

const user = new schema.Entity('users');

const card = new schema.Entity('cards', { assignTo: user });

// this will have many cards
const list = new schema.Entity('lists', { cards: [card] })

const normalizedLists = normalize(defaultState.lists, [list]);