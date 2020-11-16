// 最大二叉树
// 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

// 二叉树的根是数组中的最大元素。
// 左子树是通过数组中最大值左边部分构造出的最大二叉树。
// 右子树是通过数组中最大值右边部分构造出的最大二叉树。
// 通过给定的数组构建最大二叉树，并且输出这个树的根节点。

//  

// 示例 ：

// 输入：[3,2,1,6,0,5]
// 输出：返回下面这棵树的根节点：

//       6
//     /   \
//    3     5
//     \    / 
//      2  0   
//        \
//         1

var constructMaximumBinaryTree = function(arr) {
    if(!arr.length) return 
    let max = Math.max(...arr)
    let tree = new TreeNode(max)
    const index = arr.indexOf(max)

    tree.left = constructMaximumBinaryTree(arr.slice(0,index))
    tree.right = constructMaximumBinaryTree(arr.slice(index+1))

    return tree


};
var constructMaximumBinaryTree = function(arr) {
    if(arr.length==0) return null
    let big=Math.max(...arr)
    let tree=new TreeNode(big)
    tree.left=constructMaximumBinaryTree(arr.slice(0,arr.indexOf(big)))
    tree.right=constructMaximumBinaryTree(arr.slice(arr.indexOf(big)+1))
    return tree
};
  
