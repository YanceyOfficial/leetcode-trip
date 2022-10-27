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
    let mut a = Vec::new();
    let mut b = Vec::new();

    let mut ll = l1;
    while let Some(x) = ll {
        a.push(x.val);
        ll = x.next;
    }

    let mut ll = l2;
    while let Some(x) = ll {
        b.push(x.val);
        ll = x.next;
    }

    let mut carry = 0;
    let mut head = ListNode::new(0);
    while a.len() > 0 || b.len() > 0 || carry != 0 {
        let mut a_num = 0;
        let mut b_num = 0;
        if a.len() > 0 {
            a_num = a.pop().unwrap();
        }
        if b.len() > 0 {
            b_num = b.pop().unwrap();
        }

        let sum = a_num + b_num + carry;

        let mut tmp = ListNode::new(sum % 10);
        tmp.next = head.next.clone();
        head.next = Some(Box::new(tmp));

        carry = sum / 10;
    }

    head.next
}
