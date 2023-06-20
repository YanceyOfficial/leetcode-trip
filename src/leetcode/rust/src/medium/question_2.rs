// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

#[allow(unused)]
pub fn add_two_numbers(
    l1: Option<Box<ListNode>>,
    l2: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    let mut dummy_head = ListNode::new(0);
    let mut curr = &mut dummy_head;
    let mut carry = 0;
    let mut l1 = l1;
    let mut l2 = l2;

    while l1.is_some() || l2.is_some() || carry != 0 {
        let mut sum = carry;
        
        if let Some(node) = l1 {
            sum += node.val;
            l1 = node.next;
        }
        if let Some(node) = l2 {
            sum += node.val;
            l2 = node.next;
        }

        carry = sum / 10;
        curr.next = Some(Box::new(ListNode::new(sum % 10)));
        curr = curr.next.as_mut().unwrap();
    }
    dummy_head.next
}
