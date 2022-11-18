

			var prefix_l='cb_sel_';
			var prefix_r='cb_sel_r_';
		
			function CopyTable() 
			{
				//var body = document.body, 
				var range, sel;
				if (document.createRange && window.getSelection) {
					range = document.createRange();
					sel = window.getSelection();
					sel.removeAllRanges();
					try {
						var table_stat_full = document.getElementById("table_stat_full");	
						
						var max_count = 0;
						for(sel_idx=0;sel_idx<table_stat_full.querySelectorAll('table.tbl_selection').length;sel_idx++)	
						{
							var table_stat = table_stat_full.querySelectorAll('table.tbl_selection')[sel_idx];
							var three_lng = table_stat.querySelectorAll("tr.tr_pl_1").length + table_stat.querySelectorAll("tr.tr_pl_2").length +table_stat.querySelectorAll("tr.tr_pl_3").length;
							if(three_lng > max_count)
								max_count = three_lng;
						}					
						
						var the_table = document.createElement('table');
						the_table.setAttribute("id","temp_table");

						for(row_idx=0;row_idx<=max_count;row_idx++)	
						{
							var tr_cloned = document.createElement('tr');
							for(tbl_idx=0;tbl_idx<table_stat_full.querySelectorAll('table.tbl_selection').length;tbl_idx++)	
							{
								var table_stat = table_stat_full.querySelectorAll('table.tbl_selection')[tbl_idx];
								var tr_obj = table_stat.querySelectorAll("tr")[row_idx];
								if(tr_obj.classList.contains("tr_pl_1") || tr_obj.classList.contains("tr_pl_2") || tr_obj.classList.contains("tr_pl_3"))
								{
									//var tr_cloned = table_stat.childNodes[tr_idx].cloneNode();								
								
									for(td_idx=1; td_idx<tr_obj.childNodes.length-1; td_idx++)
									{
										var cloned_td = tr_obj.childNodes[td_idx].cloneNode(true);
										tr_cloned.appendChild(cloned_td);	
																	
									}

									the_table.appendChild(tr_cloned);
								}
								else
								{
									for(td_idx=1; td_idx<tr_obj.childNodes.length-1; td_idx++)
									{
										var cloned_td = document.createElement('td');
										tr_cloned.appendChild(cloned_td);	
																	
									}
								}
								var cloned_td = document.createElement('td');
								tr_cloned.appendChild(cloned_td);	
							}
						}	
						
						document.getElementById("div_stat").appendChild(the_table);						
						
						range = document.createRange();
						range.selectNode(the_table);					
						sel.addRange(range);
						
						document.execCommand("Copy");
						
						document.getElementById("div_stat").removeChild(document.getElementById("temp_table"));
						
					} catch (e) {
					/*	range.selectNode(el);
						sel.addRange(range);*/
					}
				} else if (body.createTextRange) {
				/*	range = body.createTextRange();
					range.moveToElementText(el);
					range.select();*/
				}
				
			}
		
			function getRandomInt(max) {
			  return Math.floor(Math.random() * (max+1));
			}
			
			function getExRandInt(max,max_curr)
			{
				var val = 0;
				var max_i=0;
				while(max_i==0)
				{
					max_i = getRandomInt(max_curr);
				}
				for(i=0;i<=max_i;i++)
				{
					val = getRandomInt(max);
				}
				return val;
			}
			
			function random_mixed_array(arr_src)
			{
				var arr_dst = new Array();
				var arr_cloned = arrayClone(arr_src);
				var lng_first = arr_src.length;
				for(i=0;i<lng_first;i++)
				{
					var idx = getRandomInt(arr_cloned.length-1);
					arr_dst.push(arr_cloned[idx]);
					arr_cloned.splice(idx,1);
					
				}
				return arr_dst;
			}
			
			function build_map_sorted(_map,_obj)
			{
				var keylist = Array.from(_map.keys());
				Object.getOwnPropertyNames(_obj).forEach(function (prop) 
					{
					  delete _obj[prop];
					}
				);
				var _length = keylist.length;
				for(var j=0;j<_length;j++)
				{
					var max = 0;
					var max_key = "";
					var max_idx = 0;
					for(var i=0;i<keylist.length;i++)
					{
						if(_map.get(keylist[i])>max)
						{							
							max = _map.get(keylist[i]);
							max_key = keylist[i];
							max_idx = i;							
						}
					}
					
					_obj[max_key] = max;
					keylist.splice(max_idx, 1); 
				}
			}
			
			function sort_map(_map) 
			{
				var new_map = new Map();
				var keylist = Array.from(_map.keys());
				var _length = keylist.length;
				for(var j=0;j<_length;j++)
				{
					var max = 0;
					var max_key = "";
					var max_idx = 0;
					for(var i=0;i<keylist.length;i++)
					{
						if(_map.get(keylist[i])>max)
						{
							max = _map.get(keylist[i]);
							max_key = keylist[i];
							max_idx = i;
						}
					}
					
					new_map.set(max_key, max);
					keylist.splice(max_idx, 1); 
				}
				
				return new_map;
			}
			
			function set_by_cb_sels(_tmode)
			{
				var arr = new Array();
				document.querySelectorAll('table#table_select  input[type="checkbox"]').forEach(
					function(cb)
					{
						if(cb.checked)
						{
							arr.push(cb.getAttribute('value'));
						}						
					}
				);	
				return arr;
			}
			
			function arrayClone(arr) 
			{
				var i, copy;
				
				if (Array.isArray(arr)) 
				{
					copy = arr.slice(0);
					for (i = 0; i < copy.length; i++) 
					{
						copy[i] = arrayClone(copy[i]);
					}
					return copy;
				} 
				else if (typeof arr === 'object') 
				{
					throw 'Cannot clone array containing an object!';
				} 
				else 
				{
					return arr;
				}
			}
			
			var ctr = 0;
			var h_stat = new Map();
			var last_idx = -1;
			var item_list = null;
			var ref_mode = false;
			var tmode = null;
			var rmode = null;
			var sharp_sets = true;
			var selection_list = Array();
/* Класс счетчик */
			var CounterObj= new Counter();

			function Counter()
			{
				this.ctrlist = new Map();
			}

			Counter.prototype.add = function(str, count)
			{
				if(this.ctrlist.get(str)==undefined) this.ctrlist.set(str,count);
				else this.ctrlist.set(str,this.ctrlist.get(str) + count);
			}

			Counter.prototype.clear = function()
			{
				this.ctrlist = new Map();
				this.out();
				document.getElementById("leg_counter").style.display='none';
				//Array.from(sorted.keys());
			}

			Counter.prototype.trashman = function(_map_array)
			{
				var s_keys = Array.from(this.ctrlist.keys());
				for(j=0; j<s_keys.length; j++)
				{
					var cnt = 0;
					for(idx_map=0;idx_map<_map_array.length;idx_map++)
					{
						if(_map_array[idx_map][s_keys[j]]==undefined)
						{
							cnt++;
						}
					}
					if(cnt==3)
						this.remove(s_keys[j]);
				}
			}

			Counter.prototype.add_map = function(_map)
			{
				var keylist = Object.keys(_map);
				for(i=0; i<keylist.length; i++)
				{
					this.add(keylist[i],_map[keylist[i]]);
				}
			}

			Counter.prototype.remove = function(str)
			{
				this.ctrlist.delete(str);
				this.out();
			}

			Counter.prototype.out = function()
			{
				var sorted = sort_map(this.ctrlist);
				var s_keys = Array.from(sorted.keys());
				var ctr_table = document.getElementById("ctr_table");
				if(tmode=="refs")
				{
					ctr_table.innerHTML = "<tr><th></th><th></th><th>Очков</th></tr>";	
				}
				else
				{
					ctr_table.innerHTML = "<tr><th></th><th>Очков</th></tr>";
				}
				for(i=0;i<s_keys.length;i++)
				{
					var tr_item = document.createElement('tr');
					var td_name = document.createElement('td');					

					if(tmode=="refs")
					{
						var td_a = document.createElement('td');
						var obj_a = document.createElement('a');
						obj_a.textContent = s_keys[i];
						obj_a.setAttribute('href',s_keys[i]);
						obj_a.setAttribute('target','vkwin');
						td_a.appendChild(obj_a);
						
						tr_item.appendChild(td_a);

						td_name.textContent = reflist[s_keys[i]];
					}
					else
					{
						td_name.textContent = s_keys[i];					
					}

					tr_item.appendChild(td_name);

					var td_score = document.createElement('td');
					td_score.textContent = sorted.get(s_keys[i]);

					tr_item.appendChild(td_score);

					td_btn = document.createElement('td');
					btn_remove = document.createElement('button');
					btn_remove.textContent = "x";
					btn_remove.setAttribute('ctrvalue',s_keys[i]);
					btn_remove.onclick = function()
					{
					   CounterObj.remove(this.getAttribute('ctrvalue'));
					}
					td_btn.appendChild(btn_remove);

					tr_item.appendChild(td_btn);

					ctr_table.appendChild(tr_item);
				}
			}

			Counter.prototype.show_hide = function()
			{
				if(document.getElementById("leg_counter").style.display=='none')
				{
					document.getElementById("leg_counter").style.display='block';
					this.out();
				}
				else
				{
					document.getElementById("leg_counter").style.display='none';
				}
			}

			var Selection = function()
			{
				this.h_stat = new Map();
				this.items = new Object();
			}

			Selection.prototype.get_leaders_count = function()
			{
				var keylist = Object.keys(this.items);// Array.from(sorted.keys());
				var old_val = 0;
				var count = 0;
				for(var i=0;i<keylist.length;i++)
				{
					if((count>0)&&(this.items[keylist[i]]!=old_val))
					{
						return count;
					}
					else
					{
						count++;
						old_val = this.items[keylist[i]];
					}
				}
				return count;
			}

			var totalizator = function ()
			{
				this.item_list = Array();
				//this.h_stat = new Map();
			}

			totalizator.prototype.build_item_list = function()
			{
				var sel_list = document.querySelector('input#use_cb_list').checked;
				switch(rmode)
				{
					case 'names': 
							if(sel_list)
								this.item_list = set_by_cb_sels(tmode);
							else 
								this.item_list = random_mixed_array(namelist);
						break;
					case 'pop_names': 
							if(sel_list)
								this.item_list = set_by_cb_sels(tmode);
							else
								this.item_list = random_mixed_array(pop_namelist);
						break;
					case 'refs': 
							if(sel_list)
								this.item_list = set_by_cb_sels(tmode);
							else
								this.item_list = random_mixed_array(Object.keys(reflist));
						break;				
				}
			}

			totalizator.prototype.run = function()
			{
				document.getElementById("btn_go").disabled = true;

				ctr = 0;
				
				
				// show animation wheel
				document.getElementById("div_stat").style.display = "none";
				document.getElementById("div_load").style.display = "block";
				document.getElementById("toolbar_stat").style.display = "none";

				var count_to_run = parseInt(document.getElementById("run_count").getAttribute("value"));
								
				rmode = document.querySelector('input[name="rb_action"]:checked').value;		
				
				this.build_item_list();
				
				if(this.item_list.length==0)
				{
					alert("Не выбрано ни одного элемента");
					this.close_animation(false);
					return;
				}

				if(this.item_list.length==1)
				{
					alert("Выберите хотя бы два элемента");
					this.close_animation(false);
					return;
				}				
				
				var sharp_sets = document.getElementById("sharp_sets").checked;
				 
				var sel_cnt = 1;
				if(document.getElementById("many_sel").checked)
					sel_cnt = document.getElementById("sel_count").value;

				reset_stat();

				selection_list = Array();
				for(sel_idx = 0; sel_idx<sel_cnt; sel_idx++)
				{
					//h_stat = new Map();
					this.item_list = random_mixed_array(this.item_list);

					var selection = new Selection();
					if(sharp_sets)
					{	
						leader_count = 0;
						
						do
						{
							//h_stat = new Map();
							selection =  new Selection();
							
							this.one_iteration(selection, count_to_run);
							leader_count = selection.get_leaders_count();
							
						}
						while(leader_count!=1)
						
					}
					else
					{
						//var selection = new Object();
						this.one_iteration(selection, count_to_run);
						//animate_draw(selection);
					}
					selection_list.push(selection);
					
					CounterObj.add_map(selection);
				}

				CounterObj.trashman(selection_list);
							
				var that = this;
				setTimeout(function(){
					for(sel_idx = 0; sel_idx<sel_cnt; sel_idx++)
						{
							that.animate_draw(selection_list[sel_idx], sel_idx);
						}
					
					that.close_animation(true);
					CounterObj.out();
				},1000);

			}

			totalizator.prototype.close_animation = function(success)
			{
				document.getElementById("div_load").style.display = "none";
				document.getElementById("div_stat").style.display = "block";
				if(success)
				{
					document.getElementById("toolbar_stat").style.display = "block";
				}
				document.getElementById("btn_go").disabled = false;
			}

			totalizator.prototype.run_one = function(selection)
			{						
				curr_idx = -1;
				do 
				{				
					curr_idx = getExRandInt(this.item_list.length-1,10);
				}
				while (last_idx==curr_idx);
				
				var the_name = this.item_list[curr_idx];

				if(selection.h_stat.get(the_name)==undefined) selection.h_stat.set(the_name,1);
				else selection.h_stat.set(the_name, selection.h_stat.get(the_name)+1);							

				ctr++;

				build_map_sorted(selection.h_stat,selection.items);
								
			}

			totalizator.prototype.one_iteration = function(selection, count_to_run)
			{				
				//reset_stat();
								
				//var sorted = null;
				for(var _i=0;_i<count_to_run; _i++)
				{
					//sorted = 
					this.run_one(selection);
								
				}
				
				//return sorted;
			}

			totalizator.prototype.animate_draw = function(sorted, sel_idx)
			{
			//	reset_stat();

				var keylist = Object.keys(sorted.items);// Array.from(sorted.keys());
				
				var table_stat_full = document.getElementById("table_stat_full");			
				var tr_stat = table_stat_full.childNodes[0].childNodes[0];// document.getElementById("tr_stat");	
				var td_table = document.createElement('td');	
				td_table.setAttribute("valign","top");
				tr_stat.appendChild(td_table);		
				var table_stat = document.createElement('table');
				table_stat.setAttribute("class","tbl_selection");

				if(tmode=='refs')
				{
					table_stat.innerHTML = "<tr><th>Ссылка</th><th>Процент</th></tr>";
				}
				else
				{
					table_stat.innerHTML = "<tr><th>Имя</th><th>Процент</th></tr>";		
				}

				td_table.appendChild(table_stat);	
			//	console.log(keylist);
				var pl = 1;
				var old_proc = 0;
				for(var i=0;i<keylist.length;i++)
				{
					
					var procent = sorted.h_stat.get(keylist[i]) * 100/ctr;
					if(pl<4)
					{
						if(procent<old_proc) pl++;						
					}
					
					var the_id = null;
					
					switch(rmode)
					{
						case 'names': 
								the_id = namelist.indexOf(keylist[i]);
							break;
						case 'pop_names': 
								the_id = pop_namelist.indexOf(keylist[i]);
							break;
						case 'refs': 
								ref_keys = Object.keys(reflist);
								the_id = ref_keys.indexOf(keylist[i]);
							break;				
					}
					
					var r_id = null;
					
					switch(rmode)
					{
						case 'names': 
						case 'pop_names':
								r_id = namelist.indexOf(keylist[i]);
							break;
						case 'refs': 
								r_id = namelist.indexOf(reflist[keylist[i]]);
							break;				
					}
					
					var l_id = null;
					
					switch(rmode)
					{
						case 'names': 
								l_id = namelist.indexOf(keylist[i]);
								name_id = namelist.indexOf(keylist[i]);
							break;
						case 'pop_names': 
								//r_id = namelist.indexOf(keylist[i]);
								l_id = pop_namelist.indexOf(keylist[i]);
								name_id = namelist.indexOf(keylist[i]);
							break;
						case 'refs': 
								l_id = ref_keys.indexOf(keylist[i]);;
								name_id = namelist.indexOf(reflist[keylist[i]]);
							break;				
					}

					var _className = "pl_"+pl;
					var _className_tr = "tr_pl_"+pl;
					if(rmode=='refs')
					{
						var the_tr = document.createElement('tr');
						the_tr.className =  _className_tr;	
						
						var td_ref = document.createElement('td');
						td_ref.className = _className;
							
						var the_a = document.createElement('a');
						var ref = keylist[i];
						the_a.textContent = ref;
						the_a.setAttribute("href",ref);
						the_a.setAttribute("target","ref_win");
						td_ref.appendChild(the_a);
							
						var td_name = document.createElement('td');
						td_name.textContent = reflist[ref];
						td_name.className = _className;
							
						var td_proc = document.createElement('td');
						td_proc.textContent = procent.toFixed(2).replace(/\./,',');
						td_proc.className = _className;
						
						var td_btn1 = document.createElement('td');
						td_btn1.className = _className;
						var btn_1 = document.createElement('button');
												
						
						btn_1.setAttribute("onclick","mark_left("+the_id+", this)");
						btn_1.setAttribute("iid",l_id);
						btn_1.setAttribute("name_id",name_id);
						btn_1.setAttribute("class","btn_left");
						
						draw_btn_left(btn_1);
						
						td_btn1.appendChild(btn_1);
							
						var td_btn2 = document.createElement('td');
						td_btn2.className = _className;
						var btn_r = document.createElement('button');
						
						btn_r.setAttribute("onclick","mark_right("+r_id+", this)");
						btn_r.setAttribute("class","btn_right");
						btn_r.setAttribute("rid",r_id);
						td_btn2.appendChild(btn_r);
						draw_btn_right(btn_r);
						
						the_tr.appendChild(td_btn1);
						the_tr.appendChild(td_ref);
						the_tr.appendChild(td_name);
						the_tr.appendChild(td_proc);
						the_tr.appendChild(td_btn2);
						table_stat.appendChild(the_tr);
					}					
					else
					{
						var the_tr = document.createElement('tr');
						the_tr.className =  _className_tr;	
						
						var td_name = document.createElement('td');
						td_name.className = _className;
						td_name.textContent = keylist[i];
						var td_proc = document.createElement('td');
						td_proc.className = _className;						
						td_proc.textContent = procent.toFixed(2).replace(/\./,',');
							
						var td_btn1 = document.createElement('td');
						td_btn1.className = _className;
						var btn_1 = document.createElement('button');
						//btn_1.textContent = "Отметить слева";
						btn_1.setAttribute("onclick","mark_left("+ the_id +", this)");
						btn_1.setAttribute("iid",r_id);
						btn_1.setAttribute("name_id",name_id);
						btn_1.setAttribute("class","btn_left");
						td_btn1.appendChild(btn_1);	
						
						draw_btn_left(btn_1);
							
						var td_btn2 = document.createElement('td');
						td_btn2.className = _className;
						var btn_r = document.createElement('button');
						
						var r_sel_ch = document.getElementById(prefix_r+r_id);
																		
						btn_r.setAttribute("onclick","mark_right("+ r_id+", this)");
						btn_r.setAttribute("class","btn_right");
						btn_r.setAttribute("rid",r_id);
						td_btn2.appendChild(btn_r);
						
						draw_btn_right(btn_r);
							
						the_tr.appendChild(td_btn1);
						the_tr.appendChild(td_name);
						the_tr.appendChild(td_proc);
						the_tr.appendChild(td_btn2);
						table_stat.appendChild(the_tr);					
					}
					
					old_proc = procent;
				}
			
			}
				
			
			var Totalizator = new totalizator();
			function run_it()
			{
				Totalizator.run();
			}


			
			function reset_stat()
			{
				var table_stat_full = document.getElementById("table_stat_full");
				
				table_stat_full.innerHTML = "<tr></tr>";
				
				
			//	document.getElementById("stat").style.display = 'none';
				table_stat_full.style.display = 'block';
			}
			
						

			function draw_btn_right_off(btn_obj)	
			{
				btn_obj.textContent = "->";	
				btn_obj.classList.remove("btn_right_on");
				btn_obj.classList.add("btn_right_off");
				btn_obj.setAttribute("title","Выбрать справа");
			}

			function draw_btn_right_on(btn_obj)	
			{
				btn_obj.textContent = "->";
				btn_obj.classList.remove("btn_right_off");
				btn_obj.classList.add("btn_right_on");
				btn_obj.setAttribute("title","Сбросить слева");
			}
			
			function draw_btn_right(btn_obj)
			{
				if(btn_obj!=null)
				{
					r_id = btn_obj.getAttribute('rid');
					if(document.querySelectorAll('#earn_items input[name_id="'+r_id+'"][type="checkbox"]')!=null)
					{
						if(document.querySelectorAll('#earn_items input[name_id="'+r_id+'"][type="checkbox"]').length>0)
						{
							if(document.querySelectorAll('#earn_items input[name_id="'+r_id+'"][type="checkbox"]')[0].checked)
							{
								draw_btn_right_on(btn_obj);//btn_obj.textContent = "Сбросить справа";
							}
							else
							{
								draw_btn_right_off(btn_obj);//btn_obj.textContent = "Отметить справа";
							}	
						}
					}
					else draw_btn_right_off(btn_obj);//btn_obj.textContent = "Отметить справа";		
				}	
				else draw_btn_right_off(btn_obj);//btn_obj.textContent = "Отметить справа";

				var _count = document.querySelectorAll('#earn_items input[type="checkbox"]:checked').length;
				if(_count)
				{
					document.getElementById("right_sel_count").innerHTML = "Выбрано "+_count + " галочек";
				}
				else
				{
					document.getElementById("right_sel_count").innerHTML = "";
				}
			}
			
			function draw_btn_left_off(btn_obj)	
			{
				btn_obj.textContent = "<-";	
				btn_obj.classList.remove("btn_left_on");
				btn_obj.classList.add("btn_left_off");
				btn_obj.setAttribute("title","Выбрать слева");
			}

			function draw_btn_left_on(btn_obj)	
			{
				btn_obj.textContent = "<-";
				btn_obj.classList.remove("btn_left_off");
				btn_obj.classList.add("btn_left_on");
				btn_obj.setAttribute("title","Сбросить слева");
			}

			

			function draw_btn_left(btn_obj)
			{
				if(btn_obj!=null)
				{
					
					switch (rmode) 
					{
						case 'names': 
						case 'pop_names':
							name_id = btn_obj.getAttribute('name_id');
							if(document.querySelectorAll('#fs_ts input[name_id="'+name_id+'"][type="checkbox"]')!=null)
							{
								if(document.querySelectorAll('#fs_ts input[name_id="'+name_id+'"][type="checkbox"]').length>0)
								{
									if(document.querySelectorAll('#fs_ts input[name_id="'+name_id+'"][type="checkbox"]')[0].checked)
									{
										draw_btn_left_on(btn_obj);
									}
									else
									{
										draw_btn_left_off(btn_obj);
									}	
								}
								else
									draw_btn_left_off(btn_obj);
							}	
							else
								draw_btn_left_off(btn_obj);
							break;
						case 'refs': 
						
								switch(tmode)
								{
									case 'names':
									case 'pop_names':
										name_id = btn_obj.getAttribute('name_id');
										if(document.querySelectorAll('#fs_ts input[name_id="'+name_id+'"][type="checkbox"]')!=null)
										{
											if(document.querySelectorAll('#fs_ts input[name_id="'+name_id+'"][type="checkbox"]').length>0)
											{
												if(document.querySelectorAll('#fs_ts input[name_id="'+name_id+'"][type="checkbox"]')[0].checked)
												{
													draw_btn_left_on(btn_obj);//btn_obj.textContent = "Сбросить слева";
												}
												else
												{
													draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
												}	
											}
											else
												draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
										}	
										else
											draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
										break;
									case 'refs':
											iid = btn_obj.getAttribute('iid');
											if(document.querySelectorAll('#fs_ts input[iid="'+iid+'"][type="checkbox"]')!=null)
											{
												if(document.querySelectorAll('#fs_ts input[iid="'+iid+'"][type="checkbox"]').length>0)
												{
													if(document.querySelectorAll('#fs_ts input[iid="'+iid+'"][type="checkbox"]')[0].checked)
													{
														draw_btn_left_on(btn_obj);//btn_obj.textContent = "Сбросить слева";
													}
													else
													{
														draw_btn_left_off(btn_obj);//draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
													}	
												}
												else
													draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
											}	
											else
												draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
										break;
								}
							break;	
					}
					
					
				}				
				var _count = document.querySelectorAll('#fs_ts input[type="checkbox"]:checked').length;
				if(_count)
				{
					document.getElementById("left_sel_count").innerHTML = "Выбрано "+_count + " галочек";
				}
				else
				{
					document.getElementById("left_sel_count").innerHTML = "";
				}
			}
			
			
				
			

			function mark_top_3_left()
			{
				clear_table_sel();
				var btns_l_list = document.querySelectorAll('table.tbl_selection td.pl_1 button.btn_left, table.tbl_selection td.pl_2 button.btn_left, table.tbl_selection td.pl_3 button.btn_left');
				for(var _i=0;_i<btns_l_list.length;_i++)
				{
					mark_left(btns_l_list[_i].getAttribute("iid"), btns_l_list[_i], true);
				}
			}
			
			function mark_left(_id, btn_obj, bool_val=null)
			{
				//document.getElementById('cb_sel_'+_id).checked = true;
			//	var r_mode = document.querySelector('input[name="rb_action"]:checked').value;
				var obj_l_btns = null;
				switch (tmode)
				{
					case 'names':
						switch (rmode)
						{
							case 'names':
							case 'pop_names':
							case 'refs':
									var name_id = btn_obj.getAttribute("name_id");

									if(document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]')==null)
									{
										
										break;
									}				
									
									if(bool_val==null)
										document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]').checked = !document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]').checked;
									else
										document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]').checked = bool_val;
									
									obj_l_btns = document.querySelectorAll('button.btn_left[name_id="'+name_id+'"]');// document.getElementById(prefix_l + iid);
								break;																			
						}
						break;
					case 'pop_names':
						switch (rmode)
						{
							case 'names':
							case 'pop_names':
							case 'refs':
									var name_id = btn_obj.getAttribute("name_id");
									
									if(document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]')==null)
									{
										
										break;
									}
									if(bool_val==null)
										document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]').checked = !document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]').checked;
									else
										document.querySelector('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]').checked = bool_val;
								
									obj_l_btns = document.querySelectorAll('button.btn_left[name_id="'+name_id+'"]');// document.getElementById(prefix_l + iid);
								break;																			
						}
						break;
					case 'refs':
						{
							var iid = btn_obj.getAttribute("iid");
							var name_id = btn_obj.getAttribute("name_id");
							switch (rmode)
							{
								case 'names':
								case 'pop_names':
										
										
										var cbs = document.querySelectorAll('#fs_ts input[type="checkbox"][name_id="'+name_id+'"]');
										for(var _i=0;_i<cbs.length;_i++)
										{
											if(bool_val==null)
												cbs[_i].checked = !cbs[_i].checked;
											else
												cbs[_i].checked = bool_val;
										}
										
										obj_l_btns = document.querySelectorAll('button.btn_left[name_id="'+name_id+'"]');// document.getElementById(prefix_l + iid);
									break;
								case 'refs':
										if(bool_val==null)
											document.querySelector('#fs_ts input[type="checkbox"][iid="'+iid+'"]').checked = !document.querySelector('#fs_ts input[type="checkbox"][iid="'+iid+'"]').checked;
										else
											document.querySelector('#fs_ts input[type="checkbox"][iid="'+iid+'"]').checked = bool_val;
										obj_l_btns = Array(); 
										//obj_l_btns.push(btn_obj);
										obj_l_btns = document.querySelectorAll('button.btn_left[iid="'+iid+'"]');// 
									break;								
							}
						}
						break;
					
				}
				
				if(obj_l_btns!=null)
				{	
					for(var _i=0;_i<obj_l_btns.length;_i++)
					{
						draw_btn_left(obj_l_btns[_i]);
					}
				}
			
			}
			
			function mark_right(_id, _btn_obj)
			{
				var rb = document.getElementById(prefix_r+_id);
				if(rb!=null)
				{
					rb.checked = !rb.checked;
					var btns = document.querySelectorAll("table.tbl_selection button.btn_right[rid='"+_id+"']");
					for(var _idx=0; _idx<btns.length; _idx++)
					{
						draw_btn_right(btns[_idx]);
					}
					
				}
			}
			
			var earn_map = new Map();
			
			function earn()
			{
				earn_map = new Map();
				var earn_stat = document.getElementById("earn_stat");
				
				var earn_items = document.getElementById("earn_items");
				for(var i=0;i<earn_items.childNodes.length;i++)
				{
					var the_tr = earn_items.childNodes[i];
					var cb = the_tr.childNodes[0].childNodes[0];
					if(cb.checked)
					{
						earn_map.set(cb.getAttribute("value"), 0);
					}
				}
				
				var keylist = Array.from(earn_map.keys());
				var summ = 0;
				
				var nl_clone = random_mixed_array(arrayClone(namelist));
				for(var i=0;i<keylist.length;i++)
				{
					var ctr = 0;
					var rand_girl = null;
					while(rand_girl!=keylist[i])
					{
						curr_idx = getExRandInt(nl_clone.length-1,10);
						rand_girl = nl_clone[curr_idx];
						ctr++;
					}	
					earn_map.set(keylist[i],ctr);
					summ+=ctr;					
				}
				
				for(var i=0;i<keylist.length;i++)
				{
					var procent = 100 - earn_map.get(keylist[i])*100/summ;
					earn_map.set(keylist[i],procent);
				}
				var sorted = sort_map(earn_map);
				keylist = Array.from(sorted.keys());
				//clear_earn_stat();
				document.getElementById("earn_stat").innerHTML = "<tr><th>Имя</th><th>Вероятность</th></tr>";
				
				for(var i=0;i<keylist.length;i++)
				{
					var the_tr = document.createElement('tr');
					
					var td_name = document.createElement('td');
					td_name.textContent = keylist[i];
					var td_ctr = document.createElement('td');
					td_ctr.textContent = sorted.get(keylist[i]).toFixed(2).replace(/\./,',')+"";
					the_tr.appendChild(td_name);
					the_tr.appendChild(td_ctr);
					earn_stat.appendChild(the_tr);
				}
				
			}
			
			function clear_table_sel()
			{
				var earn_items = document.getElementById("table_select");
				for(var i=0;i<earn_items.childNodes.length;i++)
				{
					var the_tr = earn_items.childNodes[i];
					var cb = the_tr.childNodes[0].childNodes[0];
					cb.checked = false;
					ei_lb_change(cb);
				}
			}
			
			function switch_ts()
			{
				if(document.getElementById("fs_ts").style.display=='none')
				{
					document.getElementById("fs_ts").style.display='block';
				}
				else
				{
					document.getElementById("fs_ts").style.display='none';
				}
			}
			
			function clear_cbs()
			{
				var earn_items = document.getElementById("earn_items");
				for(var i=0;i<earn_items.childNodes.length;i++)
				{
					var the_tr = earn_items.childNodes[i];
					var cb = the_tr.childNodes[0].childNodes[0];
					cb.checked = false;
					ei_rb_change(cb);
				}
			}
			function clear_earn_stat()
			{
				document.getElementById("earn_stat").innerHTML = "";
				//document.getElementById("earn_stat").innerHTML = <tr><th>Имя</th><th>Вероятность</th></tr>";
			}
			
			function ei_rb_change(obj)
			{
				var rid = obj.getAttribute("iid");
				var btns_right = document.querySelectorAll('button.btn_right[rid="'+rid+'"]');
				for(var _idx=0; _idx<btns_right.length; _idx++)
				{
					draw_btn_right(btns_right[_idx]);
				}
				//(document.querySelectorAll('button.btn_right[rid="'+rid+'"]')[0]);				
			}
			
			function ei_lb_change(obj)
			{
				switch(tmode)
					{
						case 'names': 			
						case 'pop_names': 
							var btns = document.querySelectorAll('button.btn_left[name_id="'+obj.getAttribute("name_id")+'"]');
							for(var _i=0;_i<btns.length;_i++)
							{
								draw_btn_left(btns[_i]);	
							}
							break;
						case 'refs': 
							switch(rmode)
							{
								case 'refs': 
									var btns = document.querySelectorAll('button.btn_left[iid="'+obj.getAttribute("iid")+'"]');
									for(var _i=0;_i<btns.length;_i++)
									{
										draw_btn_left(btns[_i]);	
									} 
									break;
								case 'names': 			
								case 'pop_names': 
									if(document.querySelectorAll('#fs_ts input[type="checkbox"][name_id="'+obj.getAttribute("name_id")+'"]:checked').length==0)
									{
										var btns = document.querySelectorAll('button.btn_left[name_id="'+obj.getAttribute("name_id")+'"]');
										for(var _i=0;_i<btns.length;_i++)
										{
											draw_btn_left(btns[_i]);	
										}
									}
									break;
							}
							//	r_id = namelist.indexOf(reflist[keylist[i]]);
							break;				
					}
					/*
				var oid = obj.getAttribute("iid");
				if(obj.checked)
				{
					document.querySelectorAll('button.btn_left[iid="'+oid+'"]').forEach(
						function(el)
						{
							el.textContent = "Сбросить слева";
						});
				}
				else
				{
					document.querySelectorAll('button.btn_left[iid="'+oid+'"]').forEach(
						function(el)
						{
							el.textContent = "Отметить слева";
						});
				}*/
			}
			
			
			document.addEventListener("DOMContentLoaded", function(event) 
				{ 
					build_list_right('names');
					build_list_left('names');
					document.getElementById('btn_ctr').onclick = function()
					{ 
						CounterObj.show_hide(); 
					}
					document.getElementById('btn_ctr_clear').onclick = function()
					{ 
						CounterObj.clear(); 
					}
				}
			);
			
			function build_list_right(r_mode)
			{
				var table_id = "earn_items";
				var prefix='cb_sel_r_'; 
				var onchange_ev='ei_rb_change(this)';
				var res_items = document.getElementById(table_id);
				res_items.innerHTML = "";
				var items = null;
				 
				items = arrayClone(namelist);
				items.sort();
				
				var ref_keys = Object.keys(reflist);
				
				for(var i=0;i<items.length;i++)
				{						
					var the_tr = document.createElement('tr');
					var td_cb = document.createElement('td');
					var cb = document.createElement('input');
					td_cb.appendChild(cb);
					td_cb.setAttribute('width','25px');
					cb.setAttribute('type','checkbox');		
										
					
					var the_id = namelist.indexOf(items[i]);
					
					
					var name_id = null;
					
					if(r_mode=="refs")
					{
						name_id = namelist.indexOf(reflist[items[i]]);						
					}
					else
					{
						name_id = namelist.indexOf(items[i]);
					}
					var el_id = prefix_r+the_id;
					cb.setAttribute('iid',the_id);
					cb.setAttribute('name_id',name_id);
					cb.setAttribute('id',el_id);
					cb.setAttribute('value',items[i]);
					cb.setAttribute('onchange',onchange_ev);
					
					var td_1 = document.createElement('td');
					var obj_label = document.createElement('label');
					
					obj_label.setAttribute("for",el_id);
					obj_label.setAttribute('style','display : block');
					
					
					obj_label.textContent = items[i];
					
					td_1.appendChild(obj_label);
					the_tr.appendChild(td_cb);
					the_tr.appendChild(td_1);
					
						
					res_items.appendChild(the_tr);
				}
				
			}
			

			function build_list_left(t_mode)
			{
				CounterObj.clear();

				tmode = t_mode;
				var table_id =  'table_select';
				var prefix='cb_sel_';
				var onchange_ev='ei_lb_change(this)';
				var res_items = document.getElementById(table_id);
				res_items.innerHTML = "";
				var items = null;
				switch(tmode)
				{
					case 'names': 
							items = arrayClone(namelist);
							items.sort();
						break;
					case 'pop_names': 
							items = arrayClone(pop_namelist);
							items.sort();
						break;
					case 'refs': 
							items = arrayClone(Object.keys(reflist));
						break;				
				}
				
				var ref_keys = Object.keys(reflist);
				
				for(var i=0;i<items.length;i++)
				{						
					var the_tr = document.createElement('tr');
					var td_cb = document.createElement('td');
					var cb = document.createElement('input');
					td_cb.appendChild(cb);
					td_cb.setAttribute('width','25px');
					cb.setAttribute('type','checkbox');		
										
					
					var the_id = prefix;					
					
					switch(tmode)
					{
						case 'names': 
								the_id = namelist.indexOf(items[i]);
							break;
						case 'pop_names': 
								the_id = pop_namelist.indexOf(items[i]);
							break;
						case 'refs': 
								the_id = ref_keys.indexOf(items[i]);
							break;				
					}
					
					var name_id = null;
					
					if(tmode=="refs")
					{
						name_id = namelist.indexOf(reflist[items[i]]);						
					}
					else
					{
						name_id = namelist.indexOf(items[i]);
					}
					
					var el_id = prefix_l+the_id;
					cb.setAttribute('iid',the_id);
					cb.setAttribute('name_id',name_id);
					cb.setAttribute('id',el_id);
					cb.setAttribute('value',items[i]);
					cb.setAttribute('onchange',onchange_ev);
					
					var td_1 = document.createElement('td');
					var obj_label = document.createElement('label');
					
					obj_label.setAttribute("for",el_id);
					obj_label.setAttribute('style','display : block');
					if(tmode=="refs")
					{
						var td_a = document.createElement('a');
						td_a.textContent = items[i];
						td_a.setAttribute('href',items[i]);
						td_a.setAttribute('target','vkwin');
						obj_label.appendChild(td_a);
						
					}
					else
					{
						obj_label.textContent = items[i];
					}
					
					
					
					td_1.appendChild(obj_label);
					the_tr.appendChild(td_cb);
					the_tr.appendChild(td_1);
					if(tmode=="refs")
					{
						var td_2 = document.createElement('td');
						var obj_label_2 = document.createElement('label');
						obj_label_2.textContent = reflist[items[i]];
						obj_label_2.setAttribute("for",prefix+the_id);
						obj_label_2.setAttribute('style','display : block');
						td_2.appendChild(obj_label_2);
						td_2.setAttribute('width','100%');
						the_tr.appendChild(td_2);
					}
						
					res_items.appendChild(the_tr);
					
					
				}
				
				var objs = document.querySelectorAll('button.btn_left');
					
				for(var _i=0;_i<objs.length;_i++)
				{
					draw_btn_left(objs[_i]);						
				}
				
			}
			
			function search_in_cbs(text_el)
			{
				var earn_items = document.getElementById("earn_items");
				//window
				earn_items.scrollBy(0, document.evaluate("//*[text()[contains(., '"+text_el.value+"')]][last()]", document.body).iterateNext().getBoundingClientRect().top);
			}