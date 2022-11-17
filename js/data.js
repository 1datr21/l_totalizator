var namelist = ["Дина","Фаина","Руслана","Лия","Оля","Наташа","Лада","Рада","Таня","Лилия","Василиса","Роксана","Наина","Анжелика","Марьяна","Жанна","Марина","Майя","Рената","Ангелина","Виталина","Снежанна","Элла","Вита","Динара","Анфиса","Тая","Настя","Лиана","Оксана","Беата","Рина","Марфа","Ульяна","Инна","Зоя","Мила","Диляра","Регина","Инга","Тоня","Леся","Элина","Эльза","Лина","Марта","Гюзель","Глафира","Варя","Алевтина","Клава","Валя","Вера","Саша","Диана","Женя","Станислава","Роза","Арина","Ира","Рая","Соня","Алиса","Эльвира","Ильмира","Ева","Олеся","Полина","Лиза","Элеанора","Даша","Вика","Юля","Инесса","Лена","Люда","Галя","Маргарита","Яна","Лида","Тамара","Анжела","Юлиана","Нина","Маша","Кира","Альбина","Надя","Алла","Алина","Карина","Вероника","Аня","Ксюша","Люба","Лера","Кристина","Катя","Света","Лариса"];
var pop_namelist = ["Оля","Наташа","Таня","Марина","Настя","Оксана","Валя","Вера","Саша","Диана","Женя","Ира","Олеся","Полина","Лиза","Даша","Вика","Юля","Инесса","Лена","Люда","Галя","Лида","Тамара","Нина","Маша","Надя","Алла","Алина","Карина","Вероника","Аня","Ксюша","Люба","Лера","Кристина","Катя","Света","Лариса"];


// "https://vk.com/kris_sakharova":"Кристина","https://vk.com/evlampia87":"Галя","https://vk.com/mikkimaus1":"Кристина","https://vk.com/id149433076":"Маргарита" "https://vk.com/idmanechka_kirillova":"Маша",
var reflist= {"https://vk.com/ksennyyy":"Ксюша","https://vk.com/id752788609":"Оля","https://vk.com/25katrina":"Катя","https://vk.com/id759447805":"Кристина","https://vk.com/id754670478":"Алина","https://vk.com/id754667643":"Даша","https://vk.com/id752788815":"Маша","https://vk.com/tina_lovely777":"Кристина","https://vk.com/id166076902":"Лариса","https://vk.com/a_radmila":"Рада","https://vk.com/id380123935":"Надя","https://vk.com/id193570814":"Вероника","https://vk.com/id224496250":"Инна","https://vk.com/gemaries":"Вика","https://vk.com/id303212710":"Света","https://vk.com/id443143020":"Катя","https://vk.com/id491868486":"Маша","https://vk.com/id67698893":"Катя","https://vk.com/marinochka024":"Марина","https://vk.com/id691646510":"Наташа","https://vk.com/id448282924":"Настя","https://vk.com/id138588540":"Алиса","https://vk.com/tanyshkavsev":"Таня","https://vk.com/id395020495":"Катя","https://vk.com/id468098040":"Ксюша","https://vk.com/mariamiller25":"Маша","https://vk.com/id41509117":"Таня","https://vk.com/umnumnumka":"Ксюша","https://vk.com/vlasovakarina2013":"Марина","https://vk.com/vk.alenka":"Ангелина","https://vk.com/id201245149":"Роксана","https://vk.com/id37225165":"Ксюша","https://vk.com/id21734709":"Настя","https://vk.com/vesta73rus":"Юля","https://vk.com/id53924353":"Наташа","https://vk.com/id740983867":"Соня","https://vk.com/darya1stolyarova":"Даша", "https://vk.com/id69458040":"Марина","https://vk.com/katya_olegovna":"Катя","https://vk.com/id648298149":"Ксюша","https://vk.com/id247049270":"Катя","https://vk.com/id149420957":"Марина","https://vk.com/id472303493":"Оля","https://vk.com/id520627922":"Женя","https://vk.com/yourdreamsssv":"Вика","https://vk.com/lana_s_lana":"Света","https://vk.com/id146698906":"Оксана",
"https://vk.com/id451170882":"Кира","https://vk.com/ivanovadaryai":"Даша","https://vk.com/d_a_r_i_a14e_g_o_r_o_v_a":"Даша","https://vk.com/id4253138":"Аня","https://vk.com/id328575176":"Ангелина","https://vk.com/rew7890":"Инесса","https://vk.com/id282002636":"Алина","https://vk.com/13ekaterina13":"Катя","https://vk.com/id64445984":"Настя","https://vk.com/olaprokhorova":"Оля","https://vk.com/id143707705":"Катя","https://vk.com/id310865750":"Катя","https://vk.com/id16573534":"Вика","https://vk.com/irina.farafonova2018":"Ира","https://vk.com/id242115921":"Марина","https://vk.com/id176030451":"Таня","https://vk.com/id154508992":"Настя","https://vk.com/yugelka":"Наташа","https://vk.com/lenka_simurzina":"Лена","https://vk.com/id236908576":"Таня","https://vk.com/yulyacat":"Юля","https://vk.com/id207231438":"Женя","https://vk.com/natashkin666":"Наташа","https://vk.com/vkirienko2017":"Вера",
"https://vk.com/juliabakanova":"Юля","https://vk.com/id673049849":"Соня","https://vk.com/id754632875":"Таня","https://vk.com/id751420111":"Даша","https://vk.com/ma_mih":"Марина","https://vk.com/id109565635":"Настя","https://vk.com/anu_tka_anuta":"Аня","https://vk.com/id236425973":"Маша","https://vk.com/id365520281":"Лена","https://vk.com/id280911914":"Вика","https://vk.com/polinaa.markova":"Полина","https://vk.com/id292139346":"Женя","https://vk.com/id57877619":"Кристина","https://vk.com/mklementyeva93":"Марина","https://vk.com/id757048400":"Маргарита","https://vk.com/id252220790":"Таня","https://vk.com/id161300549":"Настя","https://vk.com/id136811275":"Настя","https://vk.com/id306202074":"Лена","https://vk.com/id8356308":"Таня","https://vk.com/danilova_n_n":"Наташа","https://vk.com/aladyeva":"Лена","https://vk.com/id15925646":"Наташа","https://vk.com/id8043922":"Катя","https://vk.com/id3569249":"Аня","https://vk.com/yganina":"Юля","https://vk.com/id338331858":"Наташа","https://vk.com/id375774810":"Марина",
"https://vk.com/id44853182":"Аня","https://vk.com/id754659227":"Алла","https://vk.com/id751281508":"Вера","https://vk.com/id751278379":"Катя","https://vk.com/id759451162":"Марина","https://vk.com/id245988644":"Анжелика","https://vk.com/id754660741":"Лариса","https://vk.com/id259336514":"Аня","https://vk.com/id752784241":"Люба","https://vk.com/id280142228":"Аня","https://vk.com/id388815915":"Лера","https://vk.com/id442865533":"Кристина","https://vk.com/aleksandra_1211":"Саша","https://vk.com/katyafilinova":"Катя","https://vk.com/id203422910":"Катя","https://vk.com/id144254304":"Наташа","https://vk.com/id2921728":"Снежанна","https://vk.com/id75148546":"Олеся","https://vk.com/eugenia_koshka":"Женя","https://vk.com/luxury21cheb":"Таня",
"https://vk.com/id294778783":"Таня","https://vk.com/id212851196":"Марина","https://vk.com/id754623536":"Люда","https://vk.com/id751401909":"Маша","https://vk.com/lyudmila_1987":"Люда","https://vk.com/id751400736":"Инна","https://vk.com/id751422478":"Наташа","https://vk.com/id751278185":"Марина","https://vk.com/id505776285":"Полина","https://vk.com/21diz":"Настя","https://vk.com/id491103783":"Марина","https://vk.com/id357568617":"Таня","https://vk.com/idksenyakonst":"Ксюша","https://vk.com/leris1302":"Лариса","https://vk.com/id484024374":"Вероника","https://vk.com/bysrt":"Таня","https://vk.com/id66649756":"Наташа","https://vk.com/olyivanova87":"Оля","https://vk.com/id475196760":"Наташа","https://vk.com/id390075299":"Наташа","https://vk.com/id33121053":"Оля","https://vk.com/id701738923":"Наташа",
"https://vk.com/id621159769":"Оля","https://vk.com/id751421489":"Оля","https://vk.com/id751279608":"Инна","https://vk.com/id209957952":"Руслана","https://vk.com/dinaivanova1989":"Дина","https://vk.com/id725542194":"Лия","https://vk.com/id751419837":"Валя","https://vk.com/id9597401":"Оля","https://vk.com/id751281418":"Настя","https://vk.com/id754666289":"Люда","https://vk.com/id751280657":"Инна","https://vk.com/id754657578":"Аня","https://vk.com/id751281193":"Люда","https://vk.com/id535194810":"Женя","https://vk.com/pavlyhka":"Марта","https://vk.com/id182975138":"Диана", "https://vk.com/id751245273":"Таня","https://vk.com/id127956305":"Аня","https://vk.com/pinari":"Таня","https://vk.com/yuliya_walter":"Катя","https://vk.com/mashafoxsinger":"Маша","https://vk.com/id28711298":"Надя","https://vk.com/id32977826":"Аня","https://vk.com/pantera_number_one":"Лариса","https://vk.com/sonya_zudina":"Соня","https://vk.com/id212055762":"Оля","https://vk.com/id214082416":"Марина","https://vk.com/id212731605":"Марина","https://vk.com/id188228787":"Ира","https://vk.com/id239603031":"Катя","https://vk.com/id506849104":"Марина","https://vk.com/id286347844":"Таня","https://vk.com/id479159632":"Валя","https://vk.com/id254052449":"Настя","https://vk.com/id299670811":"Надя",
"https://vk.com/krasnovamashka":"Маша","https://vk.com/id759449862":"Юля","https://vk.com/id751421154":"Лиза","https://vk.com/id754657612":"Надя","https://vk.com/vika_trepp":"Вика","https://vk.com/id729532036":"Полина","https://vk.com/anya_loseva":"Аня","https://vk.com/id751418770":"Наташа","https://vk.com/powerlifterka":"Люда","https://vk.com/anetzvezda":"Аня","https://vk.com/id7102872":"Настя","https://vk.com/padyanovairina":"Ира","https://vk.com/id140575064":"Аня","https://vk.com/id17858825":"Наташа","https://vk.com/id254678779":"Валя","https://vk.com/id213985270":"Юля","https://vk.com/id225635623":"Маша","https://vk.com/zakirov12345":"Карина","https://vk.com/id227504563":"Лера","https://vk.com/id262595953":"Настя","https://vk.com/id210900612":"Карина",
"https://vk.com/id280647808":"Настя","https://vk.com/id611479838":"Даша","https://vk.com/id405565734":"Ксюша","https://vk.com/id751418495":"Марина","https://vk.com/id751402250":"Лариса","https://vk.com/ir_mustafina":"Ира","https://vk.com/miss_katr1n":"Катя","https://vk.com/ludmilkina22":"Люда","https://vk.com/id290816341":"Ксюша","https://vk.com/id199523886":"Лера","https://vk.com/id346520788":"Настя","https://vk.com/id514162022":"Настя","https://vk.com/id318319749":"Анжелика","https://vk.com/id35139690":"Ксюша",
"https://vk.com/id241169651":"Ксюша","https://vk.com/id118214360":"Лена","https://vk.com/id375526571":"Аня","https://vk.com/id751277723":"Лиза","https://vk.com/id751402246":"Настя","https://vk.com/id65923431":"Таня","https://vk.com/alisa_v_strane_4ydec":"Соня","https://vk.com/ritvasil":"Маргарита","https://vk.com/id351773368":"Ксюша","https://vk.com/id207624270":"Марина","https://vk.com/id308728318":"Ксюша","https://vk.com/yashina1992":"Лена","https://vk.com/id740641426":"Соня","https://vk.com/olgailina121":"Оля","https://vk.com/id18376126":"Марина","https://vk.com/id31474929":"Саша","https://vk.com/laronica":"Лариса","https://vk.com/id482923900":"Юля","https://vk.com/notinsect":"Катя",
"https://vk.com/my_life0712":"Катя","https://vk.com/olenka_pavlova":"Оля","https://vk.com/id143903906":"Женя","https://vk.com/katysha_yakovleva":"Катя","https://vk.com/suntsova_ya":"Яна","https://vk.com/fine392atom":"Света","https://vk.com/zhenechkafedorova":"Женя","https://vk.com/id406251615":"Катя","https://vk.com/id601452151":"Алина","https://vk.com/id64393445":"Катя","https://vk.com/marinadreamerru":"Марина",
"https://vk.com/id358991311":"Света","https://vk.com/id751401524":"Марина","https://vk.com/id51791007":"Саша","https://vk.com/n.m.samsonova":"Наташа","https://vk.com/id66672425":"Наташа","https://vk.com/id702663953":"Маша","https://vk.com/id19905385":"Катя","https://vk.com/dianochka_ponomareva":"Диана","https://vk.com/k.yakeeva":"Кристина","https://vk.com/vera_nogti":"Вера",
"https://vk.com/avis991":"Анжелика","https://vk.com/id80063623":"Оксана","https://vk.com/id347731078":"Вика","https://vk.com/bullma":"Лена","https://vk.com/ksyunya_star":"Ксюша","https://vk.com/aavdotkaa":"Настя","https://vk.com/id357815006":"Юля","https://vk.com/id349586936":"Леся","https://vk.com/obuhova_sasha":"Саша","https://vk.com/id300065095":"Юля","https://vk.com/id559627776":"Юля",
"https://vk.com/id498192564":"Кристина","https://vk.com/fieryjuly":"Настя","https://vk.com/id759451991":"Кристина","https://vk.com/id751422434":"Люба","https://vk.com/id759453950":"Наташа","https://vk.com/id751402336":"Инна","https://vk.com/id751423212":"Саша","https://vk.com/id695702032":"Настя","https://vk.com/id338002474":"Ульяна","https://vk.com/lubimova1001":"Лена","https://vk.com/shuro_kauok":"Таня","https://vk.com/nineldanilevskaya":"Нина","https://vk.com/nepokornaja86":"Оксана","https://vk.com/id62075214":"Оля","https://vk.com/id179596851":"Аня","https://vk.com/id50240610":"Маша","https://vk.com/id22163946":"Надя","https://vk.com/ilinaalisa":"Алиса","https://vk.com/id100953921":"Кристина","https://vk.com/id132408376":"Марина","https://vk.com/id30394937":"Оксана","https://vk.com/lyubochkaaa":"Люба","https://vk.com/id7894401":"Наташа"};
		
	