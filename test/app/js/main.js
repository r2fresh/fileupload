$(document).ready(function(){

	// Info App
	var baasInfo = {
		orgName: 'ed38f569-2fc2-11e2-a2c1-02003a570010',
		appName: 'd3ecdaba-ef60-11e2-bfad-06ebb80000ba'
	}
	var usergridInfo = {
		orgName: 'acf11817-d5f9-11e1-b36a-12313b01d5c1',
		appName: '1ef865e8-d618-11e1-b36a-12313b01d5c1'
	}
	var pushInfo = {
		orgName: 'ceffba5f-3514-11e2-a2c1-02003a570010',
		appName: 'd31a99ec-3514-11e2-a2c1-02003a570010'
	}


	// Define Baas Class 
	var io = new Baas.IO(baasInfo);
	//var io = new Usergrid.Client(usergridInfo);

	var entity = null;



	$('._upload_start').bind('click',function(e){

		var fileInput = document.getElementsByClassName('_file_upload');
		var fileForm = document.getElementsByClassName('upload_form');

		//console.log($('._file_upload'))
		//console.log(fileInput)

		console.log(fileInput)

		var file = new Baas.File({'client':io});

		//file.upload({'file':$('._file_upload')})
		file.upload({'file':fileInput},function(err, data, entity){
			console.log(err)
			console.log(data);
			console.log(entity)
		})


		// var method = 'POST';
		// var uri = 'https://api.baas.io/ed38f569-2fc2-11e2-a2c1-02003a570010/d3ecdaba-ef60-11e2-bfad-06ebb80000ba/files'

		// console.log(fileInput)

		// var file = fileInput[0].files[0];

  //   var formData = new FormData();
  //   formData.append("file" , file);

  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST" , "https://api.baas.io/ed38f569-2fc2-11e2-a2c1-02003a570010/d3ecdaba-ef60-11e2-bfad-06ebb80000ba/files" , true);
  //   xhr.setRequestHeader("Authorization", "Bearer YWMttJcxXSWcEeOCRQb9AAAAwgAAAUFYkhyqrlveQbJBj5_l9VEsagVpzrQS21w")
  //   xhr.send(formData);

    // var fileInput = document.getElementById("upload_file");
    // var file = fileInput.files[0];
    // var formData = new FormData();
    // formData.append("upload_file" , file);

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST" , "/upload/request_url" , true);
    // xhr.send(formData);

		// var xhr = new XMLHttpRequest();
    
  //   var formData = new FormData();
		// formData.append("file", file[0]);

  //   xhr.open(method, uri, true);
  //   //add content type = json if there is a json payload
  //   //if (body) {
  //   xhr.setRequestHeader("Content-Type", "multipart/form-data");
  //   xhr.setRequestHeader("Accept", "*/*");
  //   xhr.setRequestHeader("Authorization", "Bearer YWMttJcxXSWcEeOCRQb9AAAAwgAAAUFYkhyqrlveQbJBj5_l9VEsagVpzrQS21w")
  //   //}

  //   xhr.onload = function(response) {
  //     console.log(response);
  //   };

		// //formData.append("file", file);
		// xhr.send(formData);
	})


	$('#inputEmail').bind('change',function(e){

	})


	$('#inputPassword').bind('change',function(e){


	})

	$('.form-horizontal').submit(function(e){

		io.login($('#inputEmail').val(), $('#inputPassword').val(), loginHandler);

		return false;
	})



	$('.buildAssetURL').bind('click', function(e){

		var assetsUrl = io.buildAssetURL('a1a53305-093d-11e3-b160-06530c0000b4');
		console.log(assetsUrl);

		e.preventDefault();
	})

	$('.createGroup').bind('click', function(e){

		io.createGroup({},function(err,data){
			console.log(err);
		});
	})

	$('.createEntity').bind('click', function(e){

		io.createEntity({'type':'users','username':'k98boy'},function(err,data){
			console.log(err);
			console.log(data);
		});
	})

	$('.getEntity').bind('click', function(e){

		io.getEntity({'type':'users','username':'r2fresh'},function(err,data){
			console.log(err);
			console.log(data);
		});
	})

	$('.createCollection').bind('click', function(e){
		io.createCollection({'type':'baas7'},function(err,data){
			data.addEntity({'name':'r2fresh'},function(err,data){
				console.log('success')
			});
		})
	})


	$('.getFeedForUser').bind('click', function(e){

		io.getFeedForUser('ksy',function(err,data){
			console.log(err);
			console.log(data);
			console.log(data.entities);
		});
	})

	$('.createUserActivity').bind('click', function(e){
		var options2 = {"actor" : {
	     "displayName" : "John Doe",
	     "uuid" : "1f3567aa-da83-11e1-afad-12313b01d5c1",
	     "username" : "john.doe",
	     "image" : {
	       "duration" : 0,
	       "height" : 80,
	       "url" : "http://www.gravatar.com/avatar/",
	       "width" : 80
	     },
	     "email" : "john.doe@gmail.com"
	   }}

	   var options = {
	    'actor': {
	        
	      },
	      "verb":"post",
	      "content":"ksy-blog write"
	  }


		io.createUserActivity('ksy',options,function(err,entity){
			console.log(err);
			console.log(entity)
			;
		});
	})


	$('.calcTimeDiff').bind('click', function(e){
		console.log(io.calcTimeDiff())
	})

	$('.signup').bind('click', function(e){
		var username = $('#signupUsername').val()
		var password = $('#signupPassword').val()
		var email = $('#signupEmail').val()
		var name =  $('#signupName').val()

		io.signup(username, password, email, name, function(err, entity){
			console.log('err',err);
			console.log('entity',entity)
		})
	})

	$('.getLoggedInUser').bind('click', function(e){
		
		io.getLoggedInUser(function(err, data, user){
			console.log(err);
			console.log(data);
			console.log(user);
		})
	})
	
	$('.buildCurlCall').bind('click', function(e){
		
		var options = {'uri':'https://api.baas.io/ed38f569-2fc2-11e2-a2c1-02003a570010/d3ecdaba-ef60-11e2-bfad-06ebb80000ba/users/me?access_token=YWMtLfILNg_TEeOirgb9AAAAwgAAAUDJyTzkhXaFCN6U84zik25kCVy-YxQos_Y'}

		console.log(io.buildCurlCall(options))
	})

	$('.entity > .serialize').click(function(e){
		io.getEntity({'type':'users','username':'r2fresh'},function(err, entity){
			console.log(entity);
			console.log(entity.serialize());
		});
	})

	$('.get').click(function(e){
		io.getEntity({'type':'users','username':'r2fresh'},function(err, entity){
			console.log(entity);
			console.log(entity.get());
		});
	})

	$('.save').click(function(e){

		entity = new Baas.Entity({'client':io,'data':{'type':'users','username':'singi'}})

		entity.save(function(err,data,self){
			console.log('err',err);
			console.log('data',data);
			console.log('self',self);
		})
	})

	$('.entity > .fetch').click(function(e){

		entity = new Baas.Entity({'client':io,'data':{'type':'users','username':'singi'}})

		entity.fetch(function(err,data,self){
			console.log('err',err);
			console.log('data',data);
			console.log('self',self);
		})
	})

	$('.entity > .destroy').click(function(e){

		entity.destroy(function(err,data){
			console.log('err',err);
			console.log('data',data);
		})
		
	})
	
	$('.connect').click(function(e){

		var r2fresh = new Baas.Entity({'client':io,'data':{'type':'users','username':'r2fresh'}})

		var cats = new Baas.Entity({'client':io,'data':{'type':'cats','name':'dazzi'}})

		r2fresh.fetch(function(){
			cats.fetch(function(){
				r2fresh.connect('likes',cats,function(err, data){
					console.log(err);
					console.log(data);
				})
			})
		})
	})

	

	$('.disconnect').click(function(e){
		var r2fresh = new Baas.Entity({'client':io,'data':{'type':'users','username':'r2fresh'}})

		var ksy = new Baas.Entity({'client':io,'data':{'type':'cats','name':'dazzi'}})

		r2fresh.fetch(function(){
			ksy.fetch(function(){
				r2fresh.disconnect('likes',ksy,function(err, data){
					console.log(err);
					console.log(data);
				})
			})
		})
	})

	$('.getEntityId').click(function(e){
		var ksy = new Baas.Entity({'client':io,'data':{'type':'users','username':'ksy'}})

		io.getEntity({'type':'users','username':'ksy'},function(err,data){
			console.log(data.getEntityId(data));
		})

	})

	$('.getConnections').click(function(e){
		var r2fresh = new Baas.Entity({'client':io,'data':{'type':'users','username':'r2fresh'}})

		io.getEntity({'type':'cats','name':'dazzi'},function(err,data){
			data.getConnections('likes',function(err,data,entities){
				console.log(err)
				console.log(data)
				console.log(entities)
			});
		})

	})

	//collection

	var collection = null;

	$('.collection > button').click(function(e){

		var className = $(e.currentTarget).attr('class');

		switch(className){
			// get collection data -> create collection
			case 'basic':
				collection = new Baas.Collection({'client':io, 'type':'cats'},function(err, data){
					console.log(err);
					console.log(data);
				});
				console.log(collection);
			break;
			case 'serialize':
				collection = new Baas.Collection({'client':io, 'type':'cats'});

				collection.fetch($.proxy(function(err, data){
					console.log(this);
					console.log(this.serialize());
				},collection));
			break;
			case 'fetch':
				collection = new Baas.Collection({'client':io, 'type':'dogs'});

				collection.fetch(function(err, data){
					console.log(err);
					console.log(data);
				});
			break;
			case 'addEntity':
				collection = new Baas.Collection({'client':io, 'type':'cats'});

				collection.fetch($.proxy(function(err, data){
					this.addEntity({'name':'tom'},function(err, data){
						console.log(err);
						console.log(data);
					})
				},collection));
			break;
			case 'destroyEntity':
				collection = new Baas.Collection({'client':io, 'type':'cats'});

				collection.fetch($.proxy(function(err, data){
					this.addEntity({'name':'tom'},$.proxy(function(err, entity){
						this.destroyEntity(entity,function(err, data){
							console.log(err);
							console.log(data);
						})
					},this))
				},collection));
			break;
			case 'getEntityByUUID':
				collection = new Baas.Collection({'client':io, 'type':'cats'});

				collection.fetch($.proxy(function(err, data){
					this.getEntityByUUID('ef190440-1367-11e3-a2ae-06fd000000c2',function(err, data, entity){
						console.log(err);
						console.log(data);
						console.log(entity);
					})
				},collection));
			break;
			case 'getFirstEntity':
				collection = new Baas.Collection({'client':io, 'type':'cats'});

				collection.fetch($.proxy(function(err, data){
					var entity = this.getFirstEntity();
					console.log(entity)
				},collection));
			break;
			case 'getLastEntity':
				collection = new Baas.Collection({'client':io, 'type':'cats'});

				collection.fetch($.proxy(function(err, data){
					var entity = this.getLastEntity();
					console.log(entity)
				},collection));
			break;
			case 'hasNextEntity':
				console.log(collection.hasNextEntity());
			break;
			case 'getNextEntity':
				console.log(collection.getNextEntity());
			break;
			case 'hasPrevEntity':
				console.log(collection.hasPrevEntity());
			break;
			case 'getPrevEntity':
				console.log(collection.getPrevEntity());
			break;
			case 'resetEntityPointer':
				console.log(collection.resetEntityPointer());
			break;
			case 'saveCursor':
				collection.saveCursor('moz_-xUiEeOTgwZTDAAAtA');
			break;
			case 'resetPaging':
				collection.resetPaging();
			break;
			case 'hasNextPage':
				console.log(collection.hasNextPage());
			break;
			case 'getNextPage':
				collection.getNextPage(function(err, data){
					console.log(err);
					console.log(data);
				});
			break;
			case 'hasPreviousPage':
				console.log(collection.hasPreviousPage());
			break;
			case 'getPreviousPage':
				collection.getPreviousPage(function(err, data){
					console.log(err);
					console.log(data);
				});
			break;
		}
	})
	
	$('.group > button').click(function(e){
		var className = $(e.currentTarget).attr('class');

		switch(className){
			// get collection data -> create collection
			case 'basic':
				var group = new Baas.Group({'client':io, 'path':'r2group', 'data':{}});
				console.log(group);
			break;
			// get collection data -> create collection
			case 'fetch':
				var group = new Baas.Group({'client':io, 'data':{'path':'r2group'}});

				console.log(group);
				group.save(function(){
					group.fetch(function(err, data, list){
						console.log('err',err);
						console.log('data',data);
						console.log('list',list);
					})
				})	
			break;
			case 'members':
				var group = new Baas.Group({'client':io, 'data':{'path':'r2group'}});
				group.fetch(function(err, data, list){
					group.members(function(err, list){
						console.log(list);
					})
				})
			break;
			case 'add':
				var group = new Baas.Group({'client':io, 'data':{'path':'r2group'}});
				var entity = 


				io.getEntity({'type':'users','username':'singi'},function(err,data){
					//console.log(err);
					//console.log(data);
					entity = data;

					group.fetch(function(err, data, list){
						group.add({user: entity},function(){
							console.log(err);
							console.log(data);
							console.log(list);
						})
					})
				});
			break;
			case 'remove':
				var group = new Baas.Group({'client':io, 'data':{'path':'r2group'}});
				var entity = 


				io.getEntity({'type':'users','username':'r2fresh'},function(err,data){
					//console.log(err);
					//console.log(data);
					entity = data;

					group.fetch(function(err, data, list){
						group.remove({user: entity},function(){
							console.log(err);
							console.log(data);
							console.log(list);
						})
					})
				});
			break;
			case 'feed':
				var group = new Baas.Group({'client':io, 'data':{'path':'r2group'}});

				group.fetch(function(err, data, list){
					group.feed(function(err, data, entities){
						console.log(err);
						console.log(data);
						console.log(entities);
					})
				})
				
			break;
			case 'createGroupActivity':
				var group = new Baas.Group({'client':io, 'data':{'path':'r2group'}});

				var entity = null;

				io.getEntity({'type':'users','username':'r2fresh'},function(err,data){
					//console.log(err);
					//console.log(data);
					entity = data;

					group.fetch(function(err, data, list){
						group.createGroupActivity({user: entity, content: "very nice day"},function(err, entity){
							console.log(err);
							console.log(entity);
						})
					})
				});
			break;
		}
	})

	$('.push > button').click(function(e){
		var className = $(e.currentTarget).attr('class');

		console.log(4)

		switch(className){
			// get collection data -> create collection
			case 'send':
				var options = {
					"target" : 'user',
					//'to' : 'ttestuser3',
					//user
					"to" : "81014b3a-7026-11e2-96dd-06ebb80000ba",
					//device
					//"to" : "a6700141-1b62-11e3-a23b-06a6fa0000b9",    
					//tag
					//"to" : "ttestuser3",
					"payload" : {           
						//"badge" : 555,                  
    				//"model" : "dfsdfds",
    				"sound" : "223",
    				"alert" : 'badge01'             
    			},  
					//"reserve" : '',    
					//"platform" : null,    
					//"memo" : "portal",
					//"age" : 12
				}



				var push = new Baas.Push({'client':io});

				//push.set('target',' ')

				push.send(options, function(err, data){
					console.log(err);
					console.log(data);
				})
			break;
		}
	})


	$('.etc > button').click(function(e){
		var className = $(e.currentTarget).attr('class');

		switch(className){
			// get collection data -> create collection
			case 'isUUID':
				//console.log(Baas.Utils.isUUID('3be0fc7e-ef62-11e2-b876-06a6fa0000b9'));
				console.log(Baas.Utils.isUUID('dsdfjdsfoiwe2132ijs832jdsnviuds98e'));
			break;
			case 'encodeParams':
				//console.log(Baas.Utils.isUUID('3be0fc7e-ef62-11e2-b876-06a6fa0000b9'));
				console.log(Baas.Utils.encodeParams({'path':'aaa','data':{'uuid':'ddfdfd'}}));
			break;
		}
	})

//  'this._iterator <= this._list.length' -> return value : undefined
  //  'this._iterator < this._list.length' -> return value : false
  //  changes consistently return value	



	// $('.createEntity').bind('click',function(e){

	// var options = {'type':'baas463','test':'BAAS-464'}

	// io.createEntity(options,function(err, entity){
	// 	io.request({'method':'PUT','endpoint':'baas463_count/fe50ed43-0965-11e3-b160-06530c0000b4','body':{'count':'1000'}},function(){
	// 		console.log('success')
	// 	})
	// })	




	// 	return false;
	// })

	function countUpdate(){
		io.request({'method':'PUT','endpoint':'baas463_count','body':{'count':'3','uuid':'fe50ed43-0965-11e3-b160-06530c0000b4'}},function(){
			console.log('success')
		})
	}

	function loginHandler(err, data, user) {
	  if (err) {
	    //로그인 실패
	  } else {
	    //로그인 성공
	    
	    //로그인 정보 가져오기
	    io.getLoggedInUser(function(err, data, user) {
	      console.log(user);
	    })
	  }
	}

	
})