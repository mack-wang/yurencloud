package polymorphism;

import polymorphism.shape.*;


public class Shapes {
    private static RandomShapeGenerator gen = new RandomShapeGenerator();

    public static void main(String[] args) {
        Shape[] s = new Shape[9];//s是Shape类型，按理是无输出的
        Shape c = new Circle();//此时c是Shape类型，但实例是Circle类型，所以Circle可以向上转型，转成基类类型。
        c.erase();
        //Circle d = new Shapes();//但是基类不能向下转型成Circle,会报错
        for (int i = 0; i < s.length; i++)
            s[i] = gen.next();//s中的项被赋值成Circle,Square等实例对象
        for (Shape shp : s)//遍历Shape对象s，按理说s是Shape类型，s中的项是Circle,Square类型，Shape shp是无法判断是什么类型的
            shp.draw();//但是java动态绑定，后期绑定（多态），从而自动得到了正确的调用，是Shape类型Circle实例的，就调用Circle的方法
                        //Shape是基类，基础类型，Circle，Square是导出类，继承了Shape，那么Shape就拥有了多种形态（Circle,Square），
                        //我们在实例化Shape时，可以给他赋值成Circle,Square的实例，相当于Shape有多种形态（多态）
    }
}
