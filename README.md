# 长沙长笛龙吟开发

## 项目运行
```
npm run serve(运行)
npm run build(打包)
npm run lib(组件模式)
```

### VSCODE插件安装
>（配置框架引入插件包）：
- Vetur
- AutoCloseTag
- AutoRenameTag
- JavaScript(ES6)codesnippets
- PathIntellisense
- vuevscodesnippets
- HTMLCSSSupport
- Beautify
- vue
- vueVScodesnoppets
- vuexsuggest

### vue全局选用
>（配置框架引入插件包）：
- vuecil：配置包（整体使用双ui库，vantui（移动端），element（pc端），跨域vue-axios）
- vantui文档：https://youzan.github.io/vant/#/zh-CN/
- element文档：http://element-cn.eleme.io/#/zh-CN
- node.js版本12.1.4
- vue版本4.1.1
- 已配置生产变量，npmrunbuild打包后uni可直接封装安卓app包

### 请求与跨域
>本项目使用axios进行跨域请求，
>> 跨域配置文件：axios.js.(请求头跨域配置)
>> 跨域反代理配置：vue.config.js(配置反代理与serve服务操作)


### CSS样式规范（颜色，大小，媒体查询）
> 全局CSS配置：scss编译
> #### CSS颜色命名规范：
颜色规范：变量命名全局颜色（文字，背景，边框），修改位置：src\style\Mannerism.scss
文字（color-wz加数字，例color-wz1color-wz2），
背景（color-bg加数字，例color-bg1color-bg2）
边框（color-box加数字，例color-box1color-box2）。
> #### CSS大小规范：
大小规范：变量命名全局大小（文字，背景，边框），修改位置：src\style\Mannerism.scss
文字（size-wz加数字，例size-wz1color-wz2），
背景（size-bg加数字，例size-bg1color-bg2）
边框（size-box加数字，例size-box1color-box2）。

### 布局
> 整体选用弹性布局。参考文档https://www.runoob.com/w3cnote/flex-grammar.html
修改位置：src\style\style.scs:
命名：.dis(弹性布局初始)dis-a(元素均有分布)等，具体看文件

### 动画
> 动画采用animate类库
格式:<divclass="boxanimatedfadeInLeft"></div>



## 淡入淡出
### 淡入(fadeIn)
|fadeInDown:向下淡入| fadeInDownBig:向下快速淡入| fadeInLeft:向右淡入| fadeInLeftBig:向右快速淡入|
|--|--|--|
|fadeInRight:向左淡入|fadeInRightBig:向左快速淡入| fadeInUp:向上淡入|fadeInUpBig:向上快速淡入|
### 淡出(fadeOut)
| fadeOutDown:向下淡出| fadeOutDownBig:向下快速淡出| fadeOutLeft:向左淡出| fadeOutLeftBig:向左快速淡出|
|--|--|--|
| adeOutRight:向右淡出|   fadeOutRightBig:向右快速淡出|  fadeOutUp:向上淡出| fadeOutUpBig:向上快速淡出|
## 弹跳类(bounce)
### 弹跳进入( bounceIn)
| bounceInDown:向下弹跳进入|  bounceInLeft:向右弹跳进入|
|--|--|--|
|  bounceInRight:向左弹跳进入| bounceInUp:向上弹跳进入|  

### 弹跳退出( bounceOut)
| bounceOutDown:向下弹跳退出|    bounceOutLeft:向左弹跳退出|
|--|--|--|
|    bounceOutRight:向右弹跳退出| bounceOutUp:向上弹跳退出|  

##  缩放类(zoom)
### 放大进入(zoomIn)

| zoomInDown:向下放大进入|    zoomInLeft:向右放大进入|
|--|--|--|
| zoomInRight:向左放大进入|   zoomInUp:向上放大进入| 
### 缩小退出( zoomOut)
| zoomOutDown:向下缩小退出|   zoomOutLeft:向左缩小退出|
|--|--|--|
| zoomOutRight:向右缩小退出|   zoomOutUp:向上缩小退出  | 
##  旋转类(rotate)
### 顺时针旋转进入(rotateIn)
| rotateInDownLeft:从左往下旋入|    rotateInDownRight:从右往下旋入|
|--|--|--|
| rotateInUpLeft:从左往上旋入|  rotateInUpRight:从右往上旋入 | 
### 顺时针旋转退出(rotateOut)
| rotateOutDownLeft:向左下旋出|   rotateOutDownRight:向右下旋出|
|--|--|--|
| rotateOutUpLeft:向左上旋出| rotateOutUpRight:向右上旋出   | 
##  翻转类(flip)
| flipInX:水平翻转进入|  flipInY:垂直翻转进入|
|--|--|--|
| flipOutX:水平翻转退出| flipOutY:垂直翻转退出    | 

##  强调类(strong)
|  title:强调类| bounce:弹跳| rubberBand:橡皮筋 |shake:左右弱晃动| wobble:左右强晃动|
|--|--|--|
| flash:闪烁|  pulse:脉冲  | swing:上下摆动|  swing:上下摆动| tada:缩放摆动|jello:拉伸抖动  |
# GitforWindows国内下载站
GitforWindows.国内直接从官网（`http://git-scm.com/download/win`）下载比较困难，需要翻墙。这里提供一个国内的下载站，方便网友下载
找不到想要的版本？您可以访问[淘宝NPM的GitforWindows索引页](https://npm.taobao.org/mirrors/git-for-windows/)以下载更多版本。Thelatest(v2.24.1)versionofGitforWindowswasreleasedon2019-12-6.
## v2.24.1(2019-12-06)

* 64-bitGitforWindowsSetup:<https://npm.taobao.org/mirrors/git-for-windows/v2.24.1.windows.2/Git-2.24.1.2-64-bit.exe>
* 64-bitGitforWindowsPortable:<https://npm.taobao.org/mirrors/git-for-windows/v2.24.1.windows.2/  PortableGit-2.24.1.2-64-bit.7z.exe>

## v2.23.0(2019-08-17)

* 64-bitGitforWindowsSetup:<https://npm.taobao.org/mirrors/git-for-windows/v2.23.0.windows.1/Git-2.23.0-64-bit.exe>
* 64-bitGitforWindowsPortable:<https://npm.taobao.org/mirrors/git-for-windows/v2.23.0.windows.1/PortableGit-2.23.0-64-bit.7z.exe>

## v2.22.0(2019-06-08)

* 64-bitGitforWindowsSetup:<https://npm.taobao.org/mirrors/git-for-windows/v2.22.0.windows.1/Git-2.22.0-64-bit.exe>
* 64-bitGitforWindowsPortable:<https://npm.taobao.org/mirrors/git-for-windows/v2.22.0.windows.1/PortableGit-2.22.0-64-bit.7z.exe>

### Compilesandhot-reloadsfordevelopment
```
yarnserve
```

### Compilesandminifiesforproduction
```
yarnbuild
```

### Customizeconfiguration
```
See[ConfigurationReference](https://cli.vuejs.org/config/).
```


