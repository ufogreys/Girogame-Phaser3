!function(e){var t={};function a(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){var a,s,r,i,n,o,l={type:Phaser.AUTO,width:1024,height:600,physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){this.load.image("piso","../src/assets/platform.png"),this.load.spritesheet("robot","../src/assets/bot.png",{frameWidth:52,frameHeight:52}),this.load.spritesheet("coin","../src/assets/coin.png",{frameWidth:120,frameHeight:120}),this.load.image("background","../src/assets/city.png"),this.load.image("tiles","../src/assets/tilemap/tileset1.png"),this.load.tilemapTiledJSON("map","../src/assets/tilemap/map1.json")},create:function(){this.add.image(0,0,"background").setOrigin(0),this.cameras.main.setBounds(0,0,25600,600),r=this.make.tilemap({key:"map"}),i=r.addTilesetImage("tileset1","tiles"),(n=r.createStaticLayer("GroundLayer",i,0,100)).setScale(.2),n.setCollisionByExclusion(-1,!0),a=this.physics.add.sprite(100,450,"robot"),(o=this.physics.add.group({key:"coin",repeat:50,setXY:{x:100,y:0,stepX:100}})).children.iterate((function(e){e.setScale(.2),e.setBounce(.5)})),a.setBounce(.2),a.body.setGravityY(300),this.cameras.main.startFollow(a,!0),this.anims.create({key:"coinidle",frames:this.anims.generateFrameNumbers("coin",{start:0,end:7}),frameRate:5,repeat:-1}),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("robot",{start:8,end:14}),frameRate:10,repeat:-1}),this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers("robot",{start:0,end:6}),frameRate:3,repeat:-1}),this.anims.create({key:"walk",frames:this.anims.generateFrameNumbers("robot",{start:8,end:14}),frameRate:5,repeat:-1}),this.anims.create({key:"shoot",frames:this.anims.generateFrameNumbers("robot",{start:16,end:20}),frameRate:5,repeat:-1}),this.anims.create({key:"jump",frames:this.anims.generateFrameNumbers("robot",{start:32,end:36}),frameRate:10,repeat:-1}),this.anims.create({key:"death",frames:this.anims.generateFrameNumbers("robot",{start:35,end:44}),frameRate:5}),s=this.input.keyboard.createCursorKeys(),this.physics.add.collider(a,n),this.physics.add.collider(o,n),this.physics.add.overlap(a,o,(function(e,t){t.disableBody(!0,!0)}),null,this),this.anims.staggerPlay("coinidle",o.getChildren(),.03)},update:function(){var e=this.cameras.main;0;s.left.isDown?(a.setVelocityX(-160),a.anims.play("walk",!0),e.scrollX-=4):s.right.isDown?(a.setVelocityX(160),a.anims.play("walk",!0),e.scrollX+=4):(a.setVelocityX(0),a.anims.play("idle",!0));s.up.isDown&&a.body.onFloor()&&(a.setVelocityY(-450),a.anims.play("jump",!0));s.space.isDown&&a.anims.play("shoot",!0);a.body.velocity.x>0?a.setFlipX(!1):a.body.velocity.x<0&&a.setFlipX(!0)}}};new Phaser.Game(l)}]);