/**
 * 入参数hander内置函数说明：
 * 定义如下：
let hander = {
	ShowH5Page(html, proHander);
	DownloadImg(url, callback);
	SetCookie(inCookie, url);
	GetCookie(url);
	GetHtml(url, callback, count = 0);
	CallBack(retcode, cmds, buildpath, message = {});
	GetContext(filename, lifetime = 3600);
	SetContext(filename, context)
}

ShowH5Page(html, proHander);
函数功能：
展示h5页面，html为需要展示的html内容，不支持外链，不支持私有https和http协议的链接，
不支持a标签跳转，可以使用引入jquery
参数：
html：需要展示的网页内容，使用内置标签
proHander：如果需要网页js与插件通信时需要用到，一般不会使用

DownloadImg(url, callback)
函数功能：
指定url下载一张图片，下载完成之后图片内容以回调的形式传入callback，共页面上展示等
参数：
url：图片的地址（url）
callback：回调函数（定义：callback(errorcode, imgData));

SetCookie:
GetCookie
函数功能：
写入cookie，一般用不着，服务器下发的cookie在GetHtml内部会进行保存，
发起请求的时候会带上之前下发的cookie

GetHtml(url, callback, count = 0);
函数功能：
加载指定url的页面内容，如果服务器返回302，函数内部会自动重新定向，直到取到非302的网页，
取到之后会调callback，将错误码和网页内容回传，callback的原形定义：callback(statusCode, html);
参数：
url：加载网页的url（目前不支持https）
callback：处理完成之后回调接口（302除外）
count：该参数用于防止反复302，可不关注

CallBack(retcode, cmds, buildpath, message = {});
函数功能：
该函数为实现编译脚本必须调用的一个函数，当脚本完成自己需要执行的任务的时候，使用该函数回传给插件执行，
脚本可回传多个指令，当回传多个指令的时候，cpptips会让用户选择指令执行
参数：
retcode：返回码，当返回0的时候，cpptips会按照返回的指令执行，返回非0的时候，业务可以直到报错提示和处理方式
cmds：指令集合，可以多个，当返回0的时候应该至少包含一条指令，每条指令格式为key-value，key为用户选择时看到的内容
	{
		"make编译并重启":"make clean; make -j2; sh restart.sh;",
		"make编译":"make clean; make -j2;",
	}
buildpath：该值为GetBuildCommands入参数的dirname，原样透传即可
message：当retcode返回非0的时候，该参数用于觉得怎么引导用户，格式如下：
	{
		button: "去配置容器",
		showText: "该服务未配置私有容器，无法启动编译到私有容器！",
		url:"http://docker.wxpaytest.oa.com/wepayDocker/container"
	}
这样返回，cpptips将提示界面上多个“去配置容器”的按钮，且提示的文案为showText，当用户点几按钮之后，
会打开浏览器并打开url地址

GetContext
SetContext
函数功能：
以上两个函数用于存储数据，文件名称自行指定，存放目录固定为当前工作目录.vscode下面
参数说明：
filename：文件名称，仅名称，不能带目录
context：需要存储的内容
lifetime：有效期，从文件最后修改时间开始，不能超过修改时间+lifetime才正常返回，否则不返回
*/

/**
 * 
 * @param {*} hander 上下文函数库
 * @param {*} dirname 当前启动编译的全路径
 * @param {*} isCommd 是否按住command健启动（鼠标右键分为两个菜单，快捷健分f5和command+f5，windows为control+f5）
 */
function GetBuildCommands(hander, dirname, isCommd = true){
	let commids = {
		'make':'make clean; make -j 8;mv a.out /tmp/;'
	};
	hander.CallBack(0, commids, dirname);
}