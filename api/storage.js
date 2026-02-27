let storage = {};

export function save(id, content) {
  storage[id] = content;
}

export function get(id) {
  return storage[id];
}
