class TrieNode {
  constructor() {
    this.children = {};
    this.endWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currNode = this.root;
    for (let char of word) {
      if (!(char in currNode.children))
        currNode.children[char] = new TrieNode();
      currNode = currNode.children[char];
    }
    currNode.endWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let currNode = this.root;
    for (let char of word) {
      if (!(char in currNode.children)) return false;
      currNode = currNode.children[char];
    }
    return currNode.endWord === true;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currNode = this.root;
    for (let char of prefix) {
      if (!(char in currNode.children)) return false;
      currNode = currNode.children[char];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
