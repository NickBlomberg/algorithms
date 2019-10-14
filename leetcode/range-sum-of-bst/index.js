/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let result = 0;
  const pos = root;

  if (pos) {
    if (pos.val >= L && pos.val <= R) {
      result += pos.val;
    }

    result += rangeSumBST(root.left, L, R);
    result += rangeSumBST(root.right, L, R);
  }

  return result;
};
