// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定的有序链表： [-10, -3, 0, 5, 9],

// 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

var sortedListToBST = function(head) {
    let list = []
    let tree = new TreeNode(null)
    while(head){
        list.push(head.val)
        head = head.next
    }
  
    function generateTree(list){
        if(!list.length) return null
        let mid = parseInt(list.length/2)
        let root = new TreeNode(list[mid])
        root.left = generateTree(list.slice(0,mid))
        root.right = generateTree(list.slice(mid+1))
        return root
        
    }
    return generateTree(list)
    
};