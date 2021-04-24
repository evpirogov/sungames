var h5Flag=false;
if (window.applicationCache) {
	h5Flag=true;
}




var sdkProtocol=window.location.protocol;
if(h5Flag){
	sdkProtocol="https:";
}
var sdkDomain=sdkProtocol+"//api.mguwp.net";

if(window.location.host=="websdk.mg.com" || window.location.host=="localhost" || window.location.host=="192.168.1.8" || window.location.host=="www.mguwp.net"){
	//sdkDomain="http://localhost";
	//sdkDomain="http://192.168.1.8";
}

document.writeln("<script src='"+sdkDomain+"/web/cookies.js'></script>");
document.writeln("<script src='"+sdkDomain+"/js/jquery/jquery.js'></script>");
document.writeln("<script src='"+sdkDomain+"/js/layer/layer.js'></script>");
document.writeln("<script src='"+sdkDomain+"/web/base64.js'></script>");
document.writeln("<script src='"+sdkDomain+"/web/mgwebsdk.js'></script>");

//检测浏览器语言
currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
if(!currentLang){//判断IE浏览器使用语言
    currentLang = navigator.browserLanguage;
}
var payMsg="Payment";
if(currentLang=='zh-CN'){
	payMsg="购买";
}
/*
if(currentLang=='zh-CN'){
	document.writeln("<script src='"+sdkDomain+"/js/customer/msg_cn.js'></script>");
}
else{
	document.writeln("<script src='"+sdkDomain+"/js/customer/msg_en.js'></script>");
}
*/
var mgLoginLayerId=0;//'mgLoginLayerId';
var mgPaymentListId=0;//'mgPaymentListId';
var mgPaymenStoreId=0;//'mgPaymentId';
var mgCsdId=0;
var isClickClose=true;
function openMgLogin(appKey,loginPara){
	var sourceDomain=getSourceDomain();
	if(loginPara!=null){
		loginPara=encodeURIComponent(loginPara);
	}
	layer.ready(function(){ 
		
		isClickClose=true;
		mgLoginLayerId=layer.open({
		//	id:mgLoginLayerId,
			type: 2,
			title: 'MIRACLE GAMES',
			area: ['330px', '430px'],
			content:sdkDomain+ '/web/index?sourceDomain='+sourceDomain+"&appKey="+appKey+"&loginPara="+loginPara,
			cancel: function(index, layero){
				if(appKey=="testapp"){
					return true;
				}
				return false;
			//	MgLoginResult1_0("fail","","","");
			}
		});
	});
}

function openMgStore(appKey,storePara){
	var jsonStorePara=JSON.parse(storePara);
	if(!jsonStorePara){
		alert("错误的参数！");
		return false;
	}
	else{
		goodsKey=jsonStorePara.goodsKey;
		callback=jsonStorePara.callback;
		comment=jsonStorePara.comment;
	}
	
//	var token=getToken(appKey);
	var sourceDomain=getSourceDomain();
	
	layer.ready(function(){ 
		isClickClose=true;
		
		mgPaymenListId=layer.open({
		//	id:mgPaymentListId,
			type: 2,
			title: 'MIRACLE GAMES',
			maxmin: false,
			area: ['330px', '420px'],
			content:sdkDomain+ '/web/paymentList?sourceDomain='+sourceDomain+"&appKey="+appKey+"&goodsKey="+goodsKey+"&callback="+callback+"&comment="+comment+"&goodsNum=1",
			end: function(){
				if(isClickClose){
				}
			},
			cancel: function(index, layero){ 
				MgPaymentResult1_0("fail","","","","","","","","");
			//	var iframeName=layero.find('iframe')[0]['name'];
			//	sendFrame(iframeName,'paymentResult','')
			//	return false;
			}    
		});
	});
	
}

function openMgCsd(appKey,width,height){
	//var jsonCsdPara=JSON.parse(csdPara);
	//是否登录
	var token=getToken(appKey);
	if(token==undefined || token==""){
		openMgLogin(appKey,null);
		return;
	}
	var sourceDomain=getSourceDomain();

	layer.ready(function(){ 
		mgCsdId=layer.open({
			type: 2,
			title: false,
			closeBtn: 0,
			maxmin: false,
			area: [width, height],
			content:sdkDomain+ '/csd/index?sourceDomain='+sourceDomain+"&app_key="+appKey+"&token="+token,
			end: function(){
				if(isClickClose){
				}
			},
			cancel: function(index, layero){ 
				
			}    
		});
	});

}

function isOpenCsdH5(appKey){
	if(appKey==""){
		return false;
	}
	var isOpenCsdH5="0";
	$.ajax({
		cache:false,
		type: "GET",
		url: sdkDomain+"/getappinfo?appKey="+appKey, 
		dataType:"json",
		//contentType: "application/x-www-form-urlencoded; charset=utf-8", 
		async: false,
		error: function(request) {
		},
		success: function(data) {
			if(data!=null){
				isOpenCsdH5=data.isOpenCsd;
			}
		}
	});
	
	if(isOpenCsdH5=="1"){
		return true;
	}
	return false;
}

function receiveMgResult(method,para){
	//base64decode
	para=Base64.decode(para);
	//urldecode
	para=decodeURIComponent(para);
//	console.log(para)
	var arrPara=para.split(',');
	if(method=='loginStatus'){
		if(arrPara.length==4){
			layer.close(mgLoginLayerId);
			MgLoginResult1_0(arrPara[0],arrPara[1],arrPara[2],arrPara[3]);
		}
		else if(arrPara.length>=6){
			layer.close(mgLoginLayerId);
			MgLoginResult1_0(arrPara[0],arrPara[1],arrPara[2],arrPara[3]);
			setToken(arrPara[4],arrPara[5]);
			MgLoginResult2_0(arrPara);
		}
	}
	else if(method=='openStore'){
		if(arrPara.length==2){
			var url=arrPara[0];
			url=decodeURIComponent(url);
			url=sdkDomain+url;
		//	url="https://www.mguwp.net"+url;
			var goodsName=arrPara[1];
			goodsName=decodeURIComponent(goodsName);
			mgPaymenStoreId=layer.open({
			//	id:mgPaymentId,
				type: 2,
				title: 'MIRACLE GAMES '+payMsg+' '+goodsName,
				maxmin: false,
				area: ['100%', '100%'],
				content:url,
				cancel: function(index, layero){ 
					var iframeName=layero.find('iframe')[0]['name'];
					sendFrame(iframeName,'paymentResult','');
					setTimeout("layer.close("+index+");",2000);
					return false;
				}    
			});
		}
	}
	else if(method=='paymentResult'){
		if(arrPara.length==9){
			layer.closeAll();
			MgPaymentResult1_0(arrPara[0],arrPara[1],arrPara[2],arrPara[3],arrPara[4],arrPara[5],arrPara[6],arrPara[7],arrPara[8]);
		}
	}
	else if(method=='closeWindow'){
		layer.close(mgCsdId);
	}
	else if(method=='error'){
	//	layer.closeAll();
		layer.close(mgPaymenStoreId);
		MgPaymentResult1_0("fail","","","","","","","","");
	}
}

function MgPaymentResult1_0(result,orderKey,goodsKey,goodsTag,goodsNum,coinUnit,price,customerKey,comment){
	var jsonPaymentResult=new Object();
	jsonPaymentResult.orderKey=orderKey;
	jsonPaymentResult.goodsKey=goodsKey;
	jsonPaymentResult.goodsTag=goodsTag;
	jsonPaymentResult.goodsNum=goodsNum;
	jsonPaymentResult.coinUnit=coinUnit;
	jsonPaymentResult.price=price;
	jsonPaymentResult.customerKey=customerKey;
	jsonPaymentResult.comment=comment;
	if(isExitsFunction("MgPaymentResult")){
		MgPaymentResult(result,JSON.stringify(jsonPaymentResult));
	}
}
function MgLoginResult1_0(result,userId,token,account){
	var jsonLoginResult=new Object();
	jsonLoginResult.userId=userId;
	jsonLoginResult.token=token;
	jsonLoginResult.account=account;
	if(isExitsFunction("MgLoginResult")){
		MgLoginResult(result,JSON.stringify(jsonLoginResult));
	}
}

function MgLoginResult2_0(arrPara){
	var jsonLoginResult=new Object();
	jsonLoginResult.userId=arrPara[1];
	jsonLoginResult.loginToken=arrPara[2];
	jsonLoginResult.account=arrPara[3];
	jsonLoginResult.appKey=arrPara[4];
	jsonLoginResult.token=arrPara[5];
	if(arrPara.length>6){
		jsonLoginResult.loginPara=arrPara[6];
	}
	if(isExitsFunction("MgLoginResult_Self")){
		MgLoginResult_Self(arrPara[0],JSON.stringify(jsonLoginResult));
	}
}


function getSourceDomain(){
	return window.location.protocol+"//"+window.location.host;
}

function sendFrame(frame,method,para){  
	var iframe =document.getElementById("crossFrame");
	if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.setAttribute('id','crossFrame');
        iframe.setAttribute('style', 'display:none');
        document.body.appendChild(iframe);
	}
	var sourceDomain=getSourceDomain();
    iframe.src = sdkDomain+'/web/poxy.html?frame='+frame+'&method='+method+'&para=' + para+'&sourceDomain='+sourceDomain+'&r'+ Math.random();
}  

function existSdk(){
	
}

function isExitsFunction(funcName) {
    try {
    	if (typeof(eval(funcName)) == "function") {
    		return true;
    	}
    } catch (e) {
    	console.log("not found "+funcName+" method");
    }
    return false;
}

window.addEventListener("message", function( event ) {
	var checkMessage = function () {
        // 只获取需要的域，并非所有都可以跨域
        if (event.origin != sdkDomain) {
            return false;
        }
        // 传输数据类型校验
        if (typeof(event.data) !== 'object') {
            return false;
        }
        return true;
    };

    if (checkMessage()) {
    	var message = event.data;
    	var method=message.method;
    	var para=message.para;
    	if(method=="weixinPay"){
    		window.top.location.href=para;
    	}
    	else{
    		receiveMgResult(method,para);
    	}
    }
}, false );
