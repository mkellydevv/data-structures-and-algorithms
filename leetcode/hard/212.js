var findWords = function (board, words) {
  const trie = new Trie(words);
  const output = new Set();

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      search(board, r, c, trie, output);
    }
  }

  return [...output];
};

const search = (
  board,
  r,
  c,
  trie,
  output,
  parentNode = null,
  prefix = '',
  visited = new Set()
) => {
  if (r < 0 || c < 0 || r === board.length || c === board[0].length) return;
  const pos = r + ',' + c;
  if (visited.has(pos)) return;
  const trieNode = trie.startsWith(board[r][c], parentNode);
  if (!trieNode) return;

  prefix = prefix + board[r][c];
  if (trieNode.endWord) output.add(prefix);

  visited.add(pos);
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let delta of deltas) {
    search(
      board,
      r + delta[0],
      c + delta[1],
      trie,
      output,
      trieNode,
      prefix,
      visited
    );
  }
  visited.delete(pos);
};

class TrieNode {
  constructor() {
    this.children = {};
    this.endWord = false;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    for (let word of words) this.add(word);
  }

  add(word) {
    let currNode = this.root;
    for (let char of word) {
      if (!(char in currNode.children))
        currNode.children[char] = new TrieNode();
      currNode = currNode.children[char];
    }
    currNode.endWord = true;
  }

  has(word) {
    let currNode = this.root;
    for (let char of word) {
      if (!(char in currNode.children)) return false;
      currNode = currNode.children[char];
    }
    return currNode.endWord === true;
  }

  startsWith(prefix, startNode = null) {
    let currNode = startNode || this.root;
    for (let char of prefix) {
      if (!(char in currNode.children)) return null;
      currNode = currNode.children[char];
    }
    return currNode;
  }
}
