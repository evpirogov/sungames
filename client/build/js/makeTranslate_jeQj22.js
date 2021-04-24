/**
 * Created by songbin on 18/2/6.
 */

window.makeTranslate = (function () {
    var jsonResList = [
        'res/coffeeTranslate.json',
        'res/ccbTranslate.json'
    ]
    function init(callback) {
        window.languageTs = 'english';
        window.coffeeTranslate = {};
        window.ccbTranslate = {};
        //var resPth = 'static/res/coffeeTranslate.json' ;
        //if (window.md5_resource && window.md5_resource['res/coffeeTranslate.json']){
        //    resPth = 'static/' + window.md5_resource['res/coffeeTranslate.json'];
        //}
        //var xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
        //xhr.open("GET", resPth, true)
        //xhr.setRequestHeader("Content-Type","multipart/form-data;charset=UTF-8");
        //xhr.onreadystatechange = function () {
        //    if (xhr.readyState == 4) {
        //        if (xhr.status == 200) {
        //            var data = JSON.parse(xhr.responseText);
        //            makeTranslateMap(data,callback);
        //        }
        //    }
        //}
        //xhr.send();
        loadJson(0,callback)
    }

    function loadJson(index,callback){
        var pth = jsonResList[index]
        var resPth = pth
        if (window.md5_resource && window.md5_resource[resPth]){
            resPth =  window.md5_resource[resPth];
        }
        resPth = 'static/'+resPth
        var xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
        xhr.open("GET", resPth, true)
        xhr.setRequestHeader("Content-Type","multipart/form-data;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    var defJson = makeTranslateMap(data);
                    if (index == 0){
                        window.coffeeTranslate = defJson
                        //Joyfun franch 用的美元 cty franch 用的欧元
                        if (window.window.sdkManager && window.window.sdkManager.sdkType == 'joyfunfra'){
                            window.coffeeTranslate[2091]['text'] = "${0}";
                        }
                        loadJson(1,callback)
                    }else{
                        window.ccbTranslate = defJson
                        callback()

                    }
                }
            }
        }
        xhr.send();
    }
    function makeTranslateMap(data,callback){
        var def, j, len;

        if (!data || !data.RECORDS){return}
        data = data.RECORDS

        var t1 = {}
        for (j = 0, len = data.length; j < len; j++) {
            def = data[j];

            //Joyfun franch 用的美元 cty franch 用的欧元   货币 单位
            if (window.window.sdkManager && window.window.sdkManager.sdkType == 'joyfunfra'){
                def['text'] = def['text'].replace(/€/g,"$")
            }else if (window.window.sdkManager && window.window.sdkManager.sdkType == 'ctyfrench') {
                def['text'] = def['text'].replace(/$/g,"€")
            }
            t1[def.Id] = def;

        }
        return t1
    }

    return {
        init: init
    }
})();

