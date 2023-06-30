var namelist = ["Дина","Фаина","Фрося","Руслана","Зиля","Лия","Оля","Наташа","Лада","Рада","Таня","Лилия","Зина","Василиса","Роксана","Наина","Анжелика","Марьяна","Жанна","Марина","Майя","Рената","Ангелина","Виталина","Снежанна","Элла","Вита","Динара","Анфиса","Тая","Настя","Лиана","Оксана","Беата","Рина","Марфа","Ульяна","Инна","Зоя","Мила","Диляра","Регина","Инга","Тоня","Леся","Элина","Эльза","Лина","Марта","Гюзель","Глафира","Варя","Алевтина","Клава","Валя","Вера","Саша","Диана","Женя","Станислава","Роза","Арина","Ира","Рая","Соня","Алиса","Эльвира","Ильмира","Ева","Олеся","Полина","Лиза","Элеанора","Даша","Вика","Юля","Инесса","Лена","Люда","Галя","Маргарита","Яна","Лида","Тамара","Анжела","Юлиана","Нина","Маша","Кира","Альбина","Надя","Алла","Алина","Карина","Вероника","Аня","Ксюша","Люба","Лера","Кристина","Катя","Света","Лариса"];
var pop_namelist = ["Оля","Наташа","Таня","Марина","Настя","Оксана","Валя","Вера","Саша","Диана","Женя","Ира","Олеся","Полина","Лиза","Даша","Вика","Юля","Инесса","Лена","Люда","Галя","Лида","Тамара","Нина","Маша","Надя","Алла","Алина","Карина","Вероника","Аня","Ксюша","Люба","Лера","Кристина","Катя","Света","Лариса"];


// "https://vk.com/kris_sakharova":"Кристина","https://vk.com/evlampia87":"Галя","https://vk.com/mikkimaus1":"Кристина","https://vk.com/id149433076":"Маргарита" "https://vk.com/idmanechka_kirillova":"Маша",
var reflist= {"https://vk.com/id644824961":"Аня","https://vk.com/kseniamir86":"Ксюша","https://vk.com/id770574886":"Лиана","https://vk.com/id86014400":"Оля","https://vk.com/lebedver":"Вероника","https://vk.com/ksennyyy":"Ксюша","https://vk.com/olga_sunpearl":"Оля","https://vk.com/id86118779":"Настя","https://vk.com/alekseeva_psy":"Настя","https://vk.com/alpha_insekt":"Кира","https://vk.com/25katrina":"Катя","https://vk.com/id759447805":"Кристина","https://vk.com/tina_lovely777":"Кристина","https://vk.com/id166076902":"Лариса","https://vk.com/a_radmila":"Рада","https://vk.com/id380123935":"Надя","https://vk.com/id193570814":"Вероника","https://vk.com/id224496250":"Инна","https://vk.com/gemaries":"Вика","https://vk.com/id443143020":"Катя","https://vk.com/id491868486":"Маша","https://vk.com/id67698893":"Катя","https://vk.com/marinochka024":"Марина","https://vk.com/id691646510":"Наташа","https://vk.com/id448282924":"Настя","https://vk.com/id138588540":"Алиса","https://vk.com/tanyshkavsev":"Таня","https://vk.com/id395020495":"Катя","https://vk.com/id468098040":"Ксюша","https://vk.com/mariamiller25":"Маша","https://vk.com/id41509117":"Таня","https://vk.com/umnumnumka":"Ксюша","https://vk.com/vlasovakarina2013":"Марина","https://vk.com/vk.alenka":"Ангелина","https://vk.com/id201245149":"Роксана","https://vk.com/id37225165":"Ксюша","https://vk.com/id21734709":"Настя","https://vk.com/vesta73rus":"Юля","https://vk.com/id53924353":"Наташа","https://vk.com/id740983867":"Соня","https://vk.com/darya1stolyarova":"Даша", "https://vk.com/id69458040":"Марина","https://vk.com/katya_olegovna":"Катя","https://vk.com/id648298149":"Ксюша","https://vk.com/id247049270":"Катя","https://vk.com/id149420957":"Марина","https://vk.com/id472303493":"Оля","https://vk.com/id520627922":"Женя","https://vk.com/yourdreamsssv":"Вика","https://vk.com/lana_s_lana":"Света","https://vk.com/id146698906":"Оксана",
"https://vk.com/id451170882":"Кира","https://vk.com/nastepka":"Настя","https://vk.com/vederni":"Катя","https://vk.com/id766582982":"Оля","https://vk.com/d_a_r_i_a14e_g_o_r_o_v_a":"Даша","https://vk.com/id4253138":"Аня","https://vk.com/id328575176":"Ангелина","https://vk.com/id282002636":"Алина","https://vk.com/13ekaterina13":"Катя","https://vk.com/id64445984":"Настя","https://vk.com/olaprokhorova":"Оля","https://vk.com/id143707705":"Катя","https://vk.com/id310865750":"Катя","https://vk.com/id16573534":"Вика","https://vk.com/irina.farafonova2018":"Ира","https://vk.com/id242115921":"Марина","https://vk.com/id176030451":"Таня","https://vk.com/id154508992":"Настя","https://vk.com/yugelka":"Наташа","https://vk.com/lenka_simurzina":"Лена","https://vk.com/id236908576":"Таня","https://vk.com/yulyacat":"Юля","https://vk.com/id207231438":"Женя","https://vk.com/natashkin666":"Наташа","https://vk.com/vkirienko2017":"Вера",
"https://vk.com/juliabakanova":"Юля","https://vk.com/dasha234":"Даша","https://vk.com/tottybu":"Лена","https://vk.com/asya_kapitonova":"Настя","https://vk.com/blondie___loca":"Света","https://vk.com/id133445169":"Наташа","https://vk.com/id386532082":"Ира","https://vk.com/4ern1kaa":"Настя","https://vk.com/id109565635":"Настя","https://vk.com/anu_tka_anuta":"Аня","https://vk.com/id236425973":"Маша","https://vk.com/id365520281":"Лена","https://vk.com/id280911914":"Вика","https://vk.com/polinaa.markova":"Полина","https://vk.com/id292139346":"Женя","https://vk.com/id57877619":"Кристина","https://vk.com/mklementyeva93":"Марина","https://vk.com/id757048400":"Маргарита","https://vk.com/id252220790":"Таня","https://vk.com/id161300549":"Настя","https://vk.com/id306202074":"Лена","https://vk.com/id8356308":"Таня","https://vk.com/danilova_n_n":"Наташа","https://vk.com/aladyeva":"Лена","https://vk.com/id15925646":"Наташа","https://vk.com/id8043922":"Катя","https://vk.com/id3569249":"Аня","https://vk.com/yganina":"Юля","https://vk.com/id338331858":"Наташа","https://vk.com/id375774810":"Марина",
"https://vk.com/id44853182":"Аня","https://vk.com/id137170084":"Настя","https://vk.com/ignateva_smm":"Оля","https://vk.com/id429349008":"Надя","https://vk.com/artcours":"Таня","https://vk.com/shvets_liana13":"Лиана","https://vk.com/id165018143":"Оля","https://vk.com/ray_of_sunshine188":"Фаина","https://vk.com/id164011805":"Катя","https://vk.com/tatyanapolevova":"Таня","https://vk.com/id79394001":"Эльвира","https://vk.com/natalika23":"Наташа","https://vk.com/id220368687":"Оля","https://vk.com/juliya_vs":"Юля","https://vk.com/id486606833":"Кира","https://vk.com/id245988644":"Анжелика","https://vk.com/id259336514":"Аня","https://vk.com/id280142228":"Аня","https://vk.com/id388815915":"Лера","https://vk.com/id442865533":"Кристина","https://vk.com/aleksandra_1211":"Саша","https://vk.com/katyafilinova":"Катя","https://vk.com/id203422910":"Катя","https://vk.com/id144254304":"Наташа","https://vk.com/id2921728":"Снежанна","https://vk.com/id75148546":"Олеся","https://vk.com/eugenia_koshka":"Женя","https://vk.com/luxury21cheb":"Таня",
"https://vk.com/id294778783":"Таня","https://vk.com/dshekshaeva":"Даша","https://vk.com/natali_21_che":"Наташа","https://vk.com/id100080270":"Катя","https://vk.com/zilya_vokal":"Зиля","https://vk.com/id6869859":"Оля","https://vk.com/cather1n":"Катя","https://vk.com/lnkglv4":"Лена","https://vk.com/id205839274":"Кира","https://vk.com/id212851196":"Марина","https://vk.com/id505776285":"Полина","https://vk.com/21diz":"Настя","https://vk.com/id491103783":"Марина","https://vk.com/id357568617":"Таня","https://vk.com/idksenyakonst":"Ксюша","https://vk.com/leris1302":"Лариса","https://vk.com/id484024374":"Вероника","https://vk.com/bysrt":"Таня","https://vk.com/id66649756":"Наташа","https://vk.com/olyivanova87":"Оля","https://vk.com/id475196760":"Наташа","https://vk.com/id390075299":"Наташа","https://vk.com/id33121053":"Оля",
"https://vk.com/id621159769":"Оля","https://vk.com/id36636459":"Надя","https://vk.com/anna.sboeva":"Аня","https://vk.com/id9857433":"Катя","https://vk.com/id331803323":"Надя","https://vk.com/id146062618":"Тоня","https://vk.com/id300734627":"Настя","https://vk.com/id248709070":"Катя","https://vk.com/id23543153":"Таня","https://vk.com/meri031194":"Маша","https://vk.com/id610316398":"Лена","https://vk.com/id209957952":"Руслана","https://vk.com/dinaivanova1989":"Дина","https://vk.com/id9597401":"Оля","https://vk.com/id535194810":"Женя","https://vk.com/pavlyhka":"Марта","https://vk.com/id127956305":"Аня","https://vk.com/pinari":"Таня","https://vk.com/yuliya_walter":"Катя","https://vk.com/mashafoxsinger":"Маша","https://vk.com/id28711298":"Надя","https://vk.com/id32977826":"Аня","https://vk.com/pantera_number_one":"Лариса","https://vk.com/sonya_zudina":"Соня","https://vk.com/id212055762":"Оля","https://vk.com/id214082416":"Марина","https://vk.com/id212731605":"Марина","https://vk.com/id188228787":"Ира","https://vk.com/id239603031":"Катя","https://vk.com/id506849104":"Марина","https://vk.com/id286347844":"Таня","https://vk.com/id479159632":"Валя","https://vk.com/id254052449":"Настя","https://vk.com/id299670811":"Надя",
"https://vk.com/krasnovamashka":"Маша","https://vk.com/id400732051":"Татьяна","https://vk.com/id10658555":"Алиса","https://vk.com/olenkacher":"Оля","https://vk.com/id770080513":"Юля","https://vk.com/lilya444":"Лилия","https://vk.com/oartizanova":"Оля","https://vk.com/id19114502":"Наташа","https://vk.com/id372049723":"Ира","https://vk.com/escaada":"Оля","https://vk.com/id479316283":"Ксюша","https://vk.com/melnasha_411":"Лена","https://vk.com/nvinogradinka12":"Надя","https://vk.com/id759453371":"Инна","https://vk.com/id95777217":"Аня","https://vk.com/id158684798":"Кира","https://vk.com/id178827019":"Кира","https://vk.com/annamakarenko21071991":"Аня","https://vk.com/id239925740":"Оксана","https://vk.com/vika_trepp":"Вика","https://vk.com/anya_loseva":"Аня","https://vk.com/powerlifterka":"Люда","https://vk.com/anetzvezda":"Аня","https://vk.com/id7102872":"Настя","https://vk.com/padyanovairina":"Ира","https://vk.com/id140575064":"Аня","https://vk.com/id17858825":"Наташа","https://vk.com/id254678779":"Валя","https://vk.com/id213985270":"Юля","https://vk.com/id225635623":"Маша","https://vk.com/zakirov12345":"Карина","https://vk.com/id227504563":"Лера","https://vk.com/id262595953":"Настя","https://vk.com/id210900612":"Карина",
"https://vk.com/id280647808":"Настя","https://vk.com/id405082239":"Лена","https://vk.com/id3098308":"Вероника","https://vk.com/idkrasawica":"Надя","https://vk.com/id338629352":"Оля","https://vk.com/id778684133":"Лиза","https://vk.com/olga_fire":"Оля","https://vk.com/inna2123":"Инна","https://vk.com/o.firus87":"Оля","https://vk.com/id357320311":"Кира","https://vk.com/id405565734":"Ксюша","https://vk.com/ir_mustafina":"Ира","https://vk.com/miss_katr1n":"Катя","https://vk.com/ludmilkina22":"Люда","https://vk.com/id290816341":"Ксюша","https://vk.com/id199523886":"Лера","https://vk.com/id346520788":"Настя","https://vk.com/id514162022":"Настя","https://vk.com/id318319749":"Анжелика","https://vk.com/id35139690":"Ксюша",
"https://vk.com/id241169651":"Ксюша","https://vk.com/id10280158":"Лена","https://vk.com/markova_lashes":"Люда","https://vk.com/k.aleksksandrova":"Карина","https://vk.com/id19130626":"Маша","https://vk.com/id23863221":"Оля","https://vk.com/stepanovairina21":"Ира","https://vk.com/mauliza":"Маша","https://vk.com/id10544894":"Женя","https://vk.com/natasha.vseznaet":"Наташа","https://vk.com/id382528857":"Оксана","https://vk.com/id118214360":"Лена","https://vk.com/id375526571":"Аня","https://vk.com/id65923431":"Таня","https://vk.com/alisa_v_strane_4ydec":"Соня","https://vk.com/ritvasil":"Маргарита","https://vk.com/id351773368":"Ксюша","https://vk.com/id207624270":"Марина","https://vk.com/id308728318":"Ксюша","https://vk.com/yashina1992":"Лена","https://vk.com/id740641426":"Соня","https://vk.com/olgailina121":"Оля","https://vk.com/id18376126":"Марина","https://vk.com/id31474929":"Саша","https://vk.com/laronica":"Лариса","https://vk.com/id482923900":"Юля","https://vk.com/notinsect":"Катя",
"https://vk.com/my_life0712":"Катя","https://vk.com/id29179042":"Настя","https://vk.com/id330514675":"Аня","https://vk.com/olga__wise":"Оля","https://vk.com/id2485505":"Даша","https://vk.com/id85044119":"Инна","https://vk.com/svetik_dk":"Света","https://vk.com/lubovlakman":"Люба","https://vk.com/id34720244":"Наташа","https://vk.com/id151861503":"Надя","https://vk.com/olenka_pavlova":"Оля","https://vk.com/id143903906":"Женя","https://vk.com/katysha_yakovleva":"Катя","https://vk.com/suntsova_ya":"Яна","https://vk.com/fine392atom":"Света","https://vk.com/zhenechkafedorova":"Женя","https://vk.com/id406251615":"Катя","https://vk.com/id601452151":"Алина","https://vk.com/id64393445":"Катя","https://vk.com/marinadreamerru":"Марина",
"https://vk.com/id358991311":"Света","https://vk.com/id51791007":"Саша","https://vk.com/n.m.samsonova":"Наташа","https://vk.com/id19905385":"Катя","https://vk.com/dianochka_ponomareva":"Диана","https://vk.com/k.yakeeva":"Кристина","https://vk.com/vera_nogti":"Вера",
"https://vk.com/avis991":"Анжелика","https://vk.com/klavavladi":"Клава","https://vk.com/valentina.melnichyk":"Валя","https://vk.com/id80063623":"Оксана","https://vk.com/tanecslov":"Оля","https://vk.com/id347731078":"Вика","https://vk.com/ksyunya_star":"Ксюша","https://vk.com/aavdotkaa":"Настя","https://vk.com/id357815006":"Юля","https://vk.com/id349586936":"Леся","https://vk.com/obuhova_sasha":"Саша","https://vk.com/id300065095":"Юля","https://vk.com/id559627776":"Юля",
"https://vk.com/id498192564":"Кристина","https://vk.com/id7934982":"Лена","https://vk.com/nebo.and.zemlya":"Лера","https://vk.com/katyacheshka77":"Катя","https://vk.com/id461620083":"Галя","https://vk.com/id20423791":"Аня","https://vk.com/iovvvvvve":"Ксюша","https://vk.com/id69332739":"Наташа","https://vk.com/nastenacher":"Настя","https://vk.com/id751423212":"Саша","https://vk.com/id338002474":"Ульяна","https://vk.com/lubimova1001":"Лена","https://vk.com/shuro_kauok":"Таня","https://vk.com/nineldanilevskaya":"Нина","https://vk.com/nepokornaja86":"Оксана","https://vk.com/id62075214":"Оля","https://vk.com/id179596851":"Аня","https://vk.com/id50240610":"Маша","https://vk.com/id22163946":"Надя","https://vk.com/ilinaalisa":"Алиса","https://vk.com/id100953921":"Кристина","https://vk.com/id132408376":"Марина","https://vk.com/id30394937":"Оксана","https://vk.com/lyubochkaaa":"Люба","https://vk.com/id7894401":"Наташа"};
		
	