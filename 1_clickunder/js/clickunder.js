var url='http://YouTube.com'; // ссылка перехода
var h = prompt('Количество часов на одно срабатывание:', '1');;    // интервал срабатывания, часов
var m=0;    // интервал срабатывания, минут

function Clickunder() {
    CookieTest=navigator.cookieEnabled;
    if(CookieTest)
    {
        ClickUndercookie = GetCookie('clickunder');
        if (ClickUndercookie == null)
        {
            var ExpDate = new Date ();
            ExpDate.setTime(ExpDate.getTime() + ( (h * 60 + m) * 60 * 1000));
            SetCookie('clickunder','1',ExpDate, "/");
            window.open("javascript:location.href='"+url+"';","YouTube","width=800,height=600, resizable=1,toolbar=1,location=1,menubar=1,status= 1,scrollbars=1'");
            window.focus();
        }
    }
}
function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function SetCookie (name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) +
        ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
}
document.onmouseup=Clickunder;
