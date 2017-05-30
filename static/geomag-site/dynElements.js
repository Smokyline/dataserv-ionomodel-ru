
var iframe_created = 0;
var eventCounter = 0;

function nextEvent (lang) {
	if (lang == 'en') {

		var events = ['1-second scalar data transmission from Kazan (KZN) observatory has been started.<br /><em>01.03.2017</em>',
					  '1-second preliminary, quasi-definitive and definitive data can be now plotted online (<a href=\"dataprod-plot.html\">Plot</a> section).<br /><em>26.12.2016</em>',
					  'Arti (<strong>ARS</strong>) observatory has turned <strong>180</strong> years old.<br /><em>01.12.2016</em>',
					  'For Magadan observatory, missing data from the main FGE vector magnetometer are automatically filled with data from backup dIdD magnetometer.<br /><em>18.10.2016</em>',
					  '<a href=\"dataserv-extplot.html\">Geomagnetic Activity</a> section has been added. It provides geomagnetic activity estimation using four indicators based on observatory data: Measure of Anomality, dB/dt, Amplitude and K-index.<br /><em>10.10.2016</em>',
					  '<strong>POD</strong> observatory has been closed.<br /><em>09.09.2016</em>',
					  '1-second data are now available from <strong>SPG, KLI, KAZ, MOS</strong> and <strong>POD</strong> observatories.<br /><em>30.08.2016</em>',
					  '\"Saint Petersburg\" (<a href=\"obs-SPG.html\">SPG</a>) observatory has been certified by <strong>INTERMAGNET</strong>. Click to view the <a href=\"img/spg_intermagnet_cert.png\" target=\"_blank\">Certificate</a>.<br /><em>09.06.2016</em>',
					  'Upcoming International Conference <a href=\"http://sochi2016.gcras.ru/\" target=\"_blank\">&quot;Data Intensive System Analysis for Geohazard Studies&quot;</a> on 18–21 July 2016 in Sochi region, Mountain cluster, Russia.<br /><em>18.01.2016</em>',
					  '2014 definitive data of \"Arti\" (<a href=\"obs-ARS.html\">ARS</a>) observatory has been published and it is now available through <a href=\"http://www.intermagnet.org\" target=\"_blank\">INTERMAGNET</a> web-site.<br /><em>18.04.2016</em>',
					  '\'Save to file\' option has been added to download <a href=\"dataprod-down.html\">Variational</a> and <a href=\"dataserv-abs.html\">Absolute</a> data.<br /><em>18.03.2016</em>',
					  'Two types of <a href=\"dataserv-abs.html\">Adopted Baselines</a> have been introduced: approved one, calculated till the end of the preceding year (green marks), and current one, re-calculated from 1&nbsp;December of the preceding year each time new absolute measurements are obtained (blue marks).<br /><em>01.02.2016</em>',
					  'Description of the automated  calculation of quasi-definitive data (in Russian) implemented in the Geomagnetic center has been added in <a href=\"materials-man.html\">Materials (User Manuals)</a> section.<br /><em>30.11.2015</em>',
					  '<a href=\"http://esdb.wdcb.ru\" target=\"_blank\">Earth Science DataBase (ESDB)</a> project has been launched by GC RAS for promoting observatory data publication and citation. DOI have been already assigned to <a href=\"http://esdb.wdcb.ru/doi/2015/kli2011.html" target=\"_blank\">KLI Geomagnetic Database</a> and <a href=\"http://esdb.wdcb.ru/doi/2015/kli2011min.html\" target=\"_blank\">KLI Minute Variations</a>.<br /><em>07.08.2015</em>',
					  'Absolute measurements have been started at \"Cape Schmidt\" (<a href=\"obs-CPS.html\">CPS</a>) observatory. Now the transmitted data status is \"provisional\", to a certain extent they are close to absolute component values. The data format has been changed to XYZ.<br /><em>05.08.2015</em>',
					  'The RUGDC has been indexed by Registry of Research Data Repositories (<a href=\"http://service.re3data.org/repository/r3d100011592\" target=\"_blank\">re3data.org</a>).<br /><em>04.08.2015</em>',
					  'The data from \"Kazan\" (<a href=\"obs-KZN.html\">KZN</a>) observatory are now available online</a>.<br /><em>03.08.2015</em>',
					  '<a href=\"dataprod-plot.html\">Quasi-definitive data (1-min)</a> are now available. Quasi-definitive data are re-calculated automatically on the day when new absolute measurements are transmitted, starting from 1 December of the previous year. Currently it applies only to SPG, KLI and ARS observatories.<br /><em>01.08.2015</em>',
					  'Automated spike filtering in the course of <a href=\"dataserv-abs.html\">Adopted Baselines</a> calculation has been implemented.<br /><em>31.07.2015</em>',
					  'Plots of variometer sensor temperature and variometer electronics tempereature are now available both in <a href=\"dataprod-plot.html\">Data Products (Plot)</a> and <a href=\"dataserv-abs.html\">Absolute / Baseline Data</a> sections. Currently temperature variations are transmitted only from MOS, SPG, KLI and BOX observatories.<br /><em>30.07.2015</em>',
					  'Automated re-calculation of <a href=\"dataserv-abs.html\">Adopted Baselines</a> from observed baseline values has been implemented. Each time new absolute measurements are transmitted the adopted baselines are re-calculated starting from 1&nbsp;December of the previous year.<br /><em>18.06.2015</em>',
					  '<a href=\"dataserv-gis.html\">GIS Magnetic Services</a> have been added. GIS application for mapping geomagnetic field online using Swarm satellite measurements is now available in beta mode.<br /><em>12.01.2015</em>',
					  'The data from \"Bor\" (<a href=\"obs-POD.html\">POD</a>) observatory are available online.<br /><em>19.12.2014</em>',
					  'New version 2.0 of the user manual for implementing the absolute measurements using declinometer is available in the <a href=\"materials-man.html\">User Manuals</a> subsection.<br /><em>12.12.2014</em>',
					  '\"Bor\" (<a href=\"obs-POD.html\">POD</a>) observatory has been launched, the data are transmitted to the Center.<br /><em>01.11.2014</em>',
					  '\"Klimovskaya\" (<a href=\"obs-KLI.html\">KLI</a>) observatory has been launched. The data are available online, absolute measurements are carried out on a regular basis.<br /><em>01.10.2014</em>',
					  'Data transmission from \"Khabarovsk\" (<a href=\"obs-KHB.html\">KHB</a>) observatory has been started.<br /><em>25.07.2014</em>', 
					  '<a href=\"dataserv-abs.html\">Absolute / Baseline Data</a> service is now available.<br /><em>30.05.2014</em>',
					  'Data transmission from INTERMAGNET observatory \"Argentine Islands (Akademik Vernadsky base)\" (<a href=\"obs-AIA.html\">AIA</a>) in Antarctica has been started.<br /><em>07.02.2014</em>', 
					  '\"Paratunka\" (<a href=\"obs-PET.html\">PET</a>) observatory has been certified by INTERMAGNET. The data are transmitted to the geomagnetic data center.<br /><em>16.12.2013</em>',
					  'Data transmission from \"Cape Schmidt\" (<a href=\"obs-CPS.html\">CPS</a>) station has been started.<br /><em>16.12.2013</em>', 
				  	  'Application of \"Khabarovsk\" (<a href=\"obs-KHB.html\">KHB</a>) observatory for INTERMAGNET membership has been accepted.<br /><em>04.11.2013</em>',
					  'A set of INTERMAGNET magnetometric equipment has been installed at \"Bor\" (<a href=\"obs-POD.html\">POD</a>) observatory.<br /><em>17.09.2013</em>',
					  'Upcoming International Conference <a href=\"http://kaluga2013.gcras.ru/\" target=\"_blank\">&quot;Geophysical Observatories, Multifunctional GIS and Data Mining&quot;</a> on 30 September - 3 October 2013 in Kaluga, Russia.<br /><em>01.08.2013</em>'];
	}
	else {
		var events = ['Начата передача 1-секундных скалярных данных из обсерватории \"Казань\" (KZN).<br /><em>01.03.2017</em>',
					  'Разработан онлайн-сервис построения графиков по 1-секундным предварительным, квази-окончательным и окончательным данным (раздел <a href=\"dataprod-plot.html\">Plot</a>).<br /><em>26.12.2016</em>',
					  'Обсерватории Арти (<strong>ARS</strong>) исполнилось <strong>180</strong> лет.<br /><em>01.12.2016</em>',
					  'Для обсерватории Магадан настроено автоматическое заполнение пропуков данных основного векторного магнитометра FGE данными с дублирующего магнитометра dIdD.<br /><em>18.10.2016</em>',
					  'Добавлена служба <a href=\"dataserv-extplot.html\">Geomagnetic Activity</a>. Она предоставляет возможность оценки гемагнитной активности с использованием четырех индикаторов на базе обсерваторских данных: Мера Аномальности, dB/dt, Амплитуда и K-индекс.<br /><em>10.10.2016</em>',
					  'Обсерватория <strong>POD</strong> была закрыта.<br /><em>09.09.2016</em>',
					  '1-секундные данные теперь доступны из обсерваторий <strong>SPG, KLI, KAZ, MOS</strong> и <strong>POD</strong>.<br /><em>30.08.2016</em>',
					  'Обсерватория \"Санкт Петербург\" (<a href=\"obs-SPG.html\">SPG</a>) официально принята в сеть <strong>INTERMAGNET</strong>. Нажмите здесь для просмотра <a href=\"img/spg_intermagnet_cert.png\" target=\"_blank\">сертификата</a>.<br /><em>09.06.2016</em>',
					  'Международная конференция <a href=\"http://sochi2016.gcras.ru/\" target=\"_blank\">&quot;Data Intensive System Analysis for Geohazard Studies&quot;</a> пройдет 18–21 июля 2016 г. в регионе г. Сочи, Красная Поляна, Россия.<br /><em>18.01.2016</em>',
					  'Окончательные данные обсерватории \"Арти\" (<a href=\"obs-ARS.html\">ARS</a>) за 2014 год были опубликованы и теперь доступны через веб-сайт <a href=\"http://www.intermagnet.org\" target=\"_blank\">ИНТЕРМАГНЕТ</a>.<br /><em>18.04.2016</em>',					  
					  'Добавлена функция загрузки цифровых <a href=\"dataprod-down.html\">Вариационных</a> и <a href=\"dataserv-abs.html\">Абсолютных</a> данных.<br /><em>18.03.2016</em>',
					  'Введены два типа <a href=\"dataserv-abs.html\">Базисных линий</a>: утвержденная, рассчитанная до конца предшествующего года (зеленые метки), и текущая, пересчитываемая с 1&nbsp;декабря предшествующего года при каждом поступлении новых абсолютных измерений (синие метки).<br /><em>01.02.2016</em>',
					  'Описание автоматизированного расчета квази-окончательных данных, реализованного в Геомагнитном центре, добавлено в раздел <a href=\"materials-man.html\">Материалы (Руководства)</a>.<br /><em>30.11.2015</em>',
					  'ГЦ РАН запущен проект <a href=\"http://esdb.wdcb.ru\" target=\"_blank\">Earth Science DataBase (ESDB)</a> для продвижения публикации и цитирования обсерваторских данных. DOI-идентификаторы уже присвоены <a href=\"http://esdb.wdcb.ru/doi/2015/kli2011.html" target=\"_blank\">Геомагнитной базе данных KLI</a> и <a href=\"http://esdb.wdcb.ru/doi/2015/kli2011min.html\" target=\"_blank\">Минутным вариациям KLI</a>.<br /><em>07.08.2015</em>',
				      'На обсерватории \"Мыс Шмидта\" (<a href=\"obs-CPS.html\">CPS</a>) начали производиться абсолютные наблюдения. Теперь передаваемые минутные данные имеют статус \"provisional\", с определенным допуском близкие к полным значениям составляющих. Формат данных изменен на XYZ.<br /><em>05.08.2015</em>',
					  'Центр геомагнитных данных теперь проиндексирован в системе \"Registry of Research Data Repositories\" (<a href=\"http://service.re3data.org/repository/r3d100011592\" target=\"_blank\">re3data.org</a>).<br /><em>04.08.2015</em>',
					  'Данные обсерватории \"Казань\" (<a href=\"obs-KZN.html\">KZN</a>) теперь доступны <a href=\"dataprod-down.html\">онлайн</a>.<br /><em>03.08.2015</em>',
					  'Открыт доступ к <a href=\"#\">Квази-окончательным данным (1-мин)</a>. Квази-окончательные данные пересчитываются автоматически в день поступления новых абсолютных измерений, начиная с 1 декабря предыдущего года. На сегодня эта функция доступна для обсерваторий SPG, KLI и ARS.<br /><em>01.08.2015</em>',
'Реализована автоматическая фильтрация выбросов при расчете <a href=\"#\">Базисных линий</a>.<br /><em>31.07.2015</em>',					  
					  'Добавлено отображение графиков температур датчика и блока электроники вариометра в разделах <a href=\"dataprod-plot.html\">Данные (Графики)</a> и <a href=\"dataserv-abs.html\">Абсолютные данные</a>. На сегодня температурные вариации передаются только из обсерватоий MOS, SPG, KLI и BOX.<br /><em>30.07.2015</em>',
					  'Внедрена функция автоматического перерасчета <a href=\"#\">Базисных линий</a> из наблюденных базисных значений. Каждый раз при получении новых абсолютных измерений базисные линии пересчитываются начиная с 1&nbsp;декабря предыдущего года.<br /><em>18.06.2015</em>',
					  'Добавлена служба <a href="dataserv-gis.html\">GIS Magnetic Services</a>. Запущена бета-версия ГИС-приложения для картографирования геомагнитного поля на базе спутниковых данных Swarm в режиме онлайн.<br /><em>12.01.2015</em>',
					  'Данные из обсерватории \"Бор\" (<a href=\"obs-POD.html\">POD</a>) доступны онлайн.<br /><em>19.12.2014</em>',
					  'Новая версия 2.0 инструкции по выполнению абсолютных измерений на деклинометре размещена в подразделе <a href=\"materials-man.html\">User Manuals</a>.<br /><em>12.12.2014</em>',
					  'Введена в эксплуатацию обсерватория \"Бор\" (<a href=\"obs-POD.html\">POD</a>), данные передаются в Центр.<br /><em>01.11.2014</em>',
					  'Введена в эксплуатацию обсерватория \"Климовская\" (<a href=\"obs-KLI.html\">KLI</a>). Данные доступны онлайн, абсолютные измерения производятся на регулярной основе.<br /><em>01.10.2014</em>',
					  'Начата передача данных из обсерватории ИНТЕРМАГНЕТ &laquo;Хабаровск&raquo; (<a href=\"obs-KHB.html\">KHB</a>).<br /><em>25.07.2014</em>',
					  'Запущена служба <a href=\"\">Absolute / Baseline Data</a>.<br /><em>30.05.2014</em>',
					  'Начата передача данных из обсерватории ИНТЕРМАГНЕТ &laquo;Академик Вернадский&raquo; (<a href=\"#\">AIA</a>) в Антарктиде.<br /><em>07.02.2014</em>',
					  'Обсерватория &laquo;Паратунка&raquo; (<a href=\"obs-PET.html\">PET</a>) принята в сеть ИНТЕРМАГНЕТ. Данные доступны на сайте геомагнитного центра.<br /><em>16.12.2013</em>',
					  'Начата передача данных со станции &laquo;Мыс Шмидта&raquo; (<a href=\""obs-CPS.html\">CPS</a>).<br /><em>16.12.2013</em>',
					  'Заявка обсерватории &laquo;Хабаровск&raquo; (<a href=\"#\">KHB</a>) на вступление в сеть ИНТЕРМАГНЕТ рассмотрена положительно.<br /><em>04.11.2013</em>',	
					  'Комплект магнитометрического оборудования стандарта ИНТЕРМАГНЕТ был установлен в обсерватории &laquo;Бор&raquo; (<a href=\"\">POD</a>).<br /><em>17.09.2013</em>',
					  'Международная конференция <a href=\"http://kaluga2013.gcras.ru/\" target=\"_blank\">&laquo;Геофизические обсерватории, многофункциональные ГИС и распознавание в информационных массивах&raquo;</a> пройдет 30 сентября - 3 октября 2013 г. в г. Калуге, Россия.<br /><em>01.08.2013</em>'];		
	}


	document.getElementById("event").innerHTML=events[eventCounter];

	if ((eventCounter + 1) < events.length) {			
		eventCounter = eventCounter + 1;
	}
	else {
		eventCounter = 0;
	}
	
}

function satExtDataRequest (divId, formName, servletName)
{
		form = document.forms[formName];
		if (iframe_created == 0) {			
			if ((form.sel_obs.value!="" & form.type.value=="obs") | (Number(form.latFrom.value)<Number(form.latTo.value) & Number(form.lonFrom.value)<Number(form.lonTo.value) & form.type.value=="reg")) {
				// new iframe is created
				container = document.getElementById(divId);
				if (servletName == "SwarmAscii") { requestRes = generateRequestSat(formName, servletName); }
					else 
					{ requestRes = generateRequestExt(formName, servletName); }
				
				var el = document.createElement("iframe");
				container.appendChild(el);
				el.id = 'iframe';
				el.height='400';
				el.width='608';
				el.src = requestRes[0];				
				
				var br1 = document.createElement("br");
				container.appendChild(br1);
				br1.id = 'br1';
				var br2 = document.createElement("br");
				container.appendChild(br2);
				br2.id = 'br2';
				
				var save_a = document.createElement("a");
				container.appendChild(save_a);
				save_a.id = 'save_a';

				var but = document.createElement("input");
				container.appendChild(but);
				but.type = 'submit';
				if (formName.includes("ru")) {
					but.value = 'Записать в файл';
				}
				else {
					but.value = 'Save to file';
				}
				but.id = 'save';
				but.setAttribute("class", 'detailText');

				but.onclick = function() { // Note this is a function
					var s = document.getElementById("iframe").contentDocument.getElementsByTagName('pre')[0].innerHTML;
					s=s.replace(/\r?\n/g,"\r\n");
					var file = new Blob([s], {type: 'text/plain'});
					save_a.href = URL.createObjectURL(file);
					save_a.download = requestRes[1] + '.txt';
					save_a.click();
				}; 
				
				iframe_created = 1;
			}
		}
		else {
			// existing frame is updated
			if ((form.sel_obs.value != "" & form.type.value=="obs") | (Number(form.latFrom.value)<Number(form.latTo.value) & Number(form.lonFrom.value)<Number(form.lonTo.value) & form.type.value=="reg")) {
				if (servletName == "SwarmAscii") { requestRes = generateRequestSat(formName, servletName); }
					else { requestRes = generateRequestExt(formName, servletName); }
				document.getElementById('iframe').src = requestRes[0];
				document.getElementById('save_a').download = requestRes[1] + '.txt';
			}
			else {
				// no station is selected, existing frame is removed
				document.getElementById(divId).removeChild(document.getElementById('iframe'));
				document.getElementById(divId).removeChild(document.getElementById('br1'));
				document.getElementById(divId).removeChild(document.getElementById('br2'));
				document.getElementById(divId).removeChild(document.getElementById('save_a'));
				document.getElementById(divId).removeChild(document.getElementById('save'));
				iframe_created = 0;
			}
		}
}

function absDataRequest (divId, inputId, formName)
{
	if (document.forms[formName].absres[1].checked=="1") { // ASCII format selected
		if (iframe_created == 0) {			
			if (document.getElementById(inputId).value != "") {
				// station is selected, new iframe is created
				container = document.getElementById(divId);
				requestRes = generateRequestObs (formName, 'IntermagnetAbsAscii');
				
				var el = document.createElement("iframe");
				container.appendChild(el);
				el.id = 'iframe';
				el.height='400';
				el.width='608';
				el.src = requestRes[0];				

				var br1 = document.createElement("br");
				container.appendChild(br1);
				br1.id = 'br1';
				var br2 = document.createElement("br");
				container.appendChild(br2);
				br2.id = 'br2';

				var save_a = document.createElement("a");
				container.appendChild(save_a);
				save_a.id = 'save_a';
				
				var but = document.createElement("input");
				container.appendChild(but);
				but.type = 'submit';
				but.value = 'Save to file';
				but.id = 'save';
				but.setAttribute("class", 'detailText');

				but.onclick = function() { // Note this is a function
					var s = document.getElementById("iframe").contentDocument.getElementsByTagName('pre')[0].innerHTML;
					s=s.replace(/\r?\n/g,"\r\n");
					var file = new Blob([s], {type: 'text/plain'});
					save_a.href = URL.createObjectURL(file);
					save_a.download = requestRes[1] + '.txt';
					save_a.click();
				}; 				
				
				iframe_created = 1;
			}
		}
		else {
			// station is selected, existing frame is updated
			if (document.getElementById(inputId).value != "") {
				requestRes = generateRequestObs (formName, 'IntermagnetAbsAscii');
				document.getElementById('iframe').src = requestRes[0];
				document.getElementById('save_a').download = requestRes[1];
			}
			else {
				// no station is selected, existing frame is removed
				document.getElementById(divId).removeChild(document.getElementById('iframe'));
				document.getElementById(divId).removeChild(document.getElementById('br1'));
				document.getElementById(divId).removeChild(document.getElementById('br2'));
				document.getElementById(divId).removeChild(document.getElementById('save_a'));				
				document.getElementById(divId).removeChild(document.getElementById('save'));				
				iframe_created = 0;
			}
		}
	}
	else // if plot is requested
	{
			if (iframe_created != 0) { // if iframe is already created, we remove it
				document.getElementById(divId).removeChild(document.getElementById('iframe'));
				document.getElementById(divId).removeChild(document.getElementById('br1'));
				document.getElementById(divId).removeChild(document.getElementById('br2'));
				document.getElementById(divId).removeChild(document.getElementById('save_a'));				
				document.getElementById(divId).removeChild(document.getElementById('save'));
				iframe_created = 0;
			}
			
			if (document.getElementById(inputId).value != "") {
				// station is selected
				var params = "menubar=no,resizable=yes,scrollbars=yes";
				window.open(generateRequestObs (formName, 'IntermagnetAbsChart')[0], "absplot", params)
			}
	}
}
function updateIframe (divId, inputId, formName)
{
		if (iframe_created == 0) {			
			if (document.getElementById(inputId).value != "") {
				// station is selected, new iframe is created
				container = document.getElementById(divId);
				requestRes = generateRequestObs(formName, 'IntermagnetAscii');
				
				var el = document.createElement("iframe");
				container.appendChild(el);
				el.id = 'iframe';
				el.height='400';
				el.width='608';
				el.src = requestRes[0];				
				
				var br1 = document.createElement("br");
				container.appendChild(br1);
				br1.id = 'br1';
				var br2 = document.createElement("br");
				container.appendChild(br2);
				br2.id = 'br2';
				
				var save_a = document.createElement("a");
				container.appendChild(save_a);
				save_a.id = 'save_a';

				var but = document.createElement("input");
				container.appendChild(but);
				but.type = 'submit';
				but.value = 'Save to file';
				but.id = 'save';
				but.setAttribute("class", 'detailText');

				but.onclick = function() { // Note this is a function
					var s = document.getElementById("iframe").contentDocument.getElementsByTagName('pre')[0].innerHTML;
					s=s.replace(/\r?\n/g,"\r\n");
					var file = new Blob([s], {type: 'text/plain'});
					save_a.href = URL.createObjectURL(file);
					save_a.download = requestRes[1] + '.txt';
					save_a.click();
				}; 
				
				iframe_created = 1;
			}
		}
		else {
			// station is selected, existing frame is updated
			if (document.getElementById(inputId).value != "") {
				requestRes = generateRequestObs(formName, 'IntermagnetAscii');
				document.getElementById('iframe').src = requestRes[0];
				document.getElementById('save_a').download = requestRes[1] + '.txt';
			}
			else {
				// no station is selected, existing frame is removed
				document.getElementById(divId).removeChild(document.getElementById('iframe'));
				document.getElementById(divId).removeChild(document.getElementById('br1'));
				document.getElementById(divId).removeChild(document.getElementById('br2'));
				document.getElementById(divId).removeChild(document.getElementById('save_a'));
				document.getElementById(divId).removeChild(document.getElementById('save'));
				iframe_created = 0;
			}
		}
}

function showPlot (inputId, formName)
{
			if (document.getElementById(inputId).value != "") {
				// station is selected
				var params = "menubar=no,resizable=yes,scrollbars=yes";
				window.open(generateRequestObs (formName, 'IntermagnetCombinedChart')[0], "plot", params)
			}
}

function showExtPlot (inputId, formName)
{
			if (document.getElementById(inputId).value != "") {
				// station is selected
				var params = "menubar=no,resizable=yes,scrollbars=yes";
				window.open(generateRequestExtPlot (formName, 'IntermagnetCombinedChart')[0], "plotExt", params)
			}
}


function generateRequestObs (formName, servletName)
{

	form = document.forms[formName];

	station=form.sel_obs.value; 

	if (station=="MOS") {
		station="";
	}

	var param = "";
	
	var iaga2002_flag = false;
	if (servletName == "IntermagnetAscii") {
		if (form.asciiformat[0].checked=="1") {
			iaga2002_flag = true;
		}
	}
	if	(iaga2002_flag) { // IAGA-2002 format selected
		param="&format=iaga2002";
	}
	else { // CSV format selected OR plots are generated
		param = "&param=";
		if (servletName.search('Abs') != -1) { // if we request absolute data, we need to keep the sequence v10, v20, v30, f0, Dabs, Iabs, Fabs
			for (var i=0; i<form.comp.length; i=i+2) {
			  if (form.comp[i].checked=="1") {
				param = param + form.comp[i].value + ";";
			  }
			}
			for (var i=1; i<form.comp.length; i=i+2) {
			  if (form.comp[i].checked=="1") {
				param = param + form.comp[i].value + ";";
			  }
			}
		}
		else { // if we request data
			for (var i=0; i<form.comp.length; i++) {
			  if (form.comp[i].checked=="1") {
				param = param + form.comp[i].value + ";";
		  	  }
			}
		}
	}
		
	for (var i=0; i<form.date.length; i++) {
		  if (form.date[i].checked=="1") {
			date1 = form.date[i].value;
		  }
	}

	var generalPrefix = 'http://geomag.gcras.ru/intermagnet-webapp/' + servletName + '?station=' + station + param;

	if (servletName.search('Abs') == -1) { // if we request table data, then we need table name
			for (var i=0; i<form.table.length; i++) {
			  if (form.table[i].checked=="1") {
				table = form.table[i].value;
	  		  }
			}
		generalPrefix = generalPrefix + '&table=' + table;
	}

	if (servletName.search('Chart') != -1) { // if we plot, then we nee image size param
		generalPrefix = generalPrefix + '&width=' + form.img_w.value + '&height=' + form.img_h.value;
	}
	var res = new Array(2);
	if (date1 == "sel_date") {
		date1 = form.timeFrom_y.value+'-'+form.timeFrom_mo.value+'-'+form.timeFrom_d.value+'T'+form.timeFrom_h.value+':'+form.timeFrom_mi.value+':'+form.timeFrom_s.value;
		date2 = form.timeTo_y.value+'-'+form.timeTo_mo.value+'-'+form.timeTo_d.value+'T'+form.timeTo_h.value+':'+form.timeTo_mi.value+':'+form.timeTo_s.value;
		res[0] = generalPrefix + '&timeFrom=' + date1 + '&timeTo=' + date2;
	}
	else {
		res[0] = generalPrefix + '&' + date1;
	}
	res[1] = station+'_'+date1+'_'+servletName;
	return res;
}

function generateRequestSat (formName, servletName)
{
	form = document.forms[formName];
	
	var param = "type=" + form.type.value;
	if (form.type.value == "obs") {
		param = "type=near";
	}
	
	for (var i=0; i<form.satellite.length; i++) {
		  if (form.satellite[i].checked=="1") {
			sat = form.satellite[i].value;
		  }
	}
	param = param + "&satellite="+sat;
	
	param = param + "&intTimeType=" + form.intTimeType.value + "&intTimeFrom=" + form.intTimeFrom_h.value+':'+form.intTimeFrom_mi.value+':'+form.intTimeFrom_s.value + "&intTimeTo=" + form.intTimeTo_h.value+':'+form.intTimeTo_mi.value+':'+form.intTimeTo_s.value;
	
	date1 = form.timeFrom_y.value+'-'+form.timeFrom_mo.value+'-'+form.timeFrom_d.value+'T'+form.timeFrom_h.value+':'+form.timeFrom_mi.value+':'+form.timeFrom_s.value;
	date2 = form.timeTo_y.value+'-'+form.timeTo_mo.value+'-'+form.timeTo_d.value+'T'+form.timeTo_h.value+':'+form.timeTo_mi.value+':'+form.timeTo_s.value;	
	
	if (form.type.value == "obs") {
		// selection by observatory/vicinity
		param = param + "&obs=" + form.sel_obs.value;
		param = param + "&latDist=" + form.rad.value + "&lonDist=" + form.rad.value; 	
	}
	else {
		// selection by region
		param = param + "&latFrom=" + form.latFrom.value + "&latTo=" + form.latTo.value + "&lonFrom=" + form.lonFrom.value + "&lonTo=" + form.lonTo.value;
	}

	var generalPrefix = 'http://geomag.gcras.ru/intermagnet-webapp/' + servletName + '?' + param + '&extTimeFrom=' + date1 + '&extTimeTo=' + date2;

	var res = new Array(2);
	res[0] = generalPrefix;
	res[1] = 'swarm-' + sat +'_' + date1 + '_' + servletName;
	return res;
}

function generateRequestExt (formName, servletName)
{
	form = document.forms[formName];
	
	var param = "type=" + form.type.value + "&indTypes=";
	var paramAdd1 = "&timeRes=";
	var paramAdd2 = "&grades=";
	
	for (var i=0; i<form.indTypes.length; i++) {
		if (form.indTypes[i].checked=="1") {
			param = param + form.indTypes[i].value + ";";
			paramAdd1 = paramAdd1 + form.timeRes[i].value + ";";
			paramAdd2 = paramAdd2 + form.grades[i].value + ";";
		}
	}
	
	param = param + paramAdd1 + paramAdd2;
	
	if (form.type.value == "obs") {
		// selection by observatory/vicinity
		param = param + "&obs=" + form.sel_obs.value;
		preFile = form.sel_obs.value;
	}
	else {
		// selection by region
		param = param + "&latFrom=" + form.latFrom.value + "&latTo=" + form.latTo.value + "&lonFrom=" + form.lonFrom.value + "&lonTo=" + form.lonTo.value;
		preFile = form.type.value;
	}

	var generalPrefix = 'http://geomag.gcras.ru/intermagnet-webapp/' + servletName + '?' + param;
	
	var res = new Array(2);
	
	for (var i=0; i<form.date.length; i++) {
		  if (form.date[i].checked=="1") {
			date1 = form.date[i].value;
		  }
	}
	if (date1 == "sel_date") {
		date1 = form.timeFrom_y.value+'-'+form.timeFrom_mo.value+'-'+form.timeFrom_d.value+'T'+form.timeFrom_h.value+':'+form.timeFrom_mi.value+':'+form.timeFrom_s.value;
		date2 = form.timeTo_y.value+'-'+form.timeTo_mo.value+'-'+form.timeTo_d.value+'T'+form.timeTo_h.value+':'+form.timeTo_mi.value+':'+form.timeTo_s.value;
		res[0] = generalPrefix + '&timeFrom=' + date1 + '&timeTo=' + date2;
	}
	else {
		res[0] = generalPrefix + '&' + date1;
	}
	res[1] = preFile +'_' + date1 + '_' + servletName;
	return res;
}




function generateRequestExtPlot (formName, servletName)
{

	form = document.forms[formName];

	station=form.sel_obs.value; 	

	if (station=="MOS") {
		station="";
	}
	
	for (var i=0; i<form.date.length; i++) {
		  if (form.date[i].checked=="1") {
			date1 = form.date[i].value;
		  }
	}

	var comps2plot = [false, false, false, false];
	var compNames = ['v1', 'v2', 'v3', 'f'];
	
	var param = "";
	if (form.ini.checked=="1") {
		for (var i=0; i<form.comp.length; i++) {
			switch (form.comp[i].value) {
  				case compNames[0]:
					comps2plot[0]=true;
    				break;
  				case compNames[1]:
    				comps2plot[1]=true;
    				break;
  				case compNames[2]:
    				comps2plot[2]=true;
    				break;
  				case compNames[3]:
    				comps2plot[3]=true;
    				break;
			}
		}
		for (var i=0; i<comps2plot.length; i++) { 
		   if (comps2plot[i]==true) {
			   param = param + compNames[i] + ";";
			}
		}
	}
	
	for (var i=0; i<form.indTypes.length; i++) {
		if (form.indTypes[i].checked=="1") {
			if (form.comp[i]==null) { // if indicator does not require component, e.g., K-index
			  comp_value = "a";
			}
			else {
			  comp_value = form.comp[i].value;
			}
			param = param + form.indTypes[i].value + "_" + form.timeRes[i].value + "_" + comp_value + ";";
		}
	}

	var generalPrefix = 'http://geomag.gcras.ru/intermagnet-webapp/' + servletName + '?station=' + station + "&param=" + param;
	generalPrefix = generalPrefix + '&table=' + 'pre_min';
	generalPrefix = generalPrefix + '&width=' + form.img_w.value + '&height=' + form.img_h.value;

	var res = new Array(2);
	if (date1 == "sel_date") {
		date1 = form.timeFrom_y.value+'-'+form.timeFrom_mo.value+'-'+form.timeFrom_d.value+'T'+form.timeFrom_h.value+':'+form.timeFrom_mi.value+':'+form.timeFrom_s.value;
		date2 = form.timeTo_y.value+'-'+form.timeTo_mo.value+'-'+form.timeTo_d.value+'T'+form.timeTo_h.value+':'+form.timeTo_mi.value+':'+form.timeTo_s.value;
		res[0] = generalPrefix + '&timeFrom=' + date1 + '&timeTo=' + date2;
	}
	else {
		res[0] = generalPrefix + '&' + date1;
	}
	res[1] = station+'_'+date1+'_'+servletName;
	return res;
}





function changeDateIntervalURL (prevURL, newYear, newMonth, newDay) {
	// 134 SYMBOLS: http://hera.gcras.ru:8080/intermagnet-webapp/IntermagnetCombinedChart?width=300&height=260&table=pre_min&station=ARS&param=v1;v2;v3;f& 
	
	if (prevURL.includes("station=MOS")) {
		return (prevURL);
	}
	
	var dateInterval = "timeFrom=" + newYear + "-" + newMonth + "-" + newDay + "T00:00:00&timeTo=" + newYear + "-" + newMonth + "-" + newDay + "T23:59:59";
	return (prevURL.substr(0, 134) + dateInterval);
}

function updateDailyMagnetograms (formName) {
	form = document.forms[formName];
	
	var imgID = 'obs01i';
    var aID =   'obs01a';
	var i = 1;
	
	while(document.getElementById(imgID)!=null) {
//		alert('imgID='+imgID+"; aID="+aID);
		document.getElementById(imgID).src  = changeDateIntervalURL (document.getElementById(imgID).src, form.time_y.value, form.time_m.value, form.time_d.value);
		document.getElementById(aID).href   = changeDateIntervalURL (document.getElementById(aID).href, form.time_y.value, form.time_m.value, form.time_d.value);
		i = i + 1;
		if (i > 9) {
			imgID = 'obs' + i + 'i';
			aID   = 'obs' + i + 'a';
		}
		else {
			imgID = 'obs0' + i + 'i';
			aID   = 'obs0' + i + 'a';

		}
	}
}

function insertDate () {
	//form = document.forms[formName];
	dt = new Date();
	document.getElementById('time_y').value = dt.getFullYear();
	//form.time_y.value = dt.getFullYear();
	if (dt.getMonth() + 1 > 9) {
		document.getElementById('time_m').value = dt.getMonth() + 1;
		//form.time_m.value = dt.getMonth() + 1;
	}
	else {
		document.getElementById('time_m').value = "0" + (dt.getMonth() + 1);
		//form.time_m.value = "0" + (dt.getMonth() + 1);
	}
	if (dt.getDate() > 9) {
		document.getElementById('time_d').value = dt.getDate();
		//form.time_d.value = dt.getDate();
	}
	else {
		document.getElementById('time_d').value = "0" + dt.getDate();
		//form.time_d.value = "0" + dt.getDate();
	}
}
			