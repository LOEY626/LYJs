const $ = s => document.getElementById(s);
 const ROUTE_DAYS = [{day:1,type:'walking',from:'重庆市北碚区兼善中学附近',to:'重庆市北碚区澄江镇人民政府 / 澄江镇卫生院附近',province:'重庆',distance:'25-30km',ascent:320,hours:'6.5-7h',note:'第一天只走到澄江镇，不再写到草街。作为适应段，重点测试背包重量、鞋袜磨合、补给节奏。',risk:'第一天不要超速，不要走夜路。到达澄江镇前必须确认住宿和补给。',food:'澄江镇周边简餐 / 面食 / 补给小卖部',lat:29.884,lon:106.451},{day:2,type:'walking',from:'澄江镇人民政府附近',to:'合川区人民政府 / 合川区人民医院附近',province:'重庆',distance:'25-30km',ascent:200,hours:'6-7h',note:'从澄江镇继续向合川城区推进，合川城区作为住宿、补给和休整更稳定的节点。',risk:'进城前注意车辆、人流和背包安全，尽量在天黑前到达住宿点。',food:'合川城区各类餐饮丰富',lat:30.004,lon:106.265},{day:3,type:'walking',from:'合川区人民政府附近',to:'合川区太和镇人民政府附近',province:'重庆',distance:'28km',ascent:180,hours:'6.5h',note:'从合川城区向太和镇推进，保持连续徒步。',risk:'提前确认太和镇住宿和补给，不要临时找不到住宿。',food:'太和镇简餐 / 小卖部补给',lat:30.092,lon:106.108},{day:4,type:'walking',from:'太和镇人民政府附近',to:'潼南区人民政府 / 潼南汽车站 / 潼南站附近',province:'重庆',distance:'30km',ascent:150,hours:'7h',note:'重庆段最后一个主要徒步日，到达潼南作为交通接驳点。',risk:'到达潼南后确认第二天车票和住宿，不要夜间赶车。',food:'潼南城区各类餐饮',lat:30.207,lon:105.858},{day:5,type:'transit',from:'潼南站 / 潼南汽车站',to:'广元站 / 广元市中心住宿点',province:'重庆 -> 四川',distance:'公共交通接驳',ascent:0,hours:'约2.5h以上',note:'从潼南通过动车、火车或其他公共交通接驳至广元，进入四川段。',risk:'提前购票，避免夜间到站，优先选择白天到达广元并入住。',food:'广元城区各类餐饮',lat:32.434,lon:105.859},{day:6,type:'walking',from:'广元站附近',to:'昭化古城游客中心 -> 剑门关镇人民政府附近',province:'四川',distance:'30km',ascent:350,hours:'7h',note:'四川段开始，从广元向昭化、剑门关镇方向推进。昭化古城和剑门关只作为地标，不要求进入景区内部。',risk:'避免封闭景区道路、长隧道和大车密集路段。提前确认剑门关镇住宿。',food:'剑门关镇周边简餐 / 豆腐店',lat:32.186,lon:105.558},{day:7,type:'walking',from:'剑门关镇人民政府附近',to:'汉阳镇人民政府附近 -> 普安镇人民政府 / 普安镇卫生院附近',province:'四川',distance:'28km',ascent:300,hours:'6.5h',note:'沿剑阁方向继续行进，经过汉阳镇，抵达普安镇。',risk:'山区道路注意大车、弯道和没有行人空间的路段。',food:'普安镇简餐 / 面食',lat:32.048,lon:105.352},{day:8,type:'walking',from:'普安镇人民政府附近',to:'柳沟镇人民政府附近 -> 武连镇人民政府 / 武连镇卫生院附近',province:'四川',distance:'32km',ascent:350,hours:'7.5h',note:'从普安镇继续向柳沟镇、武连镇推进，当天距离偏长。',risk:'必须早出发。如果天气不好、体力下降或住宿不确定，及时缩短线路或改乘公共交通。',food:'武连镇简餐 / 补给',lat:31.902,lon:105.215},{day:9,type:'walking',from:'武连镇人民政府附近',to:'梓潼县人民政府 / 梓潼县人民医院附近',province:'四川',distance:'30km',ascent:280,hours:'7h',note:'四川段最后一个主要徒步日，到达梓潼县城。',risk:'到达梓潼后确认第二天前往甘肃的交通接驳方案。',food:'梓潼县各类餐饮',lat:31.667,lon:105.118},{day:10,type:'transit',from:'梓潼汽车站 / 梓潼县城',to:'绵阳站 -> 陇南站 -> 合作市人民政府 / 合作汽车站附近',province:'四川 -> 甘肃',distance:'公共交通接驳',ascent:0,hours:'以当天购票App为准',note:'通过公共交通进入甘肃段，为后续甘肃徒步做接驳。',risk:'交通链条较长，必须提前确认班次，避免夜间滞留陌生车站。',food:'合作市区各类餐饮',lat:34.989,lon:102.906},{day:11,type:'walking',from:'合作市人民政府 / 合作汽车站附近',to:'太子山观景台附近可住宿点 / 太子山游客服务点附近',province:'甘肃',distance:'28km',ascent:600,hours:'7h',note:'甘肃段开始，海拔和爬升明显增加，作为高海拔适应段。',risk:'必须提前确认太子山附近是否真的有住宿。如果没有住宿，不要把终点设在观景台，必须改乘公共交通到可住宿城镇。',food:'太子山沿途简餐 / 自带补给',lat:35.148,lon:103.112},{day:12,type:'walking',from:'太子山观景台附近可住宿点 / 太子山游客服务点附近',to:'和政县人民政府 / 和政县人民医院附近',province:'甘肃',distance:'25km',ascent:300,hours:'6h',note:'从太子山方向继续前往和政县，当天距离相对可控。',risk:'山地天气变化快，必须每天早上重新确认天气、风速、降雨和住宿。',food:'和政县简餐 / 面食',lat:35.421,lon:103.350},{day:13,type:'walking',from:'和政县人民政府附近',to:'临夏市人民政府 / 临夏汽车南站附近',province:'甘肃',distance:'30km',ascent:400,hours:'7h',note:'把原来的"兰州方向"具体化为临夏市。临夏更适合作为住宿、补给和前往兰州的交通中转点。',risk:'不要为了赶进度走夜路。如果天黑前无法到达临夏市区，必须改乘公共交通。',food:'临夏市区各类餐饮 / 手抓羊肉',lat:35.600,lon:103.214},{day:14,type:'transit-plus-walking',from:'临夏汽车南站 / 临夏市区',to:'兰州市七里河区人民政府 / 兰州西站附近',province:'甘肃',distance:'公共交通接驳 + 收官徒步',ascent:200,hours:'以当天交通App和实际步行距离为准',note:'最后一天从临夏通过公共交通接驳到兰州七里河附近，再完成收官徒步。不要写成从临夏纯徒步25km到兰州七里河。',risk:'进入兰州城市边缘后注意交通、人流和背包安全。最后一天也不要放松警惕。',food:'兰州城区各类餐饮',lat:36.060,lon:103.795}];
 const STATS = ROUTE_DAYS.reduce((a,d)=>{a.total++;if(d.type==='walking')a.walk++;else if(d.type==='transit')a.transit++;else a.mix++;return a;},{total:0,walk:0,transit:0,mix:0});
 const WEATHER_ICONS = {sunny:'\u2600\uFE0F',cloudy:'\u26C5',rain:'\uD83C\uDF27\uFE0F',storm:'\u26C8\uFE0F'};
 const FIELD_DEVICES = ['DJI Air 3S（一块电池）','DJI Action 4','DJI Pocket 3','Dazz','Blackmagic Cam'];
 const SAFETY_ITEMS = ['\uD83C\uDF24\uFE0F  每天出发前检查天气','\uD83C\uDFE0  每天出发前确认住宿','\uD83C\uDF5E  每天出发前确认补给','\uD83D\uDDFA\uFE0F  每天出发前确认路线','\uD83D\uDE8C  每天出发前确认交通接驳','\uD83D\uDCAA  每天出发前确认身体状态','\uD83D\uDCF1  每天出发前确认手机和充电宝电量','\uD83D\uDEBA  女生独行避免夜路','\uD83C\uDF05  天黑前到达可住宿地点','\uD83D\uDEE3\uFE0F  不走高速','\uD83D\uDE87  尽量避开长隧道','\uD83D\uDEA7  不走封闭施工道路','\uD83D\uDE9B  不走大车密集无人行空间路段','\uD83C\uDF27\uFE0F  天气恶劣改乘公共交通','\uD83C\uDFE0  无住宿改乘公共交通','\uD83C\uDF71  无补给改乘公共交通','\uD83E\uDD15  身体疼痛改乘公共交通','\u26A0\uFE0F  路线危险改乘公共交通','\uD83D\uDCF5  手机没电或导航失效停止徒步','\uD83D\uDCCD  每天给家人朋友发实时位置','\uD83D\uDCDE  每天固定报平安','\uD83D\uDEF8  无人机检查禁飞区天气','\uD83D\uDD0B  Air 3S仅一块电池非必要不飞'];
 const GEAR_DATA = {'徒步装备':['30L 主背包','10L 设备包','徒步鞋','水壶/水袋','头灯或手电','防晒用品','雨具','简易修补工具','纸巾/湿巾','身份证件','少量现金'],'衣物系统':['硬壳1','软壳1','羽绒1','防晒外套1','速干衣','美利奴短裤','硬壳裤','速干软壳裤','被子','内衣裤','帽子','手套（可选）'],'电子设备':['手机','25000mAh充电宝','5根线','充电头','耳机','备用手机卡或流量（可选）'],'摄影设备':['DJI Air 3S（一块电池）','DJI Action 4','DJI Pocket 3','Dazz App','Blackmagic Cam App','存储卡','读卡器（可选）','设备收纳包'],'应急药品':['碘伏棉签x6','红花油','生理盐水10ml','镇痛消炎胶x10','速效救心丸','肠炎宁片x12','扑尔敏','急救毯x3','蒙脱石散x4','999感冒灵x3','电解质快充包30mlx8','葡萄糖饮10mlx10','能量胶x5','盐丸x10'],'路餐':['坚果厚切面包80gx2','馒头100gx4','压缩饼干45gx4','奥利奥x2','混合坚果80g','鸡胸肉50gx4','特牛肉50gx4','士力架x2']};

 function qs(s,p){return document.querySelector(s)}
 function qsa(s){return document.querySelectorAll(s)}
 
 function render(el, html){if(el)el.innerHTML=html}
 function getLS(k,d){try{return JSON.parse(localStorage.getItem(k)||d||'{}')}catch(e){return{}}}
 function setLS(k,v){localStorage.setItem(k,JSON.stringify(v))}

 function getUserLocation(){
   return new Promise(function(resolve,reject){
     if(!navigator.geolocation){reject(new Error('\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5b9a\u4f4d'));return;}
     navigator.geolocation.getCurrentPosition(
       function(p){resolve({lat:p.coords.latitude,lon:p.coords.longitude});},
       function(e){reject(e);},
       {enableHighAccuracy:true,timeout:10000,maximumAge:0}
     );
   });
 }
 
 // Hero
 render($('heroStats'),'<div class="hero-stat"><div class="num">14</div><div class="label">\u603B\u5929\u6570</div></div><div class="hero-stat"><div class="num">350 KM</div><div class="label">\u8BA1\u5212\u8DDD\u79BB</div></div><div class="hero-stat"><div class="num">'+STATS.walk+'</div><div class="label">\u5F92\u6B65\u65E5</div></div><div class="hero-stat"><div class="num">'+STATS.transit+'</div><div class="label">\u4EA4\u901A\u65E5</div></div><div class="hero-stat"><div class="num">\u5170\u5DDE</div><div class="label">\u76EE\u7684\u5730</div></div>');
 render($('statusTags'),'<span class="status-tag"><span class="tag-dot green"></span>ROUTE / NORTHBOUND</span><span class="status-tag"><span class="tag-dot green"></span>WALK '+STATS.walk+'</span><span class="status-tag"><span class="tag-dot amber"></span>TRANSIT '+STATS.transit+'</span><span class="status-tag"><span class="tag-dot green"></span>350 KM</span><span class="status-tag"><span class="tag-dot amber"></span>SAFETY</span><span class="status-tag"><span class="tag-dot red"></span>WEATHER</span>');
 
 // Overview stats
 render($('overviewStats'),'<div class="stat-card"><div class="num">'+STATS.total+'</div><div class="label">\u603B\u5929\u6570</div></div><div class="stat-card"><div class="num">'+STATS.walk+'</div><div class="label">\u5F92\u6B65\u65E5</div></div><div class="stat-card"><div class="num">'+STATS.transit+'</div><div class="label">\u4EA4\u901A\u63A5\u9A73\u65E5</div></div><div class="stat-card"><div class="num">350 km</div><div class="label">\u8BA1\u5212\u5F92\u6B65\u8DDD\u79BB</div></div><div class="stat-card"><div class="num">'+ROUTE_DAYS.reduce((s,d)=>s+Math.max(0,d.ascent),0)+'m</div><div class="label">\u603B\u722C\u5347</div></div><div class="stat-card full"><div class="num">'+ROUTE_DAYS[0].from.split('/')[0].trim()+'\u2192'+ROUTE_DAYS[ROUTE_DAYS.length-1].to.split('/')[0].trim()+'</div><div class="label">\u8DEF\u7EBF\u65B9\u5411</div></div>');
 
 // Day cards
 function renderDays(){
   var dc=getLS('daysCompleted');
   render($('dayCards'),ROUTE_DAYS.map(function(d, idx){
     var ic=d.type==='walking'?'\uD83D\uDEB6':d.type==='transit'?'\uD83D\uDE8C':'\uD83D\uDE8C+\uD83D\uDEB6';
     var tl=d.type==='walking'?'\u5F92\u6B65':d.type==='transit'?'\u4EA4\u901A\u63A5\u9A73':'\u4EA4\u901A+\u6536\u5B98';
     var done=dc['day'+d.day]||false;
     return '<div class="day-card '+d.type+' fade-in"><div class="day-card-header"><div class="day-badge">'+d.day+'</div><span class="day-type">'+ic+' '+tl+'</span></div><div class="day-card-body"><div class="day-field"><span class="field-label">\u8D77\u70B9</span><span class="field-value">'+d.from+'</span></div><div class="day-field"><span class="field-label">\u7EC8\u70B9</span><span class="field-value">'+d.to+'</span></div><div class="day-field"><span class="field-label">\u7701\u4EFD</span><span class="field-value">'+d.province+'</span></div><div class="day-field"><span class="field-label">\u8DDD\u79BB</span><span class="field-value">'+d.distance+'</span></div><div class="day-field"><span class="field-label">\u722C\u5347</span><span class="field-value">'+d.ascent+'m</span></div><div class="day-field"><span class="field-label">\u9884\u8BA1\u65F6\u95F4</span><span class="field-value">'+d.hours+'</span></div><div class="day-field full"><span class="field-label">\u8DEF\u7EBF\u8BF4\u660E</span><span class="field-value">'+d.note+'</span></div><div class="day-field full"><span class="field-label">\u98CE\u9669\u63D0\u9192</span><span class="field-value" style="color:var(--warning)">'+d.risk+'</span></div><div class="day-field full"><span class="field-label">\u7F8E\u98DF\u63A8\u8350</span><span class="field-value">'+d.food+'</span></div></div><div class="day-card-actions"><a class="btn-sm" href="https://uri.amap.com/navigation?from='+(idx>0?ROUTE_DAYS[idx-1].lon:106.420)+','+(idx>0?ROUTE_DAYS[idx-1].lat:29.820)+'&to='+d.lon+','+d.lat+'&mode='+(d.type==='walking'?'walking':'transit')+'" target="_blank">\uD83D\uDCCD \u5BFC\u822A</a><a class="btn-sm" href="https://uri.amap.com/search?key=美食&location='+d.lon+','+d.lat+'" target="_blank">\uD83C\uDF5C \u7F8E\u98DF</a><a class="btn-sm" href="https://uri.amap.com/search?key=\u4F4F\u5BBF&location='+d.lon+','+d.lat+'" target="_blank">\uD83C\uDFE8 \u4F4F\u5BBF</a><a class="btn-sm" href="https://www.12306.cn" target="_blank">\uD83D\uDE84 \u8D2D\u7968</a><span class="btn-sm btn-warning">\u26A0\uFE0F '+d.risk.substring(0,16)+'\u2026</span></div><label class="day-check '+(done?'completed':'')+'"><input type="checkbox" data-day="'+d.day+'" '+(done?'checked':'')+'> Day '+d.day+' \u5DF2\u5B8C\u6210</label></div>';
   }).join(''));
   qsa('.day-check input').forEach(function(cb){
     cb.addEventListener('change',function(){
       var dc=getLS('daysCompleted');
       dc['day'+this.dataset.day]=this.checked;
       setLS('daysCompleted',dc);
       this.closest('.day-check').classList.toggle('completed',this.checked);
       updateProg();
     });
   });
 }
 
 function updateProg(){
   var dc=getLS('daysCompleted');
   var done=ROUTE_DAYS.filter(function(x){return dc['day'+x.day];}).length;
   var pct=Math.round(done/ROUTE_DAYS.length*100);
   var pf=$('progressFill');if(pf)pf.style.width=pct+'%';
   var pl=$('progressLabel');if(pl)pl.textContent='\u5DF2\u5B8C\u6210 '+done+'/'+ROUTE_DAYS.length+' \u5929 ('+pct+'%)';
   render($('progressStats'),'<div class="progress-stat"><div class="num">'+done+'</div><div class="label">\u5DF2\u5B8C\u6210</div></div><div class="progress-stat"><div class="num">'+(ROUTE_DAYS.length-done)+'</div><div class="label">\u5269\u4F59\u5929\u6570</div></div><div class="progress-stat"><div class="num">'+(350-Math.round(350*pct/100))+' km</div><div class="label">\u5269\u4F59\u8DDD\u79BB</div></div>');
 }
 
 // Map
 var mapInst=null,chartInst=null;
 function initMap(lat, lon){
   var w=$('mapWrapper');
   if(typeof L==='undefined'||!L.map){if(w)w.classList.add('error');return;}
   var clat=lat||31.5,clon=lon||105.5,zoom=lat?8:6;
   mapInst=L.map('map',{zoomControl:true,scrollWheelZoom:true}).setView([clat,clon],zoom);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'\u00a9 OSM',maxZoom:18}).addTo(mapInst);
   if(lat){
     L.circleMarker([lat,lon],{radius:10,fillColor:'#4285F4',color:'#FFF',weight:3,fillOpacity:0.8})
       .addTo(mapInst).bindPopup('<b>\uD83D\uDCCD \u60A8\u7684\u4F4D\u7F6E</b>').openPopup();
   }
   var dc=getLS('daysCompleted');
   ROUTE_DAYS.forEach(function(d){
     var c=d.type==='walking'?'#2F6FAE':d.type==='transit'?'#AEBBCC':'#26384D';
     var mk=L.marker([d.lat,d.lon],{icon:L.divIcon({html:'<div style="width:10px;height:10px;border-radius:50%;background:'+c+';border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.15)"></div>',iconSize:[10,10],iconAnchor:[5,5],className:''})}).addTo(mapInst);
     var ci=d.type==='walking'?'\uD83D\uDEB6':d.type==='transit'?'\uD83D\uDE8C':'\uD83D\uDE8C+\uD83D\uDEB6';
     mk.bindPopup('<b>Day '+d.day+' '+(dc['day'+d.day]?'\u2705':'')+'</b><br>'+ci+' '+d.from.split('/')[0]+' \u2192 '+d.to.split('/')[0]+'<br>'+d.distance+' | '+d.ascent+'m');
   });
 }
 
 // Chart
 function initChart(){
   var w=$('chartWrapper');
   if(typeof Chart==='undefined'){if(w)w.classList.add('error');render($('chartTextData'),ROUTE_DAYS.map(function(d){return'Day'+d.day+': '+d.ascent+'m'}).join(' \u00B7 '));return;}
   if(w)w.classList.remove('error');
   var ctx=$('elevationChart').getContext('2d');
   chartInst=new Chart(ctx,{
     type:'line',
     data:{labels:ROUTE_DAYS.map(function(d){return'Day'+d.day}),
       datasets:[{label:'\u722C\u5347(m)',data:ROUTE_DAYS.map(function(d){return d.ascent}),
         borderColor:'#2F6FAE',backgroundColor:'rgba(47,111,174,0.08)',
         fill:true,tension:.4,
         pointBackgroundColor:ROUTE_DAYS.map(function(d){return d.type==='walking'?'#2F6FAE':d.type==='transit'?'#AEBBCC':'#26384D'}),
         pointRadius:3,pointHoverRadius:5,borderWidth:2}]},
     options:{responsive:true,maintainAspectRatio:true,plugins:{legend:{display:false}},
       scales:{x:{grid:{display:false},ticks:{color:'#8A96A8',font:{size:9}}},
         y:{grid:{color:'rgba(174,187,204,0.15)'},ticks:{color:'#8A96A8',font:{size:9}},
           title:{display:true,text:'\u722C\u5347(m)',color:'#8A96A8',font:{size:9}}}}}});
 }
 
 // Weather
function renderWeather(wd){
  var lookup={};
  if(wd)wd.forEach(function(x){lookup['d'+x.day]=x;});
  render($('weatherGrid'),ROUTE_DAYS.map(function(d){
    var w=lookup['d'+d.day];
    if(w){
      var wmo=WMO_CODES[w.code]||{icon:'\u2753',text:'\u672A\u77E5'};
      var adv=(w.code<=3||(w.code>=45&&w.code<=48))?'\u2705 \u9002\u5408':w.code>=61?'\u26A0\uFE0F \u6CE8\u610F':'\u2705 \u9002\u5408';
      return '<div class="weather-card"><div class="w-day">Day '+d.day+' <span style="float:right;font-weight:400;color:var(--text-muted)">'+d.province.split('\u2192')[0].trim()+'</span></div><div class="w-item"><span class="w-label">\u5929\u6C14</span><span>'+wmo.icon+' '+wmo.text+'</span></div><div class="w-item"><span class="w-label">\u6E29\u5EA6</span><span>'+w.tmin+'~'+w.tmax+'\u00B0C</span></div><div class="w-item"><span class="w-label">\u5F92\u6B65\u5EFA\u8BAE</span><span style="color:var(--metal-blue-500)">'+adv+'</span></div></div>';
    }
    return '<div class="weather-card"><div class="w-day">Day '+d.day+' <span style="float:right;font-weight:400;color:var(--text-muted)">'+d.province.split('\u2192')[0].trim()+'</span></div><div class="w-item"><span class="w-label">\u5929\u6C14</span><span>--</span></div><div class="w-item"><span class="w-label">\u6E29\u5EA6</span><span>--</span></div><div class="w-item"><span class="w-label">\u5F92\u6B65\u5EFA\u8BAE</span><span style="color:var(--text-muted)">\u52A0\u8F7D\u4E2D...</span></div></div>';
  }).join(''));
}
 
 // Realtime weather helpers
 const WMO_CODES={0:{icon:'\u2600\uFE0F',text:'\u6674\u5929'},1:{icon:'\uD83C\uDF24\uFE0F',text:'\u5927\u90E8\u6674\u6717'},2:{icon:'\u26C5',text:'\u591A\u4E91'},3:{icon:'\u2601\uFE0F',text:'\u9634\u5929'},45:{icon:'\uD83C\uDF2B\uFE0F',text:'\u96FE'},48:{icon:'\uD83C\uDF2B\uFE0F',text:'\u96FE\u51C0'},51:{icon:'\uD83C\uDF26\uFE0F',text:'\u5C0F\u6BDB\u6BDB\u96E8'},53:{icon:'\uD83C\uDF26\uFE0F',text:'\u6BDB\u6BDB\u96E8'},55:{icon:'\uD83C\uDF26\uFE0F',text:'\u5927\u6BDB\u6BDB\u96E8'},61:{icon:'\uD83C\uDF27\uFE0F',text:'\u5C0F\u96E8'},63:{icon:'\uD83C\uDF27\uFE0F',text:'\u4E2D\u96E8'},65:{icon:'\uD83C\uDF27\uFE0F',text:'\u5927\u96E8'},71:{icon:'\uD83C\uDF28\uFE0F',text:'\u5C0F\u96EA'},73:{icon:'\uD83C\uDF28\uFE0F',text:'\u4E2D\u96EA'},75:{icon:'\uD83C\uDF28\uFE0F',text:'\u5927\u96EA'},80:{icon:'\uD83C\uDF26\uFE0F',text:'\u9635\u96E8'},81:{icon:'\uD83C\uDF27\uFE0F',text:'\u4E2D\u9635\u96E8'},82:{icon:'\uD83C\uDF27\uFE0F',text:'\u5927\u9635\u96E8'},95:{icon:'\u26C8\uFE0F',text:'\u96F7\u66B4'},96:{icon:'\u26C8\uFE0F',text:'\u51B0\u96F9\u96F7\u66B4'},99:{icon:'\u26C8\uFE0F',text:'\u5927\u51B0\u96F9\u96F7\u66B4'}};

 async function fetchWeather(lat,lon){
   try{
     var r=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current_weather=true&timezone=auto');
     var d=await r.json();
    return d.current_weather;
  }catch(e){console.error('\u83B7\u53D6\u5929\u6C14\u5931\u8D25:',e);return null;}
}

const WEATHER_CACHE_KEY='loeyWeatherCache';
const WEATHER_CACHE_TTL=1800000;

async function loadDayWeather(){
  try{
    var c=JSON.parse(localStorage.getItem(WEATHER_CACHE_KEY)||'null');
    if(c&&Date.now()-c.ts<WEATHER_CACHE_TTL)return c.data;
    var r=await Promise.all(ROUTE_DAYS.map(function(d){
      return fetch('https://api.open-meteo.com/v1/forecast?latitude='+d.lat+'&longitude='+d.lon+'&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=1')
        .then(function(r){return r.json();})
        .then(function(x){if(x.daily)return{day:d.day,tmax:x.daily.temperature_2m_max[0],tmin:x.daily.temperature_2m_min[0],code:x.daily.weathercode[0]};return null;})
        .catch(function(){return null;});
    }));
    var f=r.filter(function(x){return x!==null;});
    localStorage.setItem(WEATHER_CACHE_KEY,JSON.stringify({ts:Date.now(),data:f}));
    return f;
  }catch(e){return[];}
}

function updateLocationWeather(lat,lon,weather){
   var el=$('locationWeatherDisplay');
   if(!el){
     el=document.createElement('div');
     el.id='locationWeatherDisplay';
     el.className='location-weather-card';
     var ms=$('mapWrapper');
     if(ms)ms.after(el);
     else{document.getElementById('mapSection').appendChild(el);}
   }
   if(!weather){
     el.innerHTML='<div class="lw-loading">\u65E0\u6CD5\u83B7\u53D6\u5F53\u524D\u4F4D\u7F6E\u5929\u6C14</div>';
     el.className='location-weather-card error';return;
   }
   var wmo=WMO_CODES[weather.weathercode]||{icon:'\u2753',text:'\u672A\u77E5'};
   el.className='location-weather-card';
   el.innerHTML='<div class="lw-header"><span class="lw-icon">\uD83D\uDCCD</span><span class="lw-address">\u5F53\u524D\u4F4D\u7F6E</span></div>'+
     '<div class="lw-body"><div class="lw-weather-main">'+
     '<span class="lw-wmo-icon">'+wmo.icon+'</span>'+
     '<span class="lw-temp">'+weather.temperature+'\u00B0C</span>'+
     '<span class="lw-location">'+lat.toFixed(4)+', '+lon.toFixed(4)+'</span></div>'+
     '<div class="lw-details">'+
     '<div class="lw-detail"><span>\u5929\u6C14</span><b>'+wmo.text+'</b></div>'+
     '<div class="lw-detail"><span>\u98CE\u901F</span><b>'+weather.windspeed+' km/h</b></div>'+
     '</div></div>';
 }
 
 // Safety
 function renderSafety(){
   var s=getLS('safetyChecklist');
   render($('safetyGrid'),SAFETY_ITEMS.map(function(item,idx){
     var id='s_'+idx,done=s[id]||false;
     return '<div class="safety-item '+(done?'checked':'')+'"><input type="checkbox" data-sf="'+id+'" '+(done?'checked':'')+'> '+item+'</div>';
   }).join(''));
   qsa('.safety-item input').forEach(function(cb){
     cb.addEventListener('change',function(){
       var s=getLS('safetyChecklist');
       s[this.dataset.sf]=this.checked;
       setLS('safetyChecklist',s);
       this.closest('.safety-item').classList.toggle('checked',this.checked);
       updateSafety();
     });
   });
   updateSafety();
 }
 function updateSafety(){
   var s=getLS('safetyChecklist'),done=0;
   SAFETY_ITEMS.forEach(function(_,i){if(s['s_'+i])done++;});
   var el=$('safetyStatus');
   if(el){
     if(done>=SAFETY_ITEMS.length){el.className='safety-ready ready';el.textContent='\u2705 READY';}
     else{el.className='safety-ready not-ready';el.textContent='\u26A0 NOT READY '+done+'/'+SAFETY_ITEMS.length;}
   }
 }
 
 // Gear
 function renderGear(){
   var g=getLS('gearChecklist');
   var html='',tItems=0,tDone=0;
  Object.entries(GEAR_DATA).forEach(function(e){
    var cat=e[0],items=e[1],catDone=0,catHtml='';
    catHtml+='<div class="gear-category"><div class="gear-category-bg" style="background-image:url(\'assets/gear-bg.jpg\')"></div><h3>'+cat+' <span class="gear-cat-pct" id="gpct_'+cat+'">0%</span></h3><div class="gear-progress-bar"><div class="gear-progress-fill" id="gfill_'+cat+'"></div></div>';
    items.forEach(function(item){
       var id='g_'+cat+'_'+item.replace(/[\s()（）、]/g,'_');
       var chk=g[id]||false;
       if(chk){catDone++;tDone++;}
       tItems++;
       catHtml+='<label class="gear-item '+(chk?'checked':'')+'"><input type="checkbox" data-gr="'+id+'" '+(chk?'checked':'')+'> '+item+'</label>';
     });
     catHtml+='</div>';
     html+=catHtml;
     setTimeout(function(){
       var p=Math.round(catDone/items.length*100);
       var f=$('gfill_'+cat);if(f)f.style.width=p+'%';
       var pct=$('gpct_'+cat);if(pct)pct.textContent=p+'%';
     },50);
   });
   render($('gearGrid'),html);
   qsa('.gear-item input').forEach(function(cb){
     cb.addEventListener('change',function(){
       var g=getLS('gearChecklist');
       g[this.dataset.gr]=this.checked;
       setLS('gearChecklist',g);
       this.closest('.gear-item').classList.toggle('checked',this.checked);
       updateGearProgress();
     });
   });
 }

function updateGearProgress(){
  var g=getLS("gearChecklist");
  Object.entries(GEAR_DATA).forEach(function(e){
    var cat=e[0],items=e[1],done=0;
    items.forEach(function(item){
      var id="g_"+cat+"_"+item.replace(/[\s()（）、]/g,"_");
      if(g[id]) done++;
    });
    var p=items.length?Math.round(done/items.length*100):0;
    var f=$("gfill_"+cat);if(f)f.style.width=p+"%";
    var pct=$("gpct_"+cat);if(pct)pct.textContent=p+"%";
  });
}

 // Field Record
 function renderField(){
   var day=parseInt($('fieldDay').value)||1;
   var data=getLS('loeyFieldRecord');
   var r=data['day'+day]||{};
   ['point','photo','video','drone','coords','mood'].forEach(function(k){
     var el=$('f_'+k);if(el)el.value=r[k]||'';
   });
   render($('fieldDevices'),FIELD_DEVICES.map(function(d){return'<span class="photo-device">'+d+'</span>';}).join(''));
 }
 function saveField(){
   var day=parseInt($('fieldDay').value)||1;
   var data=getLS('loeyFieldRecord');
   var r={};
   ['point','photo','video','drone','coords','mood'].forEach(function(k){
     var el=$('f_'+k);if(el)r[k]=el.value;
   });
   data['day'+day]=r;
   setLS('loeyFieldRecord',data);
 }
 
 // Photo gallery
 function loadPhotos(){try{return JSON.parse(localStorage.getItem('loeyPhotos')||'[]');}catch(e){return[];}}
 function savePhotos(p){localStorage.setItem('loeyPhotos',JSON.stringify(p));}
 function renderGallery(){
   var photos=loadPhotos();
   var grid=$('photoGalleryGrid'),empty=$('photoEmpty');
   if(photos.length===0){render(grid,'');if(empty)empty.style.display='block';return;}
   if(empty)empty.style.display='none';
   render(grid,photos.map(function(p,i){
     return'<div class="photo-thumb" data-idx="'+i+'"><span class="thumb-index">'+(i+1)+'</span><img src="'+p.data+'" alt="" loading="lazy"></div>';
   }).join(''));
   qsa('.photo-thumb').forEach(function(el){
     el.addEventListener('click',function(){
       var idx=parseInt(this.dataset.idx);
       var photos=loadPhotos();
       if(idx<0||idx>=photos.length)return;
       var v=$('photoViewer'),img=$('viewerImage');
       img.src=photos[idx].data;v.classList.add('active');
       document.body.style.overflow='hidden';
       function closeV(){v.classList.remove('active');document.body.style.overflow='';img.src='';}
       $('viewerClose').onclick=closeV;
       v.onclick=function(e){if(e.target===v)closeV();};
     });
   });
 }
 function initPhotoUpload(){
   $('photoAddBtn').addEventListener('click',function(){$('photoFileInput').click();});
   $('photoFileInput').addEventListener('change',function(e){
     var files=Array.from(e.target.files||[]);
     if(!files.length)return;
     var photos=loadPhotos(),done=0;
     files.forEach(function(f){
       if(!f.type.startsWith('image/')){done++;if(done===files.length){savePhotos(photos);renderGallery();}return;}
       var r=new FileReader();
       r.onload=function(ev){photos.push({data:ev.target.result,timestamp:Date.now()});done++;if(done===files.length){savePhotos(photos);renderGallery();}};
       r.readAsDataURL(f);
     });
     this.value='';
   });
 }
 
 // Nav
 function initNav(){
   qsa('.nav-item, .nav-link').forEach(function(item){
     item.addEventListener('click',function(e){
       if(this.classList.contains('nav-link'))e.preventDefault();
       var target=this.dataset.target||(this.getAttribute('href')?this.getAttribute('href').substring(1):'');
       var el=document.getElementById(target);
       if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
     });
   });
   var links=qsa('.nav-link');
   window.addEventListener('scroll',function(){
     var y=window.scrollY+80,cur='';
     qsa('.section, .hero-section').forEach(function(s){if(s.offsetTop<=y)cur=s.id;});
     links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+cur);});
   });
 }
 
 function initBackToTop(){
   var btn=$('backToTop');
   window.addEventListener('scroll',function(){btn.classList.toggle('visible',window.scrollY>400);});
   btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
 }
 
 function initScrollAnim(){
   if('IntersectionObserver'in window){
     var obs=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.1});
     qsa('.fade-in').forEach(function(el){obs.observe(el);});
   }else{qsa('.fade-in').forEach(function(el){el.classList.add('visible');});}
 }
 
 // Init
 document.addEventListener('DOMContentLoaded',async function(){
   renderDays();
   updateProg();
   renderWeather();
   renderSafety();
   renderGear();
   renderField();
   renderGallery();
   initPhotoUpload();
   initNav();
   initBackToTop();
   initScrollAnim();
   ['f_point','f_photo','f_video','f_drone','f_coords','f_mood'].forEach(function(id){
     var el=$(id);if(el)el.addEventListener('input',saveField);
   });
   var fd=$('fieldDay');if(fd)fd.addEventListener('change',renderField);
   try{
     var pos=await getUserLocation();
     var cf=$('f_coords');
     if(cf&&!cf.value){cf.value=pos.lat.toFixed(6)+', '+pos.lon.toFixed(6);saveField();}
     setTimeout(function(){initMap(pos.lat,pos.lon);},100);
     var w=await fetchWeather(pos.lat,pos.lon);
     updateLocationWeather(pos.lat,pos.lon,w);
   }catch(e){
     console.warn('\u5B9A\u4F4D\u5931\u8D25:',e.message);
     updateLocationWeather(0,0,null);
     setTimeout(initMap,100);
   }
   loadDayWeather().then(function(wd){if(wd.length)renderWeather(wd);});
   setTimeout(initChart,200);
 });
