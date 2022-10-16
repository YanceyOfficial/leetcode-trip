fn main() {
    // reorder_list();
}

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

pub fn reorder_list(head: &mut Option<Box<ListNode>>) {}

pub fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut fast = &head;
    let mut slow = &head;

    while fast.is_some() && fast.as_ref().unwrap().next.is_some() {
        fast = &fast.as_ref().unwrap().next.as_ref().unwrap().next;
        slow = &slow.as_ref().unwrap().next;
    }

    slow.clone()
}

pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut prev = None;
    let mut curr = head;

    while curr.is_some() {
        let mut tmp = curr.take().unwrap();
        curr = tmp.next;
        tmp.next = prev;
        prev = Some(tmp);
    }

    prev
}
