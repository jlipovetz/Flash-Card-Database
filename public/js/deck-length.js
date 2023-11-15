var decklength = 0;

function setDeckLength(length) {
  decklength = length;
}

function getDeckLength() {
  return decklength;
}

module.exports = {
  setDeckLength,
  getDeckLength
};
