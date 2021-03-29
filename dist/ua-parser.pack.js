/*!@license
 * UAParser.js v0.7.26
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!function(r,b){"use strict";var u="function",e="undefined",c="object",o="string",i="model",s="name",a="type",n="vendor",t="version",l="architecture",w="console",d="mobile",m="tablet",p="smarttv",h="wearable",g={extend:function(i,s){var e,o={};for(e in i)s[e]&&s[e].length%2==0?o[e]=s[e].concat(i[e]):o[e]=i[e];return o},has:function(i,s){return typeof i==o&&-1!==s.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i==o?i.replace(/[^\d\.]/g,"").split(".")[0]:b},trim:function(i,s){return i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof s==e?i:i.substring(0,255)}},f={rgx:function(i,s){for(var e,o,r,a,n,t=0;t<s.length&&!a;){for(var l=s[t],w=s[t+1],d=e=0;d<l.length&&!a;)if(a=l[d++].exec(i))for(o=0;o<w.length;o++)n=a[++e],typeof(r=w[o])==c&&0<r.length?2==r.length?typeof r[1]==u?this[r[0]]=r[1].call(this,n):this[r[0]]=r[1]:3==r.length?typeof r[1]!=u||r[1].exec&&r[1].test?this[r[0]]=n?n.replace(r[1],r[2]):b:this[r[0]]=n?r[1].call(this,n,r[2]):b:4==r.length&&(this[r[0]]=n?r[3].call(this,n.replace(r[1],r[2])):b):this[r]=n||b;t+=2}},str:function(i,s){for(var e in s)if(typeof s[e]==c&&0<s[e].length){for(var o=0;o<s[e].length;o++)if(g.has(s[e][o],i))return"?"===e?b:e}else if(g.has(s[e],i))return"?"===e?b:e;return i}},v={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},x={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[t,[s,"Chrome"]],[/(?:edgios|edga|edg)\/([\w\.]+)/i],[t,[s,"Edge"]],[/edge\/([\w\.]+)/i],[[t,f.str,v.browser.oldEdge.version],[s,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[s,t],[/opios[\/\s]+([\w\.]+)/i],[t,[s,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[t,[s,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|instagram)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[s,t],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[t,[s,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[t,[s,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[t,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[t,[s,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[t,[s,"IE"]],[/yabrowser\/([\w\.]+)/i],[t,[s,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure Browser"],t],[/focus\/([\w\.]+)/i],[t,[s,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[t,[s,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[t,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[t,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[t,[s,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[t,[s,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[t,[s,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[s,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 Browser"],t],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],t],[/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[s,t],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[s],[/;fbav\/([\w\.]+);/i],[t,[s,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[s,"Facebook"]],[/\s(electron)\/([\w\.]+)\ssafari/i,/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i],[s,t],[/\bgsa\/([\w\.]+)\s.*safari\//i],[t,[s,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[t,[s,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[s,"Chrome WebView"],t],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[t,[s,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[s,t],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[t,[s,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[t,s],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[t,f.str,v.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[s,t],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],t],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,t]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[l,"amd64"]],[/(ia32(?=;))/i],[[l,g.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[l,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[l,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[l,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[l,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[l,/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[[l,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[l,g.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-p(?:605|610|587)|sm-t\w+|sm-p\w+|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus\s10)/i],[i,[n,"Samsung"],[a,m]],[/(s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[i,[n,"Samsung"],[a,d]],[/\((ip(?:hone|od)[\s\w]*);/i],[i,[n,"Apple"],[a,d]],[/\((ipad);[\w\s\),;-]+(apple)/i],[i,n,[a,m]],[/applecoremedia\/[\w\.]+\s\((ipad)/i],[i,[n,"Apple"],[a,m]],[/\b(bah2?-a?[lw]\d{2})/i,/\b(sht?-a?[lw]\d{2})/i,/\b(ags2?-a?[lw]\d{2})/i],[i,[n,"Huawei"],[a,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[i,[n,"Huawei"],[a,d]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\s+build\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[i,/_/g," "],[n,"Xiaomi"],[a,d]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[i,/_/g," "],[n,"Xiaomi"],[a,m]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[i,[n,"OPPO"],[a,d]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[i,[n,"Vivo"],[a,d]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[i,[n,"Realme"],[a,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot[\s-](\w*)/i,/(moto[\s\w\(\)]+(?=\sbuild|\)))/i,/(xt\d{3,4})\sbuild\//i,/(nexus\s6)/i],[i,[n,"Motorola"],[a,d]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[n,"Motorola"],[a,m]],[/((?=lg)?[vl]k\-?\d{3})\s+build|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[i,[n,"LG"],[a,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\s+build/i],[i,[n,"LG"],[a,d]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|[\w-]+)/i],[i,[n,"Lenovo"],[a,m]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[i,[n,"Nokia"],[a,d]],[/droid.+;\s(pixel\sc)[\s)]/i],[i,[n,"Google"],[a,m]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[i,[n,"Google"],[a,d]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[n,"Sony"],[a,d]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[i,"Xperia Tablet"],[n,"Sony"],[a,m]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\s+build/i,/\boneplus\s(a\d{4})[\s)]/i],[i,[n,"OnePlus"],[a,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[i,[n,"Amazon"],[a,m]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[i,"Fire Phone"],[n,"Amazon"],[a,d]],[/\((playbook);[\w\s\),;-]+(rim)/i],[i,n,[a,m]],[/\(bb10;\s(\w+)/i],[i,[n,"BlackBerry"],[a,d]],[/\b(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00c)/i],[i,[n,"ASUS"],[a,m]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[i,[n,"ASUS"],[a,d]],[/(nexus\s9)/i],[i,[n,"HTC"],[a,m]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[i,/_/g," "],[a,d]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[i,[n,"Acer"],[a,m]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[i,[n,"Meizu"],[a,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,i,[a,d]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[n,i,[a,m]],[/\s(surface\sduo)\s/i],[i,[n,"Microsoft"],[a,m]],[/\s(u304aa)\sbuild/i],[i,[n,"AT&T"],[a,d]],[/sie-(\w*)/i],[i,[n,"Siemens"],[a,d]],[/[;\/]\s?(rct\w+)\sbuild/i],[i,[n,"RCA"],[a,m]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[i,[n,"Dell"],[a,m]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[i,[n,"Verizon"],[a,m]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[i,[n,"Barnes & Noble"],[a,m]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[i,[n,"NuVision"],[a,m]],[/;\s(k88)\sbuild/i],[i,[n,"ZTE"],[a,m]],[/;\s(nx\d{3}j)\sbuild/i],[i,[n,"ZTE"],[a,d]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[i,[n,"Swiss"],[a,d]],[/[;\/]\s?(zur\d{3})\sbuild/i],[i,[n,"Swiss"],[a,m]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[i,[n,"Zeki"],[a,m]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[n,"Dragon Touch"],i,[a,m]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[i,[n,"Insignia"],[a,m]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[i,[n,"NextBook"],[a,m]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[n,"Voice"],i,[a,d]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[n,"LvTel"],i,[a,d]],[/;\s(ph-1)\s/i],[i,[n,"Essential"],[a,d]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[i,[n,"Envizen"],[a,m]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[i,[n,"MachSpeed"],[a,m]],[/[;\/]\s?tu_(1491)\sbuild/i],[i,[n,"Rotor"],[a,m]],[/(shield[\w\s]+)\sbuild/i],[i,[n,"Nvidia"],[a,m]],[/(sprint)\s(\w+)/i],[n,i,[a,d]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[n,"Microsoft"],[a,d]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[n,"Zebra"],[a,m]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[n,"Zebra"],[a,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[n,i,[a,w]],[/droid.+;\s(shield)\sbuild/i],[i,[n,"Nvidia"],[a,w]],[/(playstation\s[345portablevi]+)/i],[i,[n,"Sony"],[a,w]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[i,[n,"Microsoft"],[a,w]],[/smart-tv.+(samsung)/i],[n,[a,p],i],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[n,"Samsung"],[a,p]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[n,"LG"],i,[a,p]],[/(apple)\s?tv/i],[n,[i,"Apple TV"],[a,p]],[/crkey/i],[[i,"Chromecast"],[n,"Google"],[a,p]],[/droid.+aft([\w])(\sbuild\/|\))/i],[i,[n,"Amazon"],[a,p]],[/\(dtv[\);].+(aquos)/i],[i,[n,"Sharp"],[a,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,g.trim],[i,g.trim],[a,p]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[a,p]],[/((pebble))app\/[\d\.]+\s/i],[n,i,[a,h]],[/droid.+;\s(glass)\s\d/i],[i,[n,"Google"],[a,h]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[i,[n,"Zebra"],[a,h]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[i,[a,d]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[i,[a,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[a,g.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[i,[n,"Generic"]],[/(phone)/i],[[a,d]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[t,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[t,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,t],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[t,s]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,t],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[s,[t,f.str,v.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[t,f.str,v.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[t,/_/g,"."],[s,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[s,"Mac OS"],[t,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i],[s,t],[/\(bb(10);/i],[t,[s,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[t,[s,"Symbian"]],[/\((series40);/i],[s],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[t,[s,"webOS"]],[/crkey\/([\d\.]+)/i],[t,[s,"Chromecast"]],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[s,t],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],t],[/(sunos)\s?([\w\.\d]*)/i],[[s,"Solaris"],t],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i],[s,t],[/(haiku)\s(\w+)/i],[s,t],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[s,t]]},k=function(i,s){if("object"==typeof i&&(s=i,i=b),!(this instanceof k))return new k(i,s).getResult();var e=i||(void 0!==r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?g.extend(x,s):x;return this.getBrowser=function(){var i={name:b,version:b};return f.rgx.call(i,e,o.browser),i.major=g.major(i.version),i},this.getCPU=function(){var i={architecture:b};return f.rgx.call(i,e,o.cpu),i},this.getDevice=function(){var i={vendor:b,model:b,type:b};return f.rgx.call(i,e,o.device),i},this.getEngine=function(){var i={name:b,version:b};return f.rgx.call(i,e,o.engine),i},this.getOS=function(){var i={name:b,version:b};return f.rgx.call(i,e,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(i){return e=255<i.length?g.trim(i,255):i,this},this.setUA(e),this};k.VERSION="0.7.26",k.BROWSER={NAME:s,MAJOR:"major",VERSION:t},k.CPU={ARCHITECTURE:l},k.DEVICE={MODEL:i,VENDOR:n,TYPE:a,CONSOLE:w,MOBILE:d,SMARTTV:p,TABLET:m,WEARABLE:h,EMBEDDED:"embedded"},k.ENGINE={NAME:s,VERSION:t},k.OS={NAME:s,VERSION:t},typeof exports!=e?(typeof module!=e&&module.exports&&(exports=module.exports=k),exports.UAParser=k):"function"==typeof define&&define.amd?define(function(){return k}):void 0!==r&&(r.UAParser=k);var y,E=void 0!==r&&(r.jQuery||r.Zepto);E&&!E.ua&&(y=new k,E.ua=y.getResult(),E.ua.get=function(){return y.getUA()},E.ua.set=function(i){y.setUA(i);var s,e=y.getResult();for(s in e)E.ua[s]=e[s]})}("object"==typeof window?window:this);