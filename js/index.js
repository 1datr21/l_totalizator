

			var prefix_l='cb_sel_';
			var prefix_r='cb_sel_r_';
		
			
		
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
						
			Map.prototype.sort = function(_map) // sort_map
			{
				var new_map = new Map();
				var keylist = Array(this.keys());// Array.from(_map.keys());
				var _length = keylist.length;
				for(var j=0;j<_length;j++)
				{
					var max = 0;
					var max_key = "";
					var max_idx = 0;
					for(var i=0;i<keylist.length;i++)
					{
						if(this.get(keylist[i])>max)
						{
							max = this.get(keylist[i]);
							max_key = keylist[i];
							max_idx = i;
						}
					}
					
					new_map.set(max_key, max);
					keylist.splice(max_idx, 1); 
				}
				
				return new_map;
			}
			
			Array.prototype.Clone = function()
			{
				var copy = new Array();
				for (var i = 0; i < this.length; i++) 
				{
					copy[i] = this[i];//.Clone();
				}
				return copy;			
			}

			Array.prototype.in_array = function(p_val) {
				for(var i = 0, l = this.length; i < l; i++)	{
					if(this[i] == p_val) {
						return true;
					}
				}
				return false;
			}

			Array.prototype.random_mixed = function()
			{
				var arr_dst = new Array();
				var arr_cloned = this.Clone();// arrayClone(arr_src);
				var lng_first = this.length;
				for(i=0;i<lng_first;i++)
				{
					var idx = getRandomInt(arr_cloned.length-1);
					arr_dst.push(arr_cloned[idx]);
					arr_cloned.splice(idx,1);
					
				}
				return arr_dst;
			}

			

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
						if(_map_array[idx_map].items[s_keys[j]]==undefined)
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
				var sorted = this.ctrlist.sort();// sort_map(this.ctrlist);
				var s_keys = Array.from(sorted.keys());
				var ctr_table = document.getElementById("ctr_table");
				if(this.mode=="refs")
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

					if(this.mode=="refs")
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

			Selection.prototype.get_iid = function(_key)
			{
				switch(this.mode)
				{
					case 'names':
							return namelist.indexOf(_key);
						break;
					case 'pop_names':
							return pop_namelist.indexOf(_key);
						break;
					case 'refs':
							return ref_keys.indexOf(_key);;
						break;
				}
			}

			Selection.prototype.build_sorted = function()
			{
				//	build_map_sorted(selection.h_stat,selection.items);
				var keylist = Array.from(this.h_stat.keys());
				var self = this;
				Object.getOwnPropertyNames(this.items).forEach(function (prop) 
					{
						delete self.items[prop];
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
						if(this.h_stat.get(keylist[i])>max)
						{							
							max = this.h_stat.get(keylist[i]);
							max_key = keylist[i];
							max_idx = i;							
						}
					}
					
					this.items[max_key] = max;
					keylist.splice(max_idx, 1); 
				}
			}

			Selection.prototype.get_name_id = function(_key)
			{
				switch(this.mode)
				{
					case 'names':
							return namelist.indexOf(_key);
						break;
					case 'pop_names':
							return namelist.indexOf(_key);
						break;
					case 'refs':
							return namelist.indexOf(reflist[_key]);
						break;
				}
			}

			Selection.prototype.get_top = function(tlmode)
			{
				var keylist = Object.keys(this.items);// Array.from(sorted.keys());
				var old_val = 0;
				var tops = new Array();
				var count = 0;
				var level = 0;
				for(var i=0;i<keylist.length;i++)
				{
					if(tlmode=='iid')
					{
						val_to_array = this.get_iid(keylist[i]);
					}
					else
					{
						val_to_array = this.get_name_id(keylist[i]);
					}

					tops.push(val_to_array);
					if(level>3) break;
					if(this.items[keylist[i]]!=old_val)
					{
						level++;
					}
					else
					{
						
					}

					var val_to_array = null;
					
					old_val = this.items[val_to_array];
				}
				return tops;
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

			var Totalizator = function ()
			{
				this.ctr = 0;
				this.item_list = Array();
				this.sharp_sets = true;
				this.mode = null;
				this.last_idx = -1;
				this.selection_list = Array();
			}

			Totalizator.prototype.set_by_cb_sels = function(_tmode)
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

			Totalizator.prototype.init = function()
			{
				var rbm_cbs = document.querySelectorAll('input[type="radio"][class="rb_mode"]');
				for(var _i=0;_i<rbm_cbs.length;_i++)
				{
					rbm_cbs[_i].onclick = function()
					{
						left_list.build(this.getAttribute("value"));
					}
				}

				var self = this;
				

				document.getElementById('btn_go').onclick = function()
				{ 
					self.run();
				}

				document.getElementById('use_cb_list').onchange = function()
				{ 
					self.switch_ts();
				}
			}

			Totalizator.prototype.switch_ts = function()
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

			Totalizator.prototype.build_item_list = function()
			{
				var sel_list = document.querySelector('input#use_cb_list').checked;
				switch(this.mode)
				{
					case 'names': 
							if(sel_list)
								this.item_list = this.set_by_cb_sels(tmode);
							else 
								this.item_list = namelist.random_mixed();
						break;
					case 'pop_names': 
							if(sel_list)
								this.item_list = this.set_by_cb_sels(tmode);
							else
								this.item_list = pop_namelist.random_mixed();
						break;
					case 'refs': 
							if(sel_list)
								this.item_list = this.set_by_cb_sels(tmode);
							else
								this.item_list = Object.keys(reflist).random_mixed();
						break;				
				}
			}
		
			Totalizator.prototype.run = function()
			{
				document.getElementById("btn_go").disabled = true;

				this.ctr = 0;
				
				
				// show animation wheel
				document.getElementById("div_stat").style.display = "none";
				document.getElementById("div_load").style.display = "block";
				document.getElementById("toolbar_stat").style.display = "none";

				var count_to_run = parseInt(document.getElementById("run_count").getAttribute("value"));
								
				this.mode = document.querySelector('input[name="rb_action"]:checked').value;		
				
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
				
				this.sharp_sets = document.getElementById("sharp_sets").checked;
				 
				var sel_cnt = 1;
				if(document.getElementById("many_sel").checked)
					sel_cnt = document.getElementById("sel_count").value;

				this.reset_stat();

				this.selection_list = Array();
				for(sel_idx = 0; sel_idx<sel_cnt; sel_idx++)
				{
					//h_stat = new Map();
					this.item_list = this.item_list.random_mixed();

					var selection = new Selection();
					
					if(this.sharp_sets)
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
					selection.mode = this.mode;
					this.selection_list.push(selection);
					
					CounterObj.add_map(selection.items);
				}

				CounterObj.trashman(this.selection_list);
							
				var that = this;
				result_list.selection_list = this.selection_list;
				result_list.mode = this.mode;
				setTimeout(function(){
					for(sel_idx = 0; sel_idx<sel_cnt; sel_idx++)
						{
							result_list.animate_draw(that.selection_list[sel_idx], sel_idx, that.ctr);
						}
					
					that.close_animation(true);
					CounterObj.out();
				},1000);

			}

			Totalizator.prototype.close_animation = function(success)
			{
				document.getElementById("div_load").style.display = "none";
				document.getElementById("div_stat").style.display = "block";
				if(success)
				{
					document.getElementById("toolbar_stat").style.display = "block";
				}
				document.getElementById("btn_go").disabled = false;
			}

			Totalizator.prototype.run_one = function(selection)
			{						
				
				/*
				do 
				{	
					*/			
					curr_idx = getExRandInt(this.item_list.length-1,10);
				/*
				}				
				while (this.last_idx==curr_idx);
				*/
				
				this.last_idx = curr_idx;

				var the_name = this.item_list[curr_idx];

				if(selection.h_stat.get(the_name)==undefined) selection.h_stat.set(the_name,1);
				else selection.h_stat.set(the_name, selection.h_stat.get(the_name)+1);							

				this.ctr++;

				selection.build_sorted();//	build_map_sorted(selection.h_stat,selection.items);
								
			}

			Totalizator.prototype.one_iteration = function(selection, count_to_run)
			{				

				this.last_idx = -1;
				for(var _i=0;_i<count_to_run; _i++)
				{
					//sorted = 
					this.run_one(selection);
								
				}
				
			}
			
			Totalizator.prototype.reset_stat = function()
			{
				var table_stat_full = document.getElementById("table_stat_full");
				
				table_stat_full.innerHTML = "<tr></tr>";
				
				
			//	document.getElementById("stat").style.display = 'none';
				table_stat_full.style.display = 'block';
			}
			
			
			
			function ResultList()
			{				
				this.left_list = null;
				this.right_list = null;
				this.selection_list = null;
				this.mode = null;
			}

			ResultList.prototype.CopyTable = function() 
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
					
					}
				} else if (body.createTextRange) {

				}
				
			}

			ResultList.prototype.getTopList = function(tlmode)
			{
				var res_arr = new Array();
				for(var _i=0; _i<this.selection_list.length;_i++)
				{
					res_arr = res_arr.concat(this.selection_list[_i].get_top(tlmode));
				}
				return res_arr;
			}

			ResultList.prototype.animate_draw = function(sorted, sel_idx, ctr_total)
			{				
				var keylist = Object.keys(sorted.items);// Array.from(sorted.keys());
				
				var table_stat_full = document.getElementById("table_stat_full");			
				var tr_stat = table_stat_full.childNodes[0].childNodes[0];// document.getElementById("tr_stat");	
				var td_table = document.createElement('td');	
				td_table.setAttribute("valign","top");
				tr_stat.appendChild(td_table);		
				var table_stat = document.createElement('table');
				table_stat.setAttribute("class","tbl_selection");

				if(this.mode=='refs')
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
					
					var procent = sorted.h_stat.get(keylist[i]) * 100/ctr_total;
					if(pl<4)
					{
						if(procent<old_proc) pl++;						
					}
					
					var the_id = null;
					
					switch(this.mode)
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
					
					switch(this.mode)
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
					
					switch(this.mode)
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
					if(this.mode=='refs')
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
												
						var self = this;

						btn_1.onclick = function() { self.mark_left(the_id, this); }
						//btn_1.setAttribute("onclick","mark_left("+the_id+", this)");
						btn_1.setAttribute("iid",l_id);
						btn_1.setAttribute("name_id",name_id);
						btn_1.setAttribute("class","btn_left");
						
						this.draw_btn_left(btn_1);
						
						td_btn1.appendChild(btn_1);
							
						var td_btn2 = document.createElement('td');
						td_btn2.className = _className;
						var btn_r = document.createElement('button');
						
						//btn_r.setAttribute("onclick","mark_right("+r_id+", this)");
						btn_r.onclick = function() { self.mark_right(the_id, this); }
						btn_r.setAttribute("class","btn_right");
						btn_r.setAttribute("rid",r_id);
						td_btn2.appendChild(btn_r);
						this.draw_btn_right(btn_r);
						
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
						//btn_1.setAttribute("onclick","mark_left("+ the_id +", this)");
						var self = this;
						btn_1.onclick = function() { self.mark_left(the_id, this); };
						btn_1.setAttribute("iid",r_id);
						btn_1.setAttribute("name_id",name_id);
						btn_1.setAttribute("class","btn_left");
						td_btn1.appendChild(btn_1);	
						
						this.draw_btn_left(btn_1);
							
						var td_btn2 = document.createElement('td');
						td_btn2.className = _className;
						var btn_r = document.createElement('button');
						
						var r_sel_ch = document.getElementById(prefix_r+r_id);
																		
						//btn_r.setAttribute("onclick","mark_right("+ r_id+", this)");
						btn_r.onclick = function() { self.mark_right(the_id, this); };
						btn_r.setAttribute("class","btn_right");
						btn_r.setAttribute("rid",r_id);
						td_btn2.appendChild(btn_r);
						
						this.draw_btn_right(btn_r);
							
						the_tr.appendChild(td_btn1);
						the_tr.appendChild(td_name);
						the_tr.appendChild(td_proc);
						the_tr.appendChild(td_btn2);
						table_stat.appendChild(the_tr);					
					}
					
					old_proc = procent;
				}
			
			}

			ResultList.prototype.init = function()
			{
				var self = this;
				document.getElementById('mark_top_3').onclick = function(){ self.mark_top_3_left(); };
				document.getElementById('btn_copy_table').onclick = function(){ self.CopyTable(); }
			}

			ResultList.prototype.draw_btn_right_off = function(btn_obj)	
			{
				btn_obj.textContent = "->";	
				btn_obj.classList.remove("btn_right_on");
				btn_obj.classList.add("btn_right_off");
				btn_obj.setAttribute("title","Выбрать справа");
			}

			ResultList.prototype.draw_btn_right_on = function(btn_obj)	
			{
				btn_obj.textContent = "->";
				btn_obj.classList.remove("btn_right_off");
				btn_obj.classList.add("btn_right_on");
				btn_obj.setAttribute("title","Сбросить слева");
			}
			
			ResultList.prototype.draw_btn_right = function(btn_obj)
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
								this.draw_btn_right_on(btn_obj);//btn_obj.textContent = "Сбросить справа";
							}
							else
							{
								this.draw_btn_right_off(btn_obj);//btn_obj.textContent = "Отметить справа";
							}	
						}
					}
					else this.draw_btn_right_off(btn_obj);//btn_obj.textContent = "Отметить справа";		
				}	
				else this.draw_btn_right_off(btn_obj);//btn_obj.textContent = "Отметить справа";

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
			
			ResultList.prototype.draw_btn_left_off = function(btn_obj)	
			{
				btn_obj.textContent = "<-";	
				btn_obj.classList.remove("btn_left_on");
				btn_obj.classList.add("btn_left_off");
				btn_obj.setAttribute("title","Выбрать слева");
			}

			ResultList.prototype.draw_btn_left_on = function(btn_obj)	
			{
				btn_obj.textContent = "<-";
				btn_obj.classList.remove("btn_left_off");
				btn_obj.classList.add("btn_left_on");
				btn_obj.setAttribute("title","Сбросить слева");
			}

			ResultList.prototype.draw_btn_left = function(btn_obj)
			{
				if(btn_obj!=null)
				{
					
					switch (this.mode) 
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
										this.draw_btn_left_on(btn_obj);
									}
									else
									{
										this.draw_btn_left_off(btn_obj);
									}	
								}
								else
									this.draw_btn_left_off(btn_obj);
							}	
							else
								this.draw_btn_left_off(btn_obj);
							break;
						case 'refs': 
						
								switch(this.mode)
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
													this.draw_btn_left_on(btn_obj);//btn_obj.textContent = "Сбросить слева";
												}
												else
												{
													this.draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
												}	
											}
											else
												this.draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
										}	
										else
											this.draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
										break;
									case 'refs':
											iid = btn_obj.getAttribute('iid');
											if(document.querySelectorAll('#fs_ts input[iid="'+iid+'"][type="checkbox"]')!=null)
											{
												if(document.querySelectorAll('#fs_ts input[iid="'+iid+'"][type="checkbox"]').length>0)
												{
													if(document.querySelectorAll('#fs_ts input[iid="'+iid+'"][type="checkbox"]')[0].checked)
													{
														this.draw_btn_left_on(btn_obj);//btn_obj.textContent = "Сбросить слева";
													}
													else
													{
														this.draw_btn_left_off(btn_obj);//draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
													}	
												}
												else
													this.draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
											}	
											else
												this.draw_btn_left_off(btn_obj);//btn_obj.textContent = "Отметить слева";
										break;
								}
							break;	
					}
					
					
				}				
				left_list.CalcCountAndDraw();
			}
								
			ResultList.prototype.mark_top_3_left = function()
			{
				left_list.Clear();
				var btns_l_list = document.querySelectorAll('table.tbl_selection td.pl_1 button.btn_left, table.tbl_selection td.pl_2 button.btn_left, table.tbl_selection td.pl_3 button.btn_left');
				for(var _i=0;_i<btns_l_list.length;_i++)
				{
					this.mark_left(btns_l_list[_i].getAttribute("iid"), btns_l_list[_i], true);
				}
			}
			
			ResultList.prototype.mark_left = function(_id, btn_obj, bool_val=null)
			{
				//var sel_on_sel = document.getElementById("cb_sel_on_sel").checked;

				var obj_l_btns = null;
				switch (result_list.mode)// tmode)
				{
					case 'names':
						switch (this.mode)
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
						switch (this.mode)
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
							switch (this.mode)
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
						this.draw_btn_left(obj_l_btns[_i]);
					}
				}
			
			}
			
			ResultList.prototype.mark_right = function(_id, _btn_obj)
			{
				var rb = document.getElementById(prefix_r+_id);
				if(rb!=null)
				{
					rb.checked = !rb.checked;
					var btns = document.querySelectorAll("table.tbl_selection button.btn_right[rid='"+_id+"']");
					for(var _idx=0; _idx<btns.length; _idx++)
					{
						this.draw_btn_right(btns[_idx]);
					}
					
				}
			}
			
			function RightList()
			{
				this.earn_map = new Map();
			}			
				
			RightList.prototype.run = function()
			{
				this.earn_map = new Map();
				var earn_stat = document.getElementById("earn_stat");
				
				var earn_items = document.getElementById("earn_items");
				for(var i=0;i<earn_items.childNodes.length;i++)
				{
					var the_tr = earn_items.childNodes[i];
					var cb = the_tr.childNodes[0].childNodes[0];
					if(cb.checked)
					{
						this.earn_map.set(cb.getAttribute("value"), 0);
					}
				}
				
				var keylist = Array.from(this.earn_map.keys());
				var summ = 0;
				
				var nl_clone = namelist.Clone().random_mixed();
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
					this.earn_map.set(keylist[i],ctr);
					summ+=ctr;					
				}
				
				for(var i=0;i<keylist.length;i++)
				{
					var procent = 100 - this.earn_map.get(keylist[i])*100/summ;
					this.earn_map.set(keylist[i],procent);
				}
				var sorted = this.earn_map.sort();// sort_map(this.earn_map);
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
						
			RightList.prototype.clear = function()
			{
				var earn_items = document.getElementById("earn_items");
				for(var i=0;i<earn_items.childNodes.length;i++)
				{
					var the_tr = earn_items.childNodes[i];
					var cb = the_tr.childNodes[0].childNodes[0];
					cb.checked = false;
					this.cb_changed(cb);
				}
			}

			RightList.prototype.clear_stat = function()
			{
				document.getElementById("earn_stat").innerHTML = "";
				//document.getElementById("earn_stat").innerHTML = <tr><th>Имя</th><th>Вероятность</th></tr>";
			}
			
			RightList.prototype.cb_changed = function(obj)
			{
				var rid = obj.getAttribute("iid");
				var btns_right = document.querySelectorAll('button.btn_right[rid="'+rid+'"]');
				for(var _idx=0; _idx<btns_right.length; _idx++)
				{
					result_list.draw_btn_right(btns_right[_idx]);
				}
				//(document.querySelectorAll('button.btn_right[rid="'+rid+'"]')[0]);				
			}
			
			RightList.prototype.build = function(r_mode)
			{
				var table_id = "earn_items";
				var prefix='cb_sel_r_'; 
				var res_items = document.getElementById(table_id);
				res_items.innerHTML = "";
				var items = null;
				 
				var self = this;
				document.getElementById('rl_clear').onclick = function(){ self.clear(this) };
				document.getElementById('rl_run').onclick = this.run;
				document.getElementById('clear_stat').onclick = function(){ self.clear_stat(this) };

				items = namelist.Clone();// arrayClone(namelist);
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
					//cb.setAttribute('onchange',onchange_ev);
					var self = this;
					cb.onchange = function() { self.cb_changed (this); };
					
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
		
			function LeftList()
			{
				this.mode = null;
			}

			LeftList.prototype.CalcCountAndDraw = function()
			{
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

			LeftList.prototype.build = function(t_mode)
			{
				CounterObj.clear();

				this.mode = t_mode;

			//	tmode = t_mode;
				var table_id =  'table_select';
				var prefix='cb_sel_';

				var res_items = document.getElementById(table_id);
				res_items.innerHTML = "";
				var items = null;
				switch(this.mode)
				{
					case 'names': 
							items = namelist.Clone();
							items.sort();
						break;
					case 'pop_names': 
							items = pop_namelist.Clone(); //arrayClone(pop_namelist);
							items.sort();
						break;
					case 'refs': 
							items = Object.keys(reflist).Clone();// arrayClone(Object.keys(reflist));
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
					
					switch(this.mode)
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
					
					if(this.mode=="refs")
					{
						name_id = namelist.indexOf(reflist[items[i]]);						
					}
					else
					{
						name_id = namelist.indexOf(items[i]);
					}
					
					var el_id = prefix_l+the_id;
					cb.setAttribute('class','cb_ll');
					cb.setAttribute('iid',the_id);
					cb.setAttribute('name_id',name_id);
					cb.setAttribute('id',el_id);
					cb.setAttribute('value',items[i]);

					var self = this;
					cb.onchange = function()
					{
						self.ll_cb_changed(this);
					};

					//cb.setAttribute('onchange',onchange_ev);
					
					var td_1 = document.createElement('td');
					var obj_label = document.createElement('label');
					
					obj_label.setAttribute("for",el_id);
					obj_label.setAttribute('style','display : block');
					if(this.mode=="refs")
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
					if(this.mode=="refs")
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
					result_list.draw_btn_left(objs[_i]);						
				}
				
				var self = this;
				document.getElementById("ll_clear").onclick = function()
				{
					self.Clear(this);
				}

				document.getElementById("ll_export").onclick = function()
				{
					self.export_to_str();
				}

				document.getElementById("ll_export_add").onclick = function()
				{
					self.export_to_str(true);
				}

				document.getElementById("ll_import").onclick = function()
				{
					self.import_from_str();
				}		
				
				document.getElementById("ll_filter").onclick = function()
				{
					self.filter_by_tops();
				}
			}

					

			LeftList.prototype.filter_by_tops = function()
			{
				var cbs = document.querySelectorAll("table#table_select input.cb_ll[type=checkbox]:checked");
				var tlmode = '';
				var attr_cbs = "";
				switch(result_list.mode)
				{
					case 'names':
					case 'pop_names':
						switch(this.mode)
						{
							case 'names':
							case 'pop_names':
								tlmode = 'iid';
								attr_cbs = 'iid';
								break;
							case 'refs':
								tlmode = 'name_id';
								attr_cbs = 'name_id';
								break;
						}
						break;
					case 'refs':
						switch(this.mode)
						{
							case 'names':
							case 'pop_names':
								tlmode = 'name_id';
								attr_cbs = 'name_id';
								break;
							case 'refs':
								tlmode = 'iid';	
								attr_cbs = 'name_id';
								break;
						}
						break;
				}
				var tops = result_list.getTopList(tlmode);
				for(_i=0;_i<cbs.length;_i++)
				{					
					var the_id = cbs[_i].getAttribute(attr_cbs);
					if(!tops.in_array(the_id))
					{
						cbs[_i].checked = false;
						this.ll_cb_changed(cbs[_i]);
					}
				}
			}

			LeftList.prototype.import_from_str = function()
			{
				var data_str = document.getElementById("ll_data_str").value;
				var valuelist = data_str.split(", ");
				var correct_data = true;
				var cbs = new Array();
				for(_i=0;_i<valuelist.length;_i++)
				{
					var obj = document.querySelector("table#table_select input.cb_ll[type=checkbox][value='"+valuelist[_i]+"']");
					if(obj==null)
					{
						correct_data = false;
						break;
					}
					cbs.push(obj);
				}
				if(!correct_data)
				{
					return;
				}
				this.Clear();
				for(_i=0;_i<cbs.length;_i++)
				{
					cbs[_i].checked = true;
					this.ll_cb_changed(cbs[_i]);
				}
			}

			LeftList.prototype.export_to_str = function(add=false)
			{
				var cb_list = document.querySelectorAll("table#table_select input.cb_ll[type=checkbox]:checked");
				var str_res = "";
				var values = [].map.call(cb_list, function(obj) {
					return obj.value;
				  });
				var str = values.join(", ");

				if(add) 
				{
					if(document.getElementById("ll_data_str").value=="")
					{
						document.getElementById("ll_data_str").value = str;
					}
					else
					{
						document.getElementById("ll_data_str").value = document.getElementById("ll_data_str").value + ", "+str;
					}
				}
				else document.getElementById("ll_data_str").value = str;
			}

			LeftList.prototype.ll_cb_changed = function(obj)
			{
				switch(this.mode)
					{
						case 'names': 			
						case 'pop_names': 
							var btns = document.querySelectorAll('button.btn_left[name_id="'+obj.getAttribute("name_id")+'"]');
							for(var _i=0;_i<btns.length;_i++)
							{
								result_list.draw_btn_left(btns[_i]);	
							}
							break;
						case 'refs': 
							switch(this.mode)
							{
								case 'refs': 
									var btns = document.querySelectorAll('button.btn_left[iid="'+obj.getAttribute("iid")+'"]');
									for(var _i=0;_i<btns.length;_i++)
									{
										result_list.draw_btn_left(btns[_i]);	
									} 
									break;
								case 'names': 			
								case 'pop_names': 
									if(document.querySelectorAll('#fs_ts input[type="checkbox"][name_id="'+obj.getAttribute("name_id")+'"]:checked').length==0)
									{
										var btns = document.querySelectorAll('button.btn_left[name_id="'+obj.getAttribute("name_id")+'"]');
										for(var _i=0;_i<btns.length;_i++)
										{
											result_list.draw_btn_left(btns[_i]);	
										}
									}
									break;
							}
							//	r_id = namelist.indexOf(reflist[keylist[i]]);
							break;				
					}		
				this.CalcCountAndDraw();	
			}

			LeftList.prototype.Clear = function()
			{
				var earn_items = document.getElementById("table_select");
				for(var i=0;i<earn_items.childNodes.length;i++)
				{
					var the_tr = earn_items.childNodes[i];
					var cb = the_tr.childNodes[0].childNodes[0];
					cb.checked = false;
					this.ll_cb_changed(cb);
				}

				
			}

			var totalizator = new Totalizator();			
			var left_list = new LeftList();
			var right_list = new RightList();
			var CounterObj= new Counter();
			var result_list = new ResultList();
			
			document.addEventListener("DOMContentLoaded", function(event) 
				{ 
					right_list.build('names');
					left_list.build('names');
					result_list.init();
					document.getElementById('btn_ctr').onclick = function()
					{ 
						CounterObj.show_hide(); 
					}
					document.getElementById('btn_ctr_clear').onclick = function()
					{ 
						CounterObj.clear(); 
					}
					
					totalizator.init();
				}
			);
			

			

			
			
			