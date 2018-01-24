#学习bootstrap的笔记（1）
##全局css样式
* HTML5文档类型，参照一下格式
>1. 禁止缩放功能使用 `user-scalable=no`，用户只能滚动屏幕。
>2. 排版与链接样式可以在 `scaffolding.less` 文件找到源码
>3. Normalize.css 为了增强跨浏览器表现的一致性
>4. 给页面内容或者栅格系统包裹一个`.container`容器，有两个`container` 和 `container-fluid` 前者用于固定宽度并支持响应式布局的容器。后者类似于100%宽度，占据全部视口（viewport）的容器

* 栅格系统
>1. row必须包含在`container`或者`container-fluid`里
>2. 通过row在水平方向创建一组column
>3. 内容放在column里，只有column可以作为row的直接子元素
>4. 如果一行多余12列，多余的列所在的元素将被作为一个整体另起一行排列。
>5. 类前缀包括`.col-xs-`,`.col-sm-`,`.col-md-`,`.col-lg-`
>6. 可以同时把列定义成以上多个类，屏幕小的时候按小的来，大的时候按大尺寸来布局
>7. 列偏移类：向右偏移`.col-md-offset-*`   还可以针对某个尺寸清除掉偏移，比如`col-sm-offset-0`
>8. 列里面还可以嵌套row
>9. 通过类`col-md-push-*`和`col-md-pull-*`可以改变列排序
>10. less mixin和变量查询文档

* 排版
>1. 标题`<h1>`到`<h6>`均可使用，还提供`.h1`到`.h6`给其他需要标题样式的文本使用
>2. 标题里可以包含`.small`或者`<small>`作为副标题
>3. `.lead`类可以让段落突出显示
>4. 内联文本元素<mark>,<del>,<a>,<ins>,<u>,<small>,<strong>,<em>等
>5. 文本对齐类，`text-left`,`text-center`,`text-justify`,`text-nowrap`
>6. 改变大小写,`text-lower`,`text-uppercase`,`text-capitalize`
>7. 缩略语`<abbr>`,带有一个title属性，鼠标放在上面有个问好，可查看完整内容，也就是title的值
>8. 地址`<address>`,`<br>`可以保留需要的样式
>9. 多种引用样式`<blockquote>`, 命令来源`<footer>`用来表明引用来源,`<cite>`来源的名称。使用类`blockquote-reverse`让引用内容右对齐的效果
>10. 内联列表同一行使用类`list-inline`,等多查看文档
>11. 代码相关查看文档

* 表格
>1. 为任意`<table>`标签添加`.table`类可以赋予基本样式（少量的padding和水平方向的分割线）
>2. 更多表格样式查看bootstrap官方文档

* 表单
>1. 单独的表单控件`<form>`会被自动赋予一些全局样式。所有设置了`.form-control`类的`<input>`,`<textarea>`,`<select>`元素都被默认宽度书名`width:100%`。讲`label`元素和前面提到的控件包裹在`.form-group`中可以获得最好的排列。
>2. 一定要添加`<label>`标签，否则屏幕阅读器将无法正确识别。
>3. `.form-inline`类可以使内容左对齐并且表现为`inline-block`级别的控件，当viewport小于768px宽度时候会折叠。
>4. 表单添加`.form-horizontal`类，并联使用栅格类，可以把`label`标签和控件组水平并排布局。使其变现为栅格系统中的row

* 被支持的控件
>1. 包括大部分表单控件、文本输入域控件，还支持所有 HTML5 类型的输入控件:`text`,`password`,`datetime`等，必须添加type属性。
>2. 文本域，可根据需要修改`rows`属性
>3. 单选和多选框。radio和checkbox，默认外观(堆叠在一起).通过`.checkbox-inline`或`.radio-inline`类应用到一系列控件上，让他们排列在一行。radio和checkbox要嵌套在`<label>`里，或提供某种形式的label，例如添加属性`aria-label`.
>4. 下拉列表（select），标记了multiple属性的`<select>`显示多选项
>5. 将一行纯文本和label放置在同一行，为<p>添加`.form-control-static`
>6. 禁用等状态查看文档
>7. 添加额外图标，设置`.has-feedback`类并添加图标即可，详情看文档
>8. 控件尺寸看文档

* 按钮
>1. `<a>`,`<button>`,`<input>`元素添加按钮类。但是导航和导航条组件只支持`<button>`。注意事项看文档
>2. 预定义样式和尺寸看文档

* 图片
>1. 响应式图片。通过添加`.img-responsive`类让其支持响应式布局。居中，使用`.center-block`
>2. 图片形状，文档

* 辅助类
>1. 情景文本颜色,`text-muted`,`text-primary`等看文档
>2. 情景背景色：`bg-primary`,`bg-success`等看文档
>3. 关闭按钮，可以让静态框和警告框消失
>4. 三角符号，快速浮动，让内容块居中，清除浮动，显示或隐藏内容，屏幕阅读器和键盘导航，图片替换等需要查看文档

* 使用less 
> 暂时不用，需要的时候查看文档