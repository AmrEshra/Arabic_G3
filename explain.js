// ======================================================================
// شاهد وتعلّم — شروحات متحركة من كتاب لغتي
// EXPLAIN_FOR: أي شروحات تظهر قبل أسئلة كل محطة (بالترتيب)
// EXPLAIN: كل شرح له عنوان (t) وصفحة في الكتاب (p) وتعليق أول (cap)
//          ورسم (html) ودالة تشغيل (play) وأزرار اختيارية (btns)
// ======================================================================
const EXPLAIN_FOR = {
  "1-2": ["takeoff"],
  "1-4": ["sunmoon", "taa", "illa"],
  "2-2": ["tafdeel"],
  "2-3": ["map"],
  "2-4": ["pastpresent", "alif"],
  "3-2": ["cooperate", "taajjub"],
  "3-3": ["ithar"],
  "3-4": ["tanween"],
  "4-2": ["nophone"],
  "4-3": ["satellite"],
  "4-4": ["fa3il"]
};

const PALM = x => `<g class="palm" style="transform-origin:${x+5}px 190px"><rect x="${x}" y="110" width="11" height="80" rx="4" fill="#8A5A2B"/><g transform="translate(${x+5} 110)"><path d="M0 0 C-22 -12 -38 0 -44 14 M0 0 C22 -12 38 0 44 14 M0 0 C-12 -20 -28 -24 -36 -18 M0 0 C12 -20 28 -24 36 -18" stroke="#2E9E5B" stroke-width="7" fill="none" stroke-linecap="round"/></g></g>`;
const PLANE = `<svg viewBox="0 0 64 32" width="84" height="42" aria-hidden="true"><path d="M2 16 C10 12 40 11 56 13 C62 14 62 18 56 19 C40 21 10 20 2 16Z" fill="#fff" stroke="#13679C" stroke-width="2"/><path d="M28 14 L40 2 L46 2 L38 14Z M28 18 L40 30 L46 30 L38 18Z M52 13 L58 5 L62 5 L58 14Z" fill="#2590CC"/><circle cx="14" cy="15.5" r="1.6" fill="#13679C"/><circle cx="20" cy="15.2" r="1.6" fill="#13679C"/><circle cx="26" cy="15" r="1.6" fill="#13679C"/></svg>`;
const PERSON = (c, h) => `<svg viewBox="0 0 40 60" width="40" height="60" aria-hidden="true"><circle cx="20" cy="13" r="10" fill="#F6D2B0"/>${h?`<path d="M9 14 C9 0 31 0 31 14 L31 26 L9 26Z" fill="${h}"/><circle cx="20" cy="15" r="7" fill="#F6D2B0"/>`:""}<rect x="7" y="25" width="26" height="33" rx="11" fill="${c}"/></svg>`;

const EXPLAIN = {

/* ---------------- الوحدة الأولى ---------------- */
takeoff: {
  t: "الأضداد: إقلاع وهبوط", p: 26,
  cap: "صعد عادل إلى الطائرة… اضغط «إقلاع» ثم «هبوط»",
  html: `<div class="ex-sky" style="background:#E3F1FA">
    <div style="position:absolute;bottom:0;left:0;right:0;height:26px;background:#B8C4CC"></div>
    <div style="position:absolute;bottom:11px;left:20px;right:20px;border-top:3px dashed #fff"></div>
    <div class="cloud" style="top:30px;left:18%">☁️</div><div class="cloud" style="top:60px;left:62%">☁️</div>
    <div id="xPlane" style="position:absolute;right:16px;bottom:24px">${PLANE}</div>
    <div id="xWord" class="ex-big" style="position:absolute;top:12px;right:0;left:0;text-align:center;opacity:0"></div></div>`,
  btns: [["إقلاع ↗", "up"], ["هبوط ↘", "down"]],
  play(h){ h.run("up"); },
  up(h){
    const p=h.q("#xPlane"), w=h.q("#xWord"), dx=-(h.stage.clientWidth-140);
    h.move(p,[{transform:"translate(0,0) rotate(0)"},{transform:`translate(${dx*0.35}px,-6px) rotate(4deg)`},{transform:`translate(${dx}px,-120px) rotate(10deg)`}],1800);
    w.textContent="إقلاع"; w.style.color="#13679C"; h.pop(w,900);
    h.cap("إقلاع: الطائرة تصعد من الأرض إلى السماء"); h.tone([[440,.15],[660,.25]]);
  },
  down(h){
    const p=h.q("#xPlane"), w=h.q("#xWord"), dx=-(h.stage.clientWidth-140);
    h.move(p,[{transform:`translate(${dx}px,-120px) rotate(10deg)`},{transform:`translate(${dx*0.5}px,-40px) rotate(-6deg)`},{transform:"translate(0,0) rotate(0)"}],1800);
    w.textContent="هبوط"; w.style.color="#C25E12"; h.pop(w,900);
    h.cap("هبوط: الطائرة تنزل إلى الأرض. «هبوط» ضد «إقلاع»"); h.tone([[660,.15],[440,.25]]);
  }
},

sunmoon: {
  t: "(ال) الشمسية و(ال) القمرية", p: 28,
  cap: "اضغط «الشمس» أو «القمر» لترى ماذا يحدث للّام",
  html: `<div class="ex-center" style="background:#FFF7E8">
    <div id="xIcon" style="position:absolute;top:12px;left:16px;font-size:44px">☀️</div>
    <div id="xWord" class="ex-huge">ا<span id="xLam">ل</span>شَّمس</div>
    <div id="xSay" class="ex-mid" style="color:#C25E12;opacity:0"></div></div>`,
  btns: [["☀️ الشمس", "sun"], ["🌙 القمر", "moon"]],
  play(h){ h.run("sun"); h.later(()=>h.run("moon"), 4200); },
  sun(h){
    h.q("#xIcon").textContent="☀️"; h.q("#xWord").innerHTML='ا<span id="xLam">ل</span>شَّمس';
    const l=h.q("#xLam"); l.style.color="#D64545";
    h.later(()=>h.move(l,[{opacity:1,transform:"none"},{opacity:.15,transform:"translateY(-8px)"}],800),500);
    const s=h.q("#xSay"); s.textContent="نقرؤها: اشَّمْس"; h.pop(s,1300);
    h.cap("شمسية: اللام تُكتب ولا تُنطق، والحرف بعدها مشدَّد"); h.later(()=>h.tone([[520,.12]]),1300);
  },
  moon(h){
    h.q("#xIcon").textContent="🌙"; h.q("#xWord").innerHTML='ا<span id="xLam">ل</span>قمر';
    const l=h.q("#xLam"); l.style.color="#2E9E5B"; h.pop(l,300);
    const s=h.q("#xSay"); s.textContent="نقرؤها: الْقَمَر"; h.pop(s,1100);
    h.cap("قمرية: اللام تُكتب وتُنطق"); h.later(()=>h.tone([[620,.12]]),1100);
  }
},

taa: {
  t: "التاء المربوطة والتاء المفتوحة", p: 38,
  cap: "انظر كيف نقرأ آخر الكلمة عندما نقف عليها",
  html: `<div class="ex-center" style="background:#FBEAE3;flex-direction:row;gap:clamp(18px,6vw,40px)">
    <div class="ex-col"><div class="ex-huge" id="xT1" style="font-size:clamp(44px,11vw,64px)">مجلّ<span style="color:#B4553A">ة</span></div>
      <div id="xL1" class="ex-chip" style="background:#B4553A">🎀 مربوطة</div><div id="xS1" class="ex-mid" style="color:#B4553A">نقف: مجلّهْ</div></div>
    <div class="ex-col"><div class="ex-huge" id="xT2" style="font-size:clamp(44px,11vw,64px)">صفحا<span style="color:#13679C">ت</span></div>
      <div id="xL2" class="ex-chip" style="background:#13679C">مفتوحة</div><div id="xS2" class="ex-mid" style="color:#13679C">نقف: صفحاتْ</div></div></div>`,
  play(h){
    h.pop(h.q("#xT1"),200); h.pop(h.q("#xL1"),500);
    h.pop(h.q("#xT2"),1100); h.pop(h.q("#xL2"),1400);
    h.pop(h.q("#xS1"),2200); h.pop(h.q("#xS2"),2900);
    h.cap("المربوطة (ة) تُنطق هاءً عند الوقف، والمفتوحة (ت) تبقى تاءً");
    h.later(()=>h.tone([[520,.12]]),2200); h.later(()=>h.tone([[620,.12]]),2900);
  }
},

illa: {
  t: "الاستثناء بـ«إلّا»", p: 30,
  cap: "جلس المسافرون على المقاعد…",
  html: `<div class="ex-center" style="background:#E3F1FA;justify-content:flex-end;padding-bottom:12px">
    <div id="xRow" style="display:flex;gap:10px;align-items:flex-end;height:120px;position:relative">
      ${[0,1,2,3].map(i=>`<div class="seat-wrap"><div class="pp" id="xP${i}">${PERSON(["#2590CC","#2FA5A8","#F2862E","#7A6FD0"][i])}</div><div class="seat"></div></div>`).join("")}
      <div class="seat-wrap"><div class="pp" id="xW">${PERSON("#E07A5C","#6B4A8A")}</div><div class="seat" style="opacity:.35"></div></div>
    </div>
    <div id="xSent" class="ex-mid" style="opacity:0">جلس المسافرون <span style="color:#F06331;font-size:1.25em">إلّا</span> امرأةً</div></div>`,
  play(h){
    for(let i=0;i<4;i++){ const p=h.q("#xP"+i); h.move(p,[{transform:"translateY(-46px)"},{transform:"translateY(-46px)",offset:.2},{transform:"translateY(0)"}],700+i*180); }
    h.move(h.q("#xW"),[{transform:"translateY(-46px)"},{transform:"translateY(-46px)"}],100);
    h.later(()=>{ const w=h.q("#xW"); w.classList.add("ex-glow"); h.tone([[700,.1],[900,.15]]); },1700);
    h.pop(h.q("#xSent"),1900);
    h.later(()=>h.cap("كلهم جلسوا… «إلّا» امرأةً بقيت واقفة. نستثنيها بـ«إلّا»"),1900);
  }
},

/* ---------------- الوحدة الثانية ---------------- */
tafdeel: {
  t: "اسم التفضيل: طويلة ← أطول", p: 69,
  cap: "نقارن بين شيئين بكلمة على وزن «أفعل»",
  html: `<div class="ex-sky" style="background:#E8F5EC">
    <svg viewBox="0 0 320 210" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" style="position:absolute;inset:0">
      <rect x="0" y="190" width="320" height="20" fill="#E6D6C3"/>${PALM(192)}<g id="xPalm2">${PALM(118)}</g></svg>
    <div class="ex-mid" style="position:absolute;right:3%;bottom:30px">نخلة طويلة</div>
    <div id="xL2" class="ex-mid" style="position:absolute;left:3%;bottom:30px;color:#C25E12">نخلة أطول</div></div>`,
  btns: [["مثال آخر", "next"]],
  play(h){
    const g=h.q("#xPalm2 .palm");
    h.move(g,[{transform:"scaleY(1)"},{transform:"scaleY(1.7)"}],1300,250,"cubic-bezier(.3,1.4,.5,1)");
    h.pop(h.q("#xL2"),1500); h.later(()=>h.tone([[523,.1],[784,.2]]),1500);
    h.cap("طويلة ← أطول. ومثلها: واسع ← أوسع، سريع ← أسرع");
  },
  next(h){
    const ex=[["واسع","أوسع"],["سريع","أسرع"],["كبير","أكبر"],["جميل","أجمل"],["طويلة","أطول"]];
    h.state.k=((h.state.k||0)+1)%ex.length; const [a,b]=ex[h.state.k];
    h.cap(`${a} ← ${b}`); const l=h.q("#xL2"); l.textContent=b+" 🏆"; h.pop(l,0); h.tone([[600,.1]]);
  }
},

map: {
  t: "مصايف بلادي على الخريطة", p: 72,
  cap: "نرى أين تقع العاصمة والمصايف الجبلية",
  html: `<div class="ex-sky" style="background:#E0F3F3"><svg id="xMap" viewBox="0 0 300 230" width="100%" height="100%" style="position:absolute;inset:0"></svg>
    <div style="position:absolute;bottom:4px;left:8px;font-size:12px;color:#5E6B82">خريطة تقريبية</div></div>`,
  play(h){
    const P=(lon,lat)=>[(lon-34.2)*12.6+8,(32.4-lat)*12.2+8];
    const border=[[36.5,29.4],[37.9,30.4],[39,32.1],[42.1,31.1],[44.7,29.2],[46.5,29.1],[47.7,28.5],[48.4,27.9],[49.8,26.6],[50.2,25.6],[50.8,24.8],[51.6,24.2],[52.6,22.9],[55.6,22],[55.2,20],[52,19],[48.8,18.3],[47,17],[45,17.4],[43.3,17.5],[42.8,16.4],[42,17.8],[41,19.5],[39.6,21.3],[39,22.5],[38.3,24],[37.2,25.5],[36,27.2],[34.6,28.1],[35,29.4]];
    const svg=h.q("#xMap");
    svg.innerHTML=`<path d="M${border.map(b=>P(...b).join(",")).join(" L")}Z" fill="#F7F1E6" stroke="#2FA5A8" stroke-width="2.5" stroke-linejoin="round" id="xKsa"/>`;
    const path=svg.querySelector("#xKsa"); const len=path.getTotalLength();
    path.style.strokeDasharray=len; h.move(path,[{strokeDashoffset:len},{strokeDashoffset:0}],1400);
    const cities=[["الرياض",46.7,24.7,"#C25E12","العاصمة"],["الطائف",40.4,21.3,"#2E9E5B","عروس المصايف"],["الباحة",41.5,20,"#2E9E5B","غابة رغدان"],["أبها",42.5,18.2,"#2E9E5B","عروس الجبل"],["جازان",42.6,16.9,"#2590CC","بوابة جزر فرسان"],["نجران",44.1,17.5,"#7A6FD0","آثار الأخدود"]];
    cities.forEach(([n,lon,lat,c,d],i)=>{
      const [x,y]=P(lon,lat);
      const g=document.createElementNS("http://www.w3.org/2000/svg","g"); g.style.opacity=0;
      const east = n==="الرياض"||n==="نجران", ly = {"الطائف":112,"الباحة":136,"أبها":160,"جازان":192}[n] ?? y+4;
      const lx = east ? x+13 : 52, anchor = east ? "start":"end";
      g.innerHTML=(east?"":`<line x1="${x-5}" y1="${y}" x2="${lx+3}" y2="${ly-4}" stroke="#5E6B82" stroke-width="1"/>`)+`<circle cx="${x}" cy="${y}" r="${n==="الرياض"?7:5.5}" fill="${c}" stroke="#fff" stroke-width="2"/><text x="${lx}" y="${ly}" text-anchor="${anchor}" font-size="13" font-weight="700" fill="#1D2B45" font-family="Noto Naskh Arabic, serif">${n}</text>`;
      svg.appendChild(g);
      h.later(()=>{ h.pop(g,0); h.cap(`${n}: ${d}`); h.tone([[500+i*60,.1]]); }, 1500+i*1000);
    });
    h.later(()=>h.cap("الطائف والباحة وأبها مصايف جبلية جميلة 🌿"), 1500+cities.length*1000+300);
  }
},

pastpresent: {
  t: "الفعل الماضي والفعل المضارع", p: 69,
  cap: "الماضي حدث أمس، والمضارع يحدث الآن",
  html: `<div class="ex-center" style="background:#E0F3F3">
    <div class="ex-line"><span class="ex-dot" style="right:12%"></span><span class="ex-dot" style="left:12%"></span></div>
    <div style="display:flex;justify-content:space-between;width:82%;margin-top:6px" class="ex-mid"><span>أمس</span><span>الآن</span></div>
    <div style="display:flex;justify-content:space-between;width:82%;margin-top:4px">
      <div class="ex-col"><div id="xPast" class="ex-big" style="color:#7A6FD0">زارَ</div><div class="ex-chip" style="background:#7A6FD0" id="xPl">ماضٍ</div></div>
      <div class="ex-col"><div id="xNow" class="ex-big" style="color:#C25E12">يزورُ</div><div class="ex-chip" style="background:#C25E12" id="xNl">مضارع</div></div></div></div>`,
  btns: [["مثال آخر", "next"]],
  play(h){ h.state.k=-1; h.run("next"); },
  next(h){
    const ex=[["زارَ","يزورُ","زار فواز الرياض أمس… ويزورها الآن"],["فتحَ","يفتحُ","فتح الباب أمس… ويفتحه الآن"],["سافرَ","يسافرُ","سافر عادل أمس… ويسافر الآن"],["وقعَ","يقعُ","وقع… يقع"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [a,b,c]=ex[h.state.k];
    const p=h.q("#xPast"), n=h.q("#xNow"); p.textContent=a; n.textContent=b;
    h.pop(p,200); h.pop(h.q("#xPl"),400); h.pop(n,1100); h.pop(h.q("#xNl"),1300);
    h.later(()=>h.tone([[500,.1]]),200); h.later(()=>h.tone([[700,.1]]),1100); h.cap(c);
  }
},

alif: {
  t: "الألف في آخر الكلمة", p: 78,
  cap: "ألفٌ قائمة… وألفٌ على صورة الياء",
  html: `<div class="ex-center" style="background:#E0F3F3;flex-direction:row;gap:clamp(24px,8vw,48px)">
    <div class="ex-col"><div class="ex-huge" id="xA">دع<span style="color:#13679C">ا</span></div><div id="xAl" class="ex-chip" style="background:#13679C">ألف قائمة (ا)</div></div>
    <div class="ex-col"><div class="ex-huge" id="xY">بك<span style="color:#B4553A">ى</span></div><div id="xYl" class="ex-chip" style="background:#B4553A">على صورة الياء (ى)</div></div></div>`,
  play(h){
    h.move(h.q("#xA"),[{transform:"translateY(0)"},{transform:"translateY(-14px)"},{transform:"translateY(0)"}],800,200);
    h.pop(h.q("#xAl"),700);
    h.move(h.q("#xY"),[{transform:"rotate(0)"},{transform:"rotate(-12deg)"},{transform:"rotate(12deg)"},{transform:"rotate(0)"}],800,1500);
    h.pop(h.q("#xYl"),2000);
    h.later(()=>h.cap("«ى» ليس تحتها نقطتان. ومثلها: مضى، إحدى"),2300);
  }
},

/* ---------------- الوحدة الثالثة ---------------- */
cooperate: {
  t: "التعاون: من ساحة إلى حديقة", p: 103,
  cap: "قسّم المعلم التلاميذ أربع مجموعات…",
  html: `<div class="ex-sky" style="background:#FFF7E8"><svg id="xYard" viewBox="0 0 320 210" width="100%" height="100%" style="position:absolute;inset:0">
    <rect x="10" y="110" width="300" height="90" rx="14" fill="#D9B98C"/>
    <g id="xTrash">${[40,95,150,210,265].map((x,i)=>`<text x="${x}" y="${140+(i%2)*30}" font-size="20">🍂</text>`).join("")}</g>
    <g id="xHoles" style="opacity:0">${[55,125,195,265].map(x=>`<ellipse cx="${x}" cy="160" rx="20" ry="8" fill="#7A5230"/>`).join("")}</g>
    <g id="xSeed" style="opacity:0">${[55,125,195,265].map(x=>`<text x="${x-10}" y="160" font-size="22">🌱</text>`).join("")}</g>
    <g id="xRain" style="opacity:0">${[60,130,200,270].map(x=>`<text x="${x-6}" y="120" font-size="16">💧</text>`).join("")}</g>
    <g id="xTree" style="opacity:0">${[55,125,195,265].map(x=>`<text x="${x-17}" y="168" font-size="40">🌳</text>`).join("")}</g></svg>
    <div id="xStep" class="ex-chip" style="position:absolute;top:12px;right:12px;background:#E07A5C"></div></div>`,
  play(h){
    const step=(n,t)=>{ const s=h.q("#xStep"); s.textContent=n; h.pop(s,0); h.cap(t); h.tone([[480+n.length*8,.1]]); };
    h.later(()=>{ step("١ تنظيف","المجموعة الأولى تنظّف الساحة"); h.move(h.q("#xTrash"),[{opacity:1},{opacity:0,transform:"translateX(-30px)"}],900); },300);
    h.later(()=>{ step("٢ حفر","المجموعة الثانية تحفر الحفر"); h.pop(h.q("#xHoles"),0); },1700);
    h.later(()=>{ step("٣ غرس","المجموعة الثالثة تغرس الشتلات"); h.pop(h.q("#xSeed"),0); },3100);
    h.later(()=>{ step("٤ سقي","المجموعة الرابعة تسقيها بالماء"); h.q("#xRain").style.opacity=1; h.move(h.q("#xRain"),[{transform:"translateY(-20px)",opacity:0},{transform:"translateY(25px)",opacity:1},{transform:"translateY(35px)",opacity:0}],1100); },4500);
    h.later(()=>{ h.q("#xSeed").style.opacity=0; h.pop(h.q("#xTree"),0); h.tone([[523,.1],[659,.1],[784,.25]]);
      const s=h.q("#xStep"); s.textContent="🌳 حديقة!"; s.style.background="#2E9E5B"; h.pop(s,0);
      h.cap("بالتعاون صارت الساحة حديقة خضراء 💚"); },5900);
  }
},

taajjub: {
  t: "أسلوب التعجّب: ما أجملَ…!", p: 110,
  cap: "عندما نرى شيئًا جميلًا جدًّا نتعجّب منه",
  html: `<div class="ex-center" style="background:#FBEAE3">
    <div id="xFlower" style="font-size:86px;line-height:1">🌷</div>
    <div class="ex-big" id="xSent" style="margin-top:6px">ما أجملَ الوردةَ<span id="xBang" style="display:inline-block;color:#F06331">!</span></div></div>`,
  play(h){
    h.move(h.q("#xFlower"),[{transform:"scale(.2) rotate(-20deg)"},{transform:"scale(1.15) rotate(6deg)"},{transform:"scale(1) rotate(0)"}],1100,100,"ease-out");
    h.pop(h.q("#xSent"),1200);
    h.later(()=>{ h.move(h.q("#xBang"),[{transform:"translateY(0) scale(1)"},{transform:"translateY(-14px) scale(1.6)"},{transform:"translateY(0) scale(1)"}],600); h.tone([[700,.1],[1000,.15]]); },1900);
    h.later(()=>h.cap("صيغة التعجّب: ما أفعلَ … ! ولا ننسى علامة التعجّب (!)"),1900);
  }
},

ithar: {
  t: "الإيثار: ثلاث تمرات", p: 116,
  cap: "أعطت أم المؤمنين عائشة المرأةَ ثلاث تمرات…",
  html: `<div class="ex-sky" style="background:#FBEAE3">
    <div style="position:absolute;bottom:14px;left:0;right:0;display:flex;justify-content:space-around;align-items:flex-end;font-size:54px;line-height:1">
      <div class="ex-col"><span>👧</span><span class="ex-sm">البنت الأولى</span></div>
      <div class="ex-col"><span>👩</span><span class="ex-sm">الأم</span></div>
      <div class="ex-col"><span>👧</span><span class="ex-sm">البنت الثانية</span></div></div>
    <div id="xD1" class="date" style="left:calc(50% - 46px)"></div><div id="xD2" class="date" style="left:calc(50% - 12px)"></div>
    <div id="xD3a" class="date half" style="left:calc(50% + 22px)"></div><div id="xD3b" class="date half r" style="left:calc(50% + 36px)"></div></div>`,
  play(h){
    const W=h.stage.clientWidth, side=W*0.33, dy=h.stage.clientHeight-150;
    h.later(()=>{ h.move(h.q("#xD1"),[{transform:"none"},{transform:`translate(${side-10}px,${dy}px)`}],800); h.cap("أعطت البنت الأولى تمرة"); h.tone([[520,.1]]); },500);
    h.later(()=>{ h.move(h.q("#xD2"),[{transform:"none"},{transform:`translate(${-side+5}px,${dy}px)`}],800); h.cap("وأعطت البنت الثانية تمرة"); h.tone([[580,.1]]); },1700);
    h.later(()=>{ h.cap("ورفعت الثالثة لتأكلها… فطلبتها البنتان"); h.move(h.q("#xD3a"),[{transform:"none"},{transform:"translateY(-26px)"}],500); h.move(h.q("#xD3b"),[{transform:"none"},{transform:"translateY(-26px)"}],500); },2900);
    h.later(()=>{ h.cap("فشقّتها نصفين بين ابنتيها ✂️"); h.move(h.q("#xD3a"),[{transform:"translateY(-26px)"},{transform:`translate(${side-40}px,${dy}px)`}],900); h.move(h.q("#xD3b"),[{transform:"translateY(-26px)"},{transform:`translate(${-side-20}px,${dy}px)`}],900); h.tone([[660,.1],[520,.1]]); },4200);
    h.later(()=>{ h.cap("آثرت ابنتيها على نفسها، فأوجب الله لها الجنة 💛"); h.tone([[523,.1],[659,.1],[784,.25]]); },5600);
  }
},

tanween: {
  t: "التنوين: ضمّتان وفتحتان وكسرتان", p: 108,
  cap: "التنوين حركتان في آخر الكلمة، ونسمعه «نْ»",
  html: `<div class="ex-center" style="background:#FBEAE3">
    <div id="xMark" class="ex-huge" style="position:absolute;top:2px;color:#F06331;opacity:0"></div>
    <div id="xWord" class="ex-huge">ساحة</div>
    <div id="xSay" class="ex-mid" style="color:#B4553A;opacity:0"></div>
    <div id="xKind" class="ex-chip" style="background:#E07A5C;opacity:0"></div></div>`,
  btns: [["ضمّتان ـٌ","d"],["فتحتان ـً","f"],["كسرتان ـٍ","k"]],
  play(h){ h.run("d"); h.later(()=>h.run("f"),3600); h.later(()=>h.run("k"),7200); },
  show(h,base,full,say,kind,mark){
    const w=h.q("#xWord"), m=h.q("#xMark"); w.textContent=base; m.textContent=mark; m.style.opacity=1;
    h.move(m,[{transform:"translateY(-30px) scale(1.4)",opacity:0},{transform:"translateY(40px) scale(.8)",opacity:1},{transform:"translateY(60px) scale(.5)",opacity:0}],900);
    h.later(()=>{ w.textContent=full; h.move(w,[{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],400); h.tone([[620,.08],[820,.12]]); },850);
    const s=h.q("#xSay"); s.textContent="نسمعها: "+say; h.pop(s,1100);
    const k=h.q("#xKind"); k.textContent=kind; h.pop(k,1300); h.cap(`${full} ← ${kind}`);
  },
  d(h){ EXPLAIN.tanween.show(h,"ساحة","ساحةٌ","ساحَتُنْ","تنوين ضم","ٌ"); },
  f(h){ EXPLAIN.tanween.show(h,"حديقة","حديقةً","حديقَتَنْ","تنوين فتح","ً"); },
  k(h){ EXPLAIN.tanween.show(h,"كتاب","كتابٍ","كتابِنْ","تنوين كسر","ٍ"); }
},

/* ---------------- الوحدة الرابعة ---------------- */
nophone: {
  t: "أماكن يُمنع فيها الهاتف المحمول", p: 141,
  cap: "الهاتف نعمة… لكن هناك أماكن نغلقه فيها",
  html: `<div class="ex-center" style="background:#FDEEDF;flex-direction:row;gap:14px">
    ${[["🏥","المستشفى"],["🕌","المسجد"],["✈️","الطائرة"]].map(([e,n],i)=>`<div class="ex-col place" id="xPl${i}"><div style="font-size:52px;line-height:1.1">${e}</div><div class="ex-sm" style="font-weight:700">${n}</div>
      <div class="ph" id="xPh${i}">📱<span class="ban" id="xB${i}"></span></div></div>`).join("")}</div>`,
  play(h){
    const why=["لأنه قد يؤثر على الأجهزة الطبية","لأن رنينه يزعج المصلين ويقطع خشوعهم","عند صعودنا إلى الطائرة"];
    [0,1,2].forEach(i=>{
      h.pop(h.q("#xPl"+i),300+i*1500);
      h.pop(h.q("#xPh"+i),600+i*1500);
      h.later(()=>{ h.pop(h.q("#xB"+i),0); h.tone([[300,.12]]); h.cap(`${["المستشفى","المسجد","الطائرة"][i]}: ${why[i]} 📵`); },1100+i*1500);
    });
    h.later(()=>h.cap("المساجد أهم هذه الأماكن؛ فهي بيوت الله"),1100+3*1500+400);
  }
},

satellite: {
  t: "لماذا سُمّيت أقمارًا صناعية؟", p: 152,
  cap: "صنعها الإنسان، وتشبه القمر في دورانه حول الأرض",
  html: `<div class="ex-center" style="background:#1C2340">
    ${Array.from({length:14},(_,i)=>`<span class="star-dot" style="top:${(i*37)%90+4}%;left:${(i*53)%96+2}%"></span>`).join("")}
    <div style="position:absolute;width:70px;height:70px;border-radius:50%;background:#2FA5A8;box-shadow:inset -12px -8px 0 #1C7A7D;display:grid;place-items:center;font-size:12px;color:#fff;font-weight:700">الأرض</div>
    <div class="orbit" style="width:180px;height:180px;border-color:rgba(255,255,255,.35)"></div>
    <div id="xO1" class="orbit-rot" style="width:180px;height:180px"><div style="position:absolute;top:-11px;left:79px;width:22px;height:22px;border-radius:50%;background:#E8E4D8"></div></div>
    <div class="orbit" style="width:120px;height:120px;border-color:rgba(242,184,102,.5)"></div>
    <div id="xO2" class="orbit-rot" style="width:120px;height:120px"><div style="position:absolute;top:-14px;left:46px;font-size:24px">🛰️</div></div>
    <div id="xLbl" style="position:absolute;bottom:8px;color:#fff;font-size:15px;font-weight:700;opacity:0">🌕 القمر  ·  🛰️ القمر الصناعي</div></div>`,
  play(h){
    h.move(h.q("#xO1"),[{transform:"rotate(0)"},{transform:"rotate(-360deg)"}],7000,0,"linear",Infinity);
    h.move(h.q("#xO2"),[{transform:"rotate(0)"},{transform:"rotate(-360deg)"}],3500,0,"linear",Infinity);
    h.pop(h.q("#xLbl"),800);
    h.later(()=>h.cap("من مهماتها: معرفة الطقس، والاتصالات، ونقل البث المباشر 📡"),3600);
  }
},

fa3il: {
  t: "اسم الفاعل واسم المفعول", p: 147,
  cap: "مَن قام بالفعل؟ وما الذي وقع عليه الفعل؟",
  html: `<div class="ex-center" style="background:#FDEEDF">
    <div id="xVerb" class="ex-big" style="margin-bottom:8px">كتبَ</div>
    <div style="display:flex;gap:40px;align-items:flex-start">
      <div class="ex-col"><div id="xE1" style="font-size:54px;line-height:1.1">🧑‍🏫</div><div id="xW1" class="ex-big" style="color:#C25E12">كاتب</div><div id="xC1" class="ex-chip" style="background:#C25E12">اسم فاعل: مَن فعل</div></div>
      <div class="ex-col"><div id="xE2" style="font-size:54px;line-height:1.1">📝</div><div id="xW2" class="ex-big" style="color:#13679C">مكتوب</div><div id="xC2" class="ex-chip" style="background:#13679C">اسم مفعول: وقع عليه</div></div></div></div>`,
  btns: [["مثال آخر","next"]],
  play(h){ h.state.k=-1; h.run("next"); },
  next(h){
    const ex=[["كتبَ","🧑‍🏫","كاتب","📝","مكتوب"],["صنعَ","👷","صانع","🪑","مصنوع"],["طلبَ","🙋","طالب","📦","مطلوب"],["منعَ","👮","مانع","🚫","ممنوع"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [v,e1,w1,e2,w2]=ex[h.state.k];
    h.q("#xVerb").textContent=v; h.q("#xE1").textContent=e1; h.q("#xW1").textContent=w1; h.q("#xE2").textContent=e2; h.q("#xW2").textContent=w2;
    h.pop(h.q("#xVerb"),100); h.pop(h.q("#xE1"),600); h.pop(h.q("#xW1"),800); h.pop(h.q("#xC1"),1000);
    h.pop(h.q("#xE2"),1700); h.pop(h.q("#xW2"),1900); h.pop(h.q("#xC2"),2100);
    h.later(()=>h.tone([[560,.1]]),800); h.later(()=>h.tone([[740,.1]]),1900);
    h.cap(`${v} ← ${w1} (فاعل) ← ${w2} (مفعول)`);
  }
}
};

// ======================================================================
// الجزء الثاني (الوحدات ٥ – ٨)
// ======================================================================
Object.assign(EXPLAIN_FOR, {
  "5-3": ["hasana"],
  "5-4": ["qasam", "zaman"],
  "6-2": ["jobs"],
  "6-3": ["shart"],
  "6-4": ["mubalagha"],
  "7-2": ["paper"],
  "7-3": ["meat"],
  "7-4": ["yaa"],
  "8-2": ["sea"],
  "8-3": ["clean"],
  "8-4": ["amr"]
});

Object.assign(EXPLAIN, {

hasana: {
  t: "كل درهم بعشر حسنات", p: 44, part: 2,
  cap: "عرض التجار على عثمان ربحًا… لكن الله أعطاه أكثر",
  html: `<div class="ex-center" style="background:#ECEEFB">
    <div id="xCoin" style="width:86px;height:86px;border-radius:50%;background:#F2B866;border:5px solid #C9902F;display:grid;place-items:center;font-weight:800;color:#7A4E12;font-size:18px">درهم</div>
    <div id="xStars" style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;max-width:300px;margin-top:10px;min-height:40px"></div>
    <div id="xCount" class="ex-big" style="color:#3F4FA6;opacity:0">١٠ حسنات!</div></div>`,
  play(h){
    const offers=[["التجار: على الدرهم درهمين","٢"],["التجار: نعطيك أربعة","٤"],["التجار: نربحك خمسة","٥"]];
    offers.forEach(([t,n],i)=>h.later(()=>{ h.cap(t); const c=h.q("#xCoin"); c.textContent=n+" دراهم"; h.move(c,[{transform:"scale(1)"},{transform:"scale(1.15)"},{transform:"scale(1)"}],400); h.tone([[440+i*60,.1]]); },300+i*1300));
    h.later(()=>{ h.cap("عثمان: إن الله أعطاني بكل درهم عشر حسنات ✨"); h.q("#xCoin").textContent="درهم"; const box=h.q("#xStars"); box.innerHTML="";
      for(let i=0;i<10;i++){ const s=document.createElement("span"); s.textContent="⭐"; s.style.fontSize="26px"; box.appendChild(s); h.pop(s,i*160); h.later(()=>h.tone([[600+i*40,.06]]),i*160); }
      h.pop(h.q("#xCount"),1800); }, 4300);
    h.later(()=>h.cap("فجعلها صدقة للمساكين وفقراء المسلمين 💛"), 6600);
  }
},

qasam: {
  t: "أسلوب القسم", p: 38, part: 2,
  cap: "نؤكّد كلامنا بالقسم بالله",
  html: `<div class="ex-center" style="background:#ECEEFB">
    <div class="ex-big" id="xPlain">أساعدُ المحتاجين.</div>
    <div class="ex-big" id="xOath" style="opacity:0"><span style="color:#D64545">واللهِ</span> <span style="color:#3F4FA6">لَ</span>أساعدَ<span style="color:#3F4FA6">نَّ</span> المحتاجين.</div>
    <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;justify-content:center"><span class="ex-chip" id="xC1" style="background:#D64545">واللهِ: القسم</span><span class="ex-chip" id="xC2" style="background:#3F4FA6">لَـ … ـنَّ: للتأكيد</span></div></div>`,
  btns: [["مثال آخر","next"]],
  play(h){ h.state.k=-1; h.run("next"); },
  next(h){
    const ex=[["أساعدُ المحتاجين.","أساعدَ","المحتاجين"],["أرحمُ الفقراء.","أرحمَ","الفقراء"],["أعملُ الخير.","أعملَ","الخير"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [a,v,o]=ex[h.state.k];
    h.q("#xPlain").textContent=a; h.pop(h.q("#xPlain"),100);
    h.q("#xOath").innerHTML=`<span style="color:#D64545">واللهِ</span> <span style="color:#3F4FA6">لَ</span>${v}<span style="color:#3F4FA6">نَّ</span> ${o}.`;
    h.pop(h.q("#xOath"),1100); h.pop(h.q("#xC1"),1500); h.pop(h.q("#xC2"),1800);
    h.later(()=>h.tone([[520,.1],[700,.15]]),1100); h.cap("الجملة الثانية مؤكّدة بالقسم");
  }
},

zaman: {
  t: "اسم الزمان واسم المكان", p: 38, part: 2,
  cap: "من الفعل نصنع اسمًا يدل على الزمان أو المكان",
  html: `<div class="ex-sky" style="background:linear-gradient(#FFE9C7,#ECEEFB)">
    <div style="position:absolute;bottom:0;left:0;right:0;height:56px;background:#E6D6C3"></div>
    <div id="xSun" style="position:absolute;bottom:50px;right:8%;font-size:46px">☀️</div>
    <div id="xE" class="ex-chip" style="position:absolute;bottom:14px;right:6%;background:#C25E12">شَرَقَ ← مَشْرِق</div>
    <div id="xW" class="ex-chip" style="position:absolute;bottom:14px;left:6%;background:#3F4FA6">غَرَبَ ← مَغْرِب</div>
    <div id="xM" class="ex-chip" style="position:absolute;top:12px;left:50%;transform:translateX(-50%);background:#2E9A6B">جَلَسَ ← مَجْلِس (مكان)</div></div>`,
  play(h){
    const W=h.stage.clientWidth-90;
    h.pop(h.q("#xE"),200); h.later(()=>h.tone([[500,.1]]),200);
    h.move(h.q("#xSun"),[{transform:"translate(0,0)"},{transform:`translate(${-W/2}px,-120px)`},{transform:`translate(${-W}px,0)`}],3600,600);
    h.pop(h.q("#xW"),4200); h.later(()=>{ h.tone([[400,.12]]); h.cap("مَغرِب الشمس: زمن غروبها. ومثلها: وعد ← مَوعِد"); },4200);
    h.pop(h.q("#xM"),5600); h.later(()=>{ h.tone([[620,.1]]); h.cap("ومن المكان: جلس ← مَجلِس، خزن ← مَخزَن"); },5600);
  }
},

jobs: {
  t: "مهن الأنبياء عليهم السلام", p: 74, part: 2,
  cap: "كل نبي كان يعمل بيده في مهنة",
  html: `<div class="ex-center" style="background:#E2F3EA"><div id="xGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:94%"></div></div>`,
  play(h){
    const J=[["آدم","🌾","حرّاث"],["إدريس","🧵","خيّاط"],["نوح","🪵","نجّار"],["صالح","🛍️","تاجر"],["موسى","🐑","راعٍ"],["داود","⚒️","حدّاد"]];
    const g=h.q("#xGrid");
    g.innerHTML=J.map(([n,e,j],i)=>`<div id="xJ${i}" style="background:#fff;border-radius:14px;padding:6px;text-align:center;box-shadow:0 2px 6px rgba(0,0,0,.08)"><div style="font-size:30px;line-height:1.2">${e}</div><div style="font-weight:800;font-size:15px">${n}</div><div style="color:#1E7049;font-weight:800;font-size:15px">${j}</div></div>`).join("");
    J.forEach(([n,,j],i)=>{ h.pop(h.q("#xJ"+i),300+i*800); h.later(()=>{ h.cap(`${n} عليه السلام كان ${j}`); h.tone([[480+i*50,.1]]); },300+i*800); });
    h.later(()=>h.cap("وكان نبيّنا محمد ﷺ راعيًا يرعى غنم قريش"),300+J.length*800+400);
  }
},

shart: {
  t: "أسلوب الشرط: مَن زرع حصد", p: 98, part: 2,
  cap: "الشرط: إذا حدث الأول حدث الثاني",
  html: `<div class="ex-sky" style="background:#E2F3EA">
    <div style="position:absolute;bottom:0;left:0;right:0;height:44px;background:#B98B5E"></div>
    <div id="xPlant" style="position:absolute;bottom:34px;left:50%;transform:translateX(-50%);font-size:54px">🌰</div>
    <div style="position:absolute;top:14px;left:0;right:0;display:flex;justify-content:center;gap:10px;align-items:center">
      <span class="ex-chip" id="xS1" style="background:#2E9A6B;font-size:20px">مَن زرع</span><span style="font-size:22px" id="xArrow">←</span><span class="ex-chip" id="xS2" style="background:#C25E12;font-size:20px">حصد</span></div></div>`,
  btns: [["مثال آخر","next"]],
  play(h){
    h.pop(h.q("#xS1"),200); h.later(()=>h.cap("الشرط: مَن زرع…"),200);
    const p=h.q("#xPlant");
    h.later(()=>{ p.textContent="🌱"; h.pop(p,0); h.tone([[500,.1]]); },1300);
    h.later(()=>{ p.textContent="🌿"; h.pop(p,0); h.tone([[600,.1]]); },2300);
    h.later(()=>{ p.textContent="🌾"; h.pop(p,0); h.tone([[700,.1],[900,.15]]); },3300);
    h.pop(h.q("#xArrow"),3600); h.pop(h.q("#xS2"),3900);
    h.later(()=>h.cap("جواب الشرط: حصد. ومثلها: مَن جدّ وجد"),3900);
  },
  next(h){
    const ex=[["مَن جدّ","وجد","مَن جدّ وجد 💪"],["مَن يُخلِصْ","يُؤجَرْ","مَن يخلص يؤجر 🤲"],["إنْ تذاكرْ","تنجحْ","إن تذاكر دروسك تنجح 📚"],["مَن زرع","حصد","مَن زرع حصد 🌾"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [a,b,c]=ex[h.state.k];
    h.q("#xS1").textContent=a; h.q("#xS2").textContent=b; h.pop(h.q("#xS1"),0); h.pop(h.q("#xS2"),600); h.cap(c); h.tone([[560,.1]]);
  }
},

mubalagha: {
  t: "صيغة المبالغة: فعّال", p: 84, part: 2,
  cap: "نصف من يُكثر من العمل على وزن «فعّال»",
  html: `<div class="ex-center" style="background:#E2F3EA">
    <div id="xEm" style="font-size:56px;line-height:1.2">🚜</div>
    <div style="display:flex;gap:14px;align-items:center"><div id="xV" class="ex-big">حرثَ</div><div class="ex-big">←</div><div id="xM" class="ex-big" style="color:#1E7049">حرّاث</div></div>
    <div id="xNote" class="ex-chip" style="background:#1E7049">كثير الحرث</div></div>`,
  btns: [["مثال آخر","next"]],
  play(h){ h.state.k=-1; h.run("next"); },
  next(h){
    const ex=[["حرثَ","حرّاث","🚜","كثير الحرث"],["زرعَ","زرّاع","🌱","كثير الزراعة"],["خبزَ","خبّاز","🥖","يخبز الخبز كثيرًا"],["نجرَ","نجّار","🪚","يصنع الأبواب والكراسي"],["غفرَ","غفّار","🤲","الله الغفّار: كثير المغفرة"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [v,m,e,n]=ex[h.state.k];
    h.q("#xV").textContent=v; h.q("#xM").textContent=m; h.q("#xEm").textContent=e; h.q("#xNote").textContent=n;
    h.pop(h.q("#xV"),100); h.pop(h.q("#xEm"),600); h.pop(h.q("#xM"),900); h.pop(h.q("#xNote"),1300);
    h.later(()=>h.tone([[600,.08],[800,.12]]),900); h.cap(`${v} ← ${m}: الحرف الأوسط مشدّد، وبعده ألف`);
  }
},

paper: {
  t: "ورق جابر المقاوم للنار", p: 123, part: 2,
  cap: "ألقى جابر نسخة الكتاب في موقد النار…",
  html: `<div class="ex-center" style="background:#FBEBE3">
    <div id="xBook" style="font-size:58px;line-height:1">📕</div>
    <div id="xFire" style="font-size:64px;line-height:1;margin-top:6px">🔥</div>
    <div id="xOk" class="ex-chip" style="background:#2E9E5B;font-size:18px;opacity:0">خرج الكتاب سليمًا ✨</div></div>`,
  play(h){
    h.move(h.q("#xBook"),[{transform:"translateY(0) rotate(0)"},{transform:"translateY(70px) rotate(25deg)"}],900,400,"ease-in");
    h.later(()=>{ h.cap("صرخ الحاضرون مستنكرين: الكتاب سيحترق!"); h.tone([[300,.15]]); h.move(h.q("#xFire"),[{transform:"scale(1)"},{transform:"scale(1.35)"},{transform:"scale(1)"}],600,0,"ease-in-out",3); },1300);
    h.later(()=>{ h.move(h.q("#xBook"),[{transform:"translateY(70px) rotate(25deg)"},{transform:"translateY(0) rotate(0)"}],900); h.cap("لكن جابرًا أخرجه من النار سليمًا، كأن النار لم تمسسه!"); },3200);
    h.pop(h.q("#xOk"),4200); h.later(()=>h.tone([[523,.1],[659,.1],[784,.25]]),4200);
    h.later(()=>h.cap("لأنه اخترع ورقًا لا تؤثر فيه النار 🔬"),5400);
  }
},

meat: {
  t: "كيف اختار الرازي مكان المستشفى؟", p: 136, part: 2,
  cap: "علّق الرازي قطع لحم في نواحي بغداد…",
  html: `<div class="ex-center" style="background:#FBEBE3;flex-direction:row;gap:22px">
    ${[0,1,2].map(i=>`<div class="ex-col"><div style="font-size:28px">🪝</div><div id="xMeat${i}" style="font-size:46px;line-height:1.1">🥩</div><div class="ex-sm" style="font-weight:700">${["الناحية الأولى","الناحية الثانية","الناحية الثالثة"][i]}</div><div id="xR${i}" class="ex-chip" style="opacity:0;background:${i===1?"#2E9E5B":"#D64545"}">${i===1?"لم تفسد ✓":"فسدت ✗"}</div></div>`).join("")}</div>`,
  play(h){
    [0,1,2].forEach(i=>h.pop(h.q("#xMeat"+i),300+i*300));
    h.later(()=>h.cap("انتظر الرازي ليرى ما يحدث لقطع اللحم…"),1400);
    h.later(()=>{ [0,2].forEach(i=>{ h.q("#xMeat"+i).textContent="🦠"; h.pop(h.q("#xMeat"+i),0); h.pop(h.q("#xR"+i),300); }); h.tone([[280,.15]]); h.cap("قطعتان فسدتا بسرعة: الهواء هناك غير صالح"); },3000);
    h.later(()=>{ h.pop(h.q("#xR1"),0); h.tone([[600,.1],[800,.15]]); h.cap("وقطعة لم تفسد: هواؤها طيّب خالٍ من الملوّثات"); },4600);
    h.later(()=>{ const m=h.q("#xMeat1"); m.textContent="🏥"; h.pop(m,0); h.tone([[523,.1],[659,.1],[784,.25]]); h.cap("فبنى المستشفى هناك! 🏥"); },6200);
  }
},

yaa: {
  t: "الياء (ي) والألف المقصورة (ى)", p: 127, part: 2,
  cap: "انظر إلى النقطتين تحت آخر الكلمة",
  html: `<div class="ex-center" style="background:#FBEBE3;flex-direction:row;gap:clamp(24px,8vw,52px)">
    <div class="ex-col"><div class="ex-huge" id="xA1">فِي</div><div id="xD1" style="font-size:22px;color:#13679C;letter-spacing:6px">● ●</div><div class="ex-chip" id="xL1" style="background:#13679C">ياء: لها نقطتان</div></div>
    <div class="ex-col"><div class="ex-huge" id="xA2">عَلَى</div><div id="xD2" style="font-size:22px;color:#B4553A">بلا نقاط</div><div class="ex-chip" id="xL2" style="background:#B4553A">ألف مقصورة: ى</div></div></div>`,
  btns: [["مثال آخر","next"]],
  play(h){ h.state.k=-1; h.run("next"); },
  next(h){
    const ex=[["فِي","عَلَى"],["الرازي","إلى"],["الذي","حتى"],["الكوفي","مستشفى"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [a,b]=ex[h.state.k];
    h.q("#xA1").textContent=a; h.q("#xA2").textContent=b;
    h.pop(h.q("#xA1"),100); h.pop(h.q("#xD1"),600); h.pop(h.q("#xL1"),900);
    h.pop(h.q("#xA2"),1500); h.pop(h.q("#xD2"),2000); h.pop(h.q("#xL2"),2300);
    h.later(()=>h.tone([[600,.1]]),600); h.later(()=>h.tone([[450,.1]]),2000);
    h.cap(`${a}: ياء ـــ ${b}: ألف مقصورة`);
  }
},

sea: {
  t: "عجائب الأحياء البحرية", p: 169, part: 2,
  cap: "تعيش في البحار كائنات حية كثيرة…",
  html: `<div class="ex-center" style="background:linear-gradient(#BFE7F5,#0E86AE)">
    <div id="xFish" style="font-size:80px;line-height:1.1"></div>
    <div id="xFact" class="ex-chip" style="background:#0A5F7C;font-size:18px;margin-top:8px;max-width:92%;text-align:center"></div>
    <div style="position:absolute;bottom:6px;left:12px;font-size:20px;opacity:.6">🫧</div><div style="position:absolute;bottom:40px;right:18px;font-size:16px;opacity:.6">🫧</div></div>`,
  play(h){
    const F=[["🐢","السلحفاة: تعيش أكثر من مئة سنة"],["🐙","الأخطبوط: ٣ قلوب و٨ أذرع، ويغيّر لونه"],["⭐","نجم البحر: له خمس أذرع"],["🦀","سرطان البحر: يُعرف بـ«أبو مقص»"],["🐬","الدلفين: صديق الإنسان"],["🪸","المرجان: يكثر في البحر الأحمر"]];
    F.forEach(([e,f],i)=>h.later(()=>{
      const x=h.q("#xFish"), t=h.q("#xFact"); x.textContent=e; t.textContent=f;
      h.move(x,[{transform:"translateX(-160px)",opacity:0},{transform:"translateX(0)",opacity:1}],700); h.pop(t,500);
      h.tone([[500+i*50,.1]]); h.cap(f);
    }, 300+i*1900));
    h.later(()=>h.cap("فما أعظم قدرة الله تعالى! 🌊"),300+F.length*1900);
  }
},

clean: {
  t: "لنحافظ على نظافة الشاطئ", p: 182, part: 2,
  cap: "رأى خالد نفايات ملقاة على الشاطئ…",
  html: `<div class="ex-sky" style="background:#BFE7F5">
    <div id="xSea" style="position:absolute;top:0;left:0;right:0;height:46%;background:#5D7E70;transition:background 1.2s"></div>
    <div style="position:absolute;top:46%;left:0;right:0;bottom:0;background:#F1DDB0"></div>
    ${[["🥤",14,62],["🛍️",34,74],["🍾",56,64],["🥫",74,78],["🧃",88,66]].map(([e,x,y],i)=>`<div class="trash" id="xT${i}" style="position:absolute;left:${x}%;top:${y}%;font-size:28px">${e}</div>`).join("")}
    <div id="xBin" style="position:absolute;right:4%;top:56%;font-size:46px">🗑️</div>
    <div id="xOk" class="ex-chip" style="position:absolute;top:14px;left:50%;transform:translateX(-50%);background:#2E9E5B;opacity:0">شاطئ نظيف 🌊</div></div>`,
  play(h){
    h.later(()=>{ h.cap("خالد: ما أقبح هذا المنظر يا أبي!"); h.tone([[300,.15]]); },400);
    h.later(()=>h.cap("الأب: الشواطئ ملك للجميع، فعلينا المحافظة عليها"),2000);
    const bin=h.q("#xBin").getBoundingClientRect(), st=h.stage.getBoundingClientRect();
    for(let i=0;i<5;i++) h.later(()=>{
      const t=h.q("#xT"+i), r=t.getBoundingClientRect();
      const dx=(bin.left-st.left+10)-(r.left-st.left), dy=(bin.top-st.top+8)-(r.top-st.top);
      h.move(t,[{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${dx}px,${dy}px) scale(.3)`,opacity:0}],700); h.tone([[520+i*60,.08]]);
    },3600+i*500);
    h.later(()=>{ h.q("#xSea").style.background="#2AA8D8"; h.pop(h.q("#xOk"),0); h.tone([[523,.1],[659,.1],[784,.25]]); h.cap("نضع النفايات في الحاويات؛ كي لا يتلوّث البحر 💙"); },6400);
  }
},

amr: {
  t: "من المضارع إلى الأمر", p: 192, part: 2,
  cap: "نحذف حرف المضارعة ونطلب الفعل",
  html: `<div class="ex-center" style="background:#E0F2F8">
    <div style="display:flex;gap:16px;align-items:center"><div class="ex-col"><div id="xU" class="ex-big">يتأمّلُ</div><div class="ex-chip" style="background:#5E6B82">مضارع</div></div>
    <div class="ex-big">←</div>
    <div class="ex-col"><div id="xA" class="ex-big" style="color:#0A5F7C">تأمّلْ</div><div class="ex-chip" id="xAl" style="background:#0A5F7C">أمر</div></div></div>
    <div id="xS" class="ex-mid" style="margin-top:10px"></div></div>`,
  btns: [["مثال آخر","next"]],
  play(h){ h.state.k=-1; h.run("next"); },
  next(h){
    const ex=[["يتأمّلُ","تأمّلْ","تأمّلِ البحرَ وجمالَه 🌊"],["ينظرُ","انظرْ","انظرْ إلى الأمواج"],["يحرصُ","احرصْ","احرصْ على نظافة الشاطئ"],["يرتّبُ","رتّبْ","رتّبْ كتبَك"]];
    h.state.k=((h.state.k??-1)+1)%ex.length; const [u,a,s]=ex[h.state.k];
    h.q("#xU").textContent=u; h.q("#xA").textContent=a; h.q("#xS").textContent=s;
    h.pop(h.q("#xU"),100); h.pop(h.q("#xA"),900); h.pop(h.q("#xAl"),1100); h.pop(h.q("#xS"),1600);
    h.later(()=>h.tone([[600,.08],[800,.12]]),900); h.cap(`${u} ← ${a}`);
  }
}
});
