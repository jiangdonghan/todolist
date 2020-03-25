##　虚拟dom过程
1.state数据
2.jsx模板
3.数据+模板 结合 生成虚拟DOM(虚拟dom就是一个js对象，用来描述真实的dom)  (损耗了性能 但是比改变dom小得多)
```
['div',{id: 'abc},['span'],{},'hello world']]
```
4.用虚拟dom的结构来生成真实的DOM，来显示
5.state发生变化
6.数据+ 模板 生成新的虚拟dom（极大的提升了性能 js对象性能损耗极低）
['div',{id: 'abc},['span'],{},'bye']]
7.比较原始虚拟dom和新的虚拟dom的区别，找到区别是span中的内容（极大的提升了性能）
8.直接操作dom，改变span中的内容

所以render里的jsx不是dom
jsx 到 js对象 再到 真实的dom
React.createElement更接近底层

## 优点

1.性能提升了
2.使得跨段应用得以实现，react native

