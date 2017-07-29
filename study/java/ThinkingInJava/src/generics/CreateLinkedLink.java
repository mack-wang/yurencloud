package generics;


public class CreateLinkedLink<T> {//利用泛型实现LinkedList
    private static class Node<U> {//
        U item;//声明一个包访问权限的泛类型item
        Node<U> next;
        Node() { item = null;next = null;}//构造方法，进去初始化
        Node(U item, Node<U> next){
            this.item = item;
            this.next = next;
        }
        boolean end(){return item == null && next == null;}//检查当前对象是否是null
    }

    private Node<T> top =  new Node<T>();
    public void push(T item){
        top = new Node<T>(item,top);
    }
    public T pop(){
        T result = top.item;
        if(!top.end())
            top = top.next;
        return result;
    }

    public static void main(String[] args) {
        CreateLinkedLink<String> lss = new CreateLinkedLink<String>();
        for(String s : "Phasers on stun!".split(" "))
            lss.push(s);
        String s;
        while ((s=lss.pop()) != null)
            System.out.println(s);
    }
}
