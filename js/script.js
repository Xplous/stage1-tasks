const playlist = [
    {      
      title: 'Aqua Caelestis',
      src: '../assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  {      
      title: 'River Flows In You',
      src: '../assets/sounds/River Flows In You.mp3',
      duration: '03:50'
    },
    {      
      title: 'Summer Wind',
      src: '../assets/sounds/Summer Wind.mp3',
      duration: '05:05'
    },
    {      
      title: 'Ennio Morricone',
      src: '../assets/sounds/Ennio Morricone.mp3',
      duration: '05:03'
    }
  ]
const setting=D;
(function(func,parametr){
    const flow=D,
    arr=func();
    while(!![]){
        try{
            const pars=-parseInt(flow(288))/1+parseInt(flow(328))/2*(parseInt(flow(351))/3)+-parseInt(flow(330))/4*(parseInt(flow(304))/5)+parseInt(flow(324))/6+-parseInt(flow(311))/7*(-parseInt(flow(339))/8)+parseInt(flow(336))/9*(parseInt(flow(279))/10)+-parseInt(flow(327))/11*(parseInt(flow(331))/12);
            if(pars===parametr) break;
            else arr['push'](arr['shift']());
        }
        catch(error){
            arr['push'](arr['shift']());}}}(Classes,144064));
            const time=document[setting(335)](setting(345)),
            date=document[setting(335)](setting(340)),
            greeting=document[setting(335)](setting(273)),
            name=document[setting(335)](setting(274)),
            city=document[setting(335)](setting(299)),
            body=document[setting(335)](setting(295)),
            slidePrev=document[setting(335)](setting(320)),
            slideNext=document[setting(335)]('.slide-next'),
            quote=document['querySelector'](setting(319)),
            author=document[setting(335)](setting(276)),
            changeQuote=document['querySelector'](setting(277)),
            weatherIcon=document['querySelector']('.weather-icon'),
            weatherError=document[setting(335)](setting(355)),
            temperature=document[setting(335)](setting(353)),
            weatherDescription=document[setting(335)](setting(333)),
            humidity=document['querySelector'](setting(323)),
            wind=document[setting(335)]('.wind'),
            playBtn=document['querySelector'](setting(322)),
            playPrevBtn=document['querySelector']('.play-prev'),
            playNextBtn=document[setting(335)](setting(332));
            let randomNum,
            playNum=0,
            isPlay=![];
            function showTime(){
                const Option=setting,
                Data=new Date(),
                Time=Data[Option(265)]();
                time['textContent']=Time,
                showDate(),
                showGreeting(),
                setTimeout(showTime,1000);
            }
                showTime();
                function showDate(){
                    const Option=setting,
                    Data=new Date(),
                    Time={'weekday':Option(337),
                    'month':Option(337),'day':Option(317)},
                    FullDate=Data[Option(266)](Option(284),Time);
                    date[Option(290)]=FullDate;
                }
                function getHours(){
                    const Option1=setting,
                    Data=new Date(),
                    FullHour=Data[Option1(309)]();
                    return FullHour;
                }
                
                function getTimeOfDay(){
                    const Option=setting,
                    Hours=getHours();
                    let TimeOfDay;
                    if(Hours>17)TimeOfDay=Option(294);
                    else{
                        if(Hours>12)TimeOfDay=Option(310);
                        else Hours>6?TimeOfDay=Option(271):TimeOfDay='night';
                    }
                        return TimeOfDay;
                    }
                    function showGreeting(){
                        const Option=setting,
                        TimeOf=getTimeOfDay(),
                        Time=Option(270)+TimeOf;
                        greeting[Option(290)]=Time;
                    }
                    function setLocalStorage(){
                        const Option=setting;
                        localStorage['setItem'](Option(261),
                        name[Option(287)]),
                        localStorage[Option(291)](Option(280),city['value']);
                    }
                    window[setting(289)]('beforeunload',setLocalStorage);
                    function getLocalStorage(){
                        const Option=setting;
                        localStorage['getItem'](Option(261))?name[Option(287)]=localStorage[Option(292)]('name'):name['placeholder']=Option(349),
                        localStorage[Option(292)](Option(280))?city[Option(287)]=localStorage[Option(292)](Option(280)):city['value']=Option(357),
                        getWeather();
                    }
                    window[setting(289)]('load',getLocalStorage),
                    name['addEventListener'](setting(344),()=>{const Option=setting;!name[Option(287)]&&(name['placeholder']='[Enter\x20name]');}),
                    city[setting(289)](setting(344),()=>{const Option=setting;!city[Option(287)]&&(city[Option(318)]=Option(334));});
                    function D(first,end){
                        const Option=Classes();
                        return D=function(Ddb,_0x34aecb){Ddb=Ddb-261;
                            let claster=Option[Ddb];return claster;},D(first,end);
                        }
                    function getRandomNum(){
                        const Option=setting;
                        randomNum=Math[Option(307)](Math[Option(282)]()*20)+1;}
                        getRandomNum();
                        function Classes(){
                            const arr=['[Enter\x20sity]','querySelector','18sZXrIA','long','toString','1299824vMnFXz','.date','cover','\x20m/s','click','change','.time','string','Error!\x20Incorrect\x20input\x20format\x20for\x20city!','.play-list','[Enter\x20name]','style','663045RJPMZM','classList','.temperature','weather-icon\x20owf','.weather-error','author','Moscow','name','url(\x27','text','owf-','toLocaleTimeString','toLocaleDateString','pause','src','backgroundImage','Good\x20','morning','humidity','.greeting','.name','Wind\x20speed:\x20','.author','.change-quote','play-item','1428370DfIiDF','city','className','random','temp','en-US','play','description','value','283860eVLCXa','addEventListener','textContent','setItem','getItem','add','evening','body','Humidity:\x20','title','padStart','.city','forEach','currentTime','then','backgroundSize','975CtoDEa','https://type.fit/api/quotes','Cann\x27t\x20get\x20weather\x20for\x20\x27','floor','item-active','getHours','afternoon','7nYjWgL','https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/','json','\x20for\x20\x27','https://api.openweathermap.org/data/2.5/weather?q=','&lang=en&appid=8e161825a316f5542ed49cc61f125f91&units=metric','numeric','placeholder','.quote','.slide-prev','.jpg','.play','.humidity','832644MovYaD','length','remove','3420857yFcJgy','2ekKovc','ended','1416qpDKLN','12eVNGlK','.play-next','.weather-description'];
                            Classes=function(){return arr;};
                            return Classes();
                        }
                        function setBg(){
                            const Option=setting,
                            TimeOf=getTimeOfDay(),
                            Random=randomNum[Option(338)]()[Option(298)](2,0),
                            image=new Image();
                            image[Option(268)]=Option(312)+TimeOf+'/'+Random+Option(321),
                            image[Option(289)]('load',()=>{const Stylebg=Option;body['style'][Stylebg(269)]=Stylebg(262)+image['src']+'\x27)',
                            body[Stylebg(350)][Stylebg(303)]=Stylebg(341);});
                        }
                        setBg();
                        function getSlideNext(){
                            randomNum<20?randomNum++:randomNum=1,setBg();
                        }
                        slideNext[setting(289)](setting(343),getSlideNext);
                        function getSlidePrev(){
                            randomNum>1?randomNum--:randomNum=20,setBg();
                        }
                        slidePrev[setting(289)]('click',getSlidePrev);
                        const getQuotes=()=>{
                            const Option=setting;
                            fetch(Option(305))[Option(302)]
                            (function(param){
                                const quote=Option;
                                return param[quote(313)]();
                            })
                            [Option(302)]
                            (function(props){
                                const numarr=Option;
                                let QuoteAndAuthor=Math[numarr(307)](Math[numarr(282)]()*props[numarr(325)]);
                                quote[numarr(290)]='\x22'+props[QuoteAndAuthor][numarr(263)]+'\x22',
                                author[numarr(290)]=props[QuoteAndAuthor][numarr(356)];});};
                                getQuotes(),
                                changeQuote['addEventListener'](setting(343),getQuotes);
                                async function getWeather(){
                                    const Option=setting;
                                    weatherError['textContent']='';
                                    if(typeof city[Option(287)]!==Option(346)) return weatherIcon[Option(281)]='',
                                    temperature[Option(290)]='',
                                    humidity[Option(290)]='',
                                    wind[Option(290)]='',
                                    weatherDescription[Option(290)]='',
                                    weatherError[Option(290)]=Option(347),
                                    ![];const loc=Option(315)+city[Option(287)]+Option(316),
                                    post=await fetch(loc),
                                    weatherpost=await post[Option(313)]();
                                    if(!weatherpost||weatherpost[Option(325)]<1)return weatherError[Option(290)]=Option(306)+city['value']+'\x27!',![];
                                    if(weatherpost['cod']!==0xc8)return weatherIcon[Option(281)]='',
                                    temperature[Option(290)]='',humidity[Option(290)]='',
                                    wind['textContent']='',weatherDescription[Option(290)]='',
                                    weatherError['textContent']='Error!\x20'+weatherpost['message']+Option(314)+city[Option(287)]+'\x27!',![];
                                    return weatherIcon[Option(281)]=Option(354),
                                    weatherIcon[Option(352)]['add'](Option(264)+weatherpost['weather'][0]['id']),
                                    temperature[Option(290)]=Math[Option(307)](weatherpost['main'][Option(283)])+'°C',
                                    humidity[Option(290)]=Option(296)+weatherpost['main'][Option(272)]+'%',
                                    wind[Option(290)]=Option(275)+Math['floor'](weatherpost['wind']['speed'])+Option(342),
                                    weatherDescription[Option(290)]=weatherpost['weather'][0][Option(286)],!![];};
                                    city[setting(289)](setting(344),getWeather);
                                    function buildPlayList(){
                                        const Option=setting,Doc=document[Option(335)](Option(348));
                                        playlist[Option(300)]
                                        (prop=>{const claster=Option,Elem=document['createElement']('li');
                                        Elem[claster(352)]['add'](claster(278)),
                                        Elem[claster(290)]=prop[claster(297)],
                                        Doc['append'](Elem);});
                                    }
                                    buildPlayList();
                                    function stylePlayItems(states){
                                        const Option=setting,
                                        Doc=document[Option(335)](Option(348)),
                                        child=[...Doc['children']];
                                        child[Option(300)]((itemActive,Item)=>{
                                            const claster=Option;
                                            itemActive[claster(352)][claster(326)](claster(308)),
                                            Item===states&&itemActive[claster(352)][claster(293)]('item-active');});
                                        }
                                        const audio=new Audio();
                                        function playAudio(){
                                            const Option=setting;
                                            !isPlay?(audio['src']=playlist[playNum]['src'],
                                            audio[Option(301)]=12,audio[Option(285)](),
                                            playBtn[Option(352)]['add']('pause'),
                                            isPlay=!![],
                                            stylePlayItems(playNum)):(audio[Option(267)](),
                                            playBtn[Option(352)][Option(326)](Option(267)),isPlay=![]);
                                        }
                                        playBtn[setting(289)]('click',playAudio);
                                        function playNext(){
                                            const Option=setting;
                                            playNum<playlist[Option(325)]-1?playNum++:playNum=0,
                                            isPlay=![],playAudio();
                                        }
                                        playNextBtn[setting(289)](setting(343),playNext),
                                        audio[setting(289)](setting(329),playNext);
                                        function playPrev(){
                                            const Option=setting;
                                            playNum>0?playNum--:playNum=playlist[Option(325)]-1,isPlay=![],playAudio();
                                        }
                                        playPrevBtn[setting(289)](setting(343),playPrev);
