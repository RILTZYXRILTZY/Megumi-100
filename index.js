function _0x3cfb(_0x540e12,_0x526cd6){const _0x5cc16d=_0x5cc1();return _0x3cfb=function(_0x3cfb02,_0x29da00){_0x3cfb02=_0x3cfb02-0xb7;let _0x1b36a5=_0x5cc16d[_0x3cfb02];return _0x1b36a5;},_0x3cfb(_0x540e12,_0x526cd6);}const _0x5856a8=_0x3cfb;(function(_0xef1381,_0x1a6c33){const _0x3c8e43=_0x3cfb,_0x579098=_0xef1381();while(!![]){try{const _0x32b4bd=parseInt(_0x3c8e43(0xe3))/0x1+parseInt(_0x3c8e43(0x116))/0x2+-parseInt(_0x3c8e43(0x10c))/0x3+-parseInt(_0x3c8e43(0xee))/0x4*(parseInt(_0x3c8e43(0xc2))/0x5)+parseInt(_0x3c8e43(0x109))/0x6+-parseInt(_0x3c8e43(0x101))/0x7+parseInt(_0x3c8e43(0xfb))/0x8*(parseInt(_0x3c8e43(0xd9))/0x9);if(_0x32b4bd===_0x1a6c33)break;else _0x579098['push'](_0x579098['shift']());}catch(_0x21a521){_0x579098['push'](_0x579098['shift']());}}}(_0x5cc1,0xe48ab),console[_0x5856a8(0xf8)](),console[_0x5856a8(0xdb)](_0x5856a8(0xfd)),require('../setting/config'));const {default:makeWASocket,prepareWAMessageMedia,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,generateWAMessageFromContent,generateWAMessageContent,jidDecode,proto,relayWAMessage,getContentType,getAggregateVotesInPollMessage,downloadContentFromMessage,fetchLatestWaWebVersion,InteractiveMessage,makeCacheableSignalKeyStore,Browsers,generateForwardMessageContent,MessageRetryMap}=require(_0x5856a8(0xf7)),pino=require('pino'),readline=require('readline'),fs=require('fs'),{Boom}=require(_0x5856a8(0xe5)),{color}=require(_0x5856a8(0xb8)),{smsg,sendGmail,formatSize,isUrl,generateMessageTag,getBuffer,getSizeMedia,runtime,fetchJson,sleep}=require(_0x5856a8(0xd7)),usePairingCode=!![],question=_0x3fbba9=>{const _0x20aa5f=_0x5856a8,_0x43a2b6=readline[_0x20aa5f(0xf1)]({'input':process['stdin'],'output':process['stdout']});return new Promise(_0x2c739c=>{const _0x28bb26=_0x20aa5f;_0x43a2b6[_0x28bb26(0x112)](_0x3fbba9,_0x2c739c);});},store=makeInMemoryStore({'logger':pino()[_0x5856a8(0xde)]({'level':'silent','stream':_0x5856a8(0xc9)})});async function surzstart(){const _0x24e026=_0x5856a8,{state:_0xef867,saveCreds:_0x5405a3}=await useMultiFileAuthState(_0x24e026(0xe7)),_0xd9fcad=makeWASocket({'printQRInTerminal':!usePairingCode,'syncFullHistory':!![],'markOnlineOnConnect':!![],'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'generateHighQualityLinkPreview':!![],'patchMessageBeforeSending':_0x43f843=>{const _0x39b3d2=_0x24e026,_0x5312e4=!!(_0x43f843[_0x39b3d2(0xb7)]||_0x43f843[_0x39b3d2(0x104)]||_0x43f843['listMessage']);return _0x5312e4&&(_0x43f843={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x43f843}}}),_0x43f843;},'version':(await(await fetch(_0x24e026(0xc1)))['json']())[_0x24e026(0x102)],'browser':['Ubuntu',_0x24e026(0xc5),_0x24e026(0x111)],'logger':pino({'level':_0x24e026(0xda)}),'auth':{'creds':_0xef867['creds'],'keys':makeCacheableSignalKeyStore(_0xef867[_0x24e026(0xba)],pino()[_0x24e026(0xde)]({'level':_0x24e026(0xd5),'stream':_0x24e026(0xc9)}))}});if(usePairingCode&&!_0xd9fcad['authState']['creds']['registered']){const _0xbe9353=await question('Surzz\x20:\x20Masukin\x20Nomer\x20Lu\x20:\x2062xxx\x0a'),_0xcd337=await _0xd9fcad[_0x24e026(0xea)](_0xbe9353[_0x24e026(0x100)]());console[_0x24e026(0xdb)](_0x24e026(0x106)+_0xcd337);}return store[_0x24e026(0xec)](_0xd9fcad['ev']),_0xd9fcad['ev']['on'](_0x24e026(0xfc),async(_0x49a4af,_0x12eadb)=>{const _0x3b8263=_0x24e026;try{const _0x367603=_0x49a4af[_0x3b8263(0xe1)][0x0];if(!_0x367603[_0x3b8263(0xd4)])return;_0x367603['message']=Object[_0x3b8263(0xba)](_0x367603['message'])[0x0]===_0x3b8263(0xeb)?_0x367603['message'][_0x3b8263(0xeb)]['message']:_0x367603[_0x3b8263(0xd4)];if(_0x367603[_0x3b8263(0x115)]&&_0x367603['key'][_0x3b8263(0xbe)]===_0x3b8263(0xe6))return;if(!_0xd9fcad[_0x3b8263(0xce)]&&!_0x367603[_0x3b8263(0x115)][_0x3b8263(0x10e)]&&_0x49a4af[_0x3b8263(0xf3)]===_0x3b8263(0x110))return;if(_0x367603[_0x3b8263(0x115)]['id'][_0x3b8263(0xe9)](_0x3b8263(0xf9))&&_0x367603[_0x3b8263(0x115)]['id'][_0x3b8263(0xf6)]===0x10)return;if(_0x367603[_0x3b8263(0x115)]['id'][_0x3b8263(0xe9)]('FatihArridho_'))return;const _0x52da72=smsg(_0xd9fcad,_0x367603,store);require(_0x3b8263(0x105))(_0xd9fcad,_0x52da72,_0x49a4af,store);}catch(_0x19d4c3){console[_0x3b8263(0xdb)](_0x19d4c3);}}),_0xd9fcad[_0x24e026(0x114)]=_0x220967=>{const _0x3ecaac=_0x24e026;if(!_0x220967)return _0x220967;if(/:\d+@/gi[_0x3ecaac(0xbc)](_0x220967)){let _0x1ec2c8=jidDecode(_0x220967)||{};return _0x1ec2c8[_0x3ecaac(0xc4)]&&_0x1ec2c8[_0x3ecaac(0xbf)]&&_0x1ec2c8[_0x3ecaac(0xc4)]+'@'+_0x1ec2c8[_0x3ecaac(0xbf)]||_0x220967;}else return _0x220967;},_0xd9fcad['ev']['on'](_0x24e026(0xdf),_0x4a0e00=>{const _0x47ba9c=_0x24e026;for(let _0x2f6a40 of _0x4a0e00){let _0x58fcf9=_0xd9fcad[_0x47ba9c(0x114)](_0x2f6a40['id']);if(store&&store[_0x47ba9c(0xe0)])store[_0x47ba9c(0xe0)][_0x58fcf9]={'id':_0x58fcf9,'name':_0x2f6a40[_0x47ba9c(0x110)]};}}),global[_0x24e026(0xcd)]='120363321780343299@newsletter',global[_0x24e026(0xb9)]=_0x24e026(0xca),global[_0x24e026(0xd8)]=_0x24e026(0xd0),global[_0x24e026(0xd3)]=_0x24e026(0x10d),_0xd9fcad['public']=global[_0x24e026(0xcc)],_0xd9fcad['ev']['on'](_0x24e026(0xf5),async _0x2b67af=>{const _0x45fdf7=_0x24e026,{connection:_0x2dc0b7,lastDisconnect:_0x257bc2}=_0x2b67af;if(_0x2dc0b7===_0x45fdf7(0x107)){const _0x2efee3=new Boom(_0x257bc2?.[_0x45fdf7(0xc3)])?.[_0x45fdf7(0x10a)]['statusCode'];console['log'](color(_0x257bc2[_0x45fdf7(0xc3)],'deeppink'));if(_0x257bc2[_0x45fdf7(0xc3)]=='')process[_0x45fdf7(0xfe)]();else{if(_0x2efee3===DisconnectReason[_0x45fdf7(0x103)])console[_0x45fdf7(0xdb)](color(_0x45fdf7(0x10b))),process[_0x45fdf7(0xfe)]();else{if(_0x2efee3===DisconnectReason[_0x45fdf7(0xc0)])console[_0x45fdf7(0xdb)](color('[SYSTEM]','white'),color(_0x45fdf7(0xd1),'deeppink')),process[_0x45fdf7(0xfe)]();else{if(_0x2efee3===DisconnectReason[_0x45fdf7(0xf0)])console[_0x45fdf7(0xdb)](color('[SYSTEM]',_0x45fdf7(0xed)),color('Connection\x20lost,\x20trying\x20to\x20reconnect',_0x45fdf7(0xf4))),process[_0x45fdf7(0xfe)]();else{if(_0x2efee3===DisconnectReason['connectionReplaced'])console[_0x45fdf7(0xdb)](color(_0x45fdf7(0xcb))),_0xd9fcad[_0x45fdf7(0xf2)]();else{if(_0x2efee3===DisconnectReason[_0x45fdf7(0xd6)])console[_0x45fdf7(0xdb)](color('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.')),_0xd9fcad[_0x45fdf7(0xf2)]();else{if(_0x2efee3===DisconnectReason[_0x45fdf7(0xfa)])console[_0x45fdf7(0xdb)](color(_0x45fdf7(0x113))),await surzstart();else _0x2efee3===DisconnectReason['timedOut']&&(console[_0x45fdf7(0xdb)](color('Connection\x20TimedOut,\x20Reconnecting...')),surzstart());}}}}}}}else{if(_0x2dc0b7===_0x45fdf7(0xbd))console[_0x45fdf7(0xdb)](color('Menghubungkan\x20.\x20.\x20.\x20'));else _0x2dc0b7===_0x45fdf7(0xc6)&&(_0xd9fcad[_0x45fdf7(0xe4)](global[_0x45fdf7(0xcd)]),_0xd9fcad[_0x45fdf7(0xe4)](global[_0x45fdf7(0xb9)]),_0xd9fcad['newsletterFollow'](global['idch3']),_0xd9fcad[_0x45fdf7(0xe4)](global['idch4']),console['log'](color(_0x45fdf7(0xe2))));}}),_0xd9fcad[_0x24e026(0xef)]=(_0x1c315d,_0x2beb6b,_0x4b9810='',_0x523ec6)=>_0xd9fcad[_0x24e026(0xc7)](_0x1c315d,{'text':_0x2beb6b,..._0x523ec6},{'quoted':_0x4b9810}),_0xd9fcad[_0x24e026(0xe8)]=async _0x316630=>{const _0x574892=_0x24e026;let _0x2323bd=(_0x316630[_0x574892(0x10f)]||_0x316630)['mimetype']||'',_0x204a19=_0x316630[_0x574892(0xdc)]?_0x316630[_0x574892(0xdc)]['replace'](/Message/gi,''):_0x2323bd['split']('/')[0x0];const _0x11445c=await downloadContentFromMessage(_0x316630,_0x204a19);let _0x5e5f62=Buffer[_0x574892(0xff)]([]);for await(const _0x80c81d of _0x11445c){_0x5e5f62=Buffer[_0x574892(0xcf)]([_0x5e5f62,_0x80c81d]);}return _0x5e5f62;},_0xd9fcad['ev']['on'](_0x24e026(0xdd),_0x5405a3),_0xd9fcad;}surzstart();let file=require['resolve'](__filename);function _0x5cc1(){const _0x1732af=['contacts.update','contacts','messages','Bot\x20Berhasil\x20Tersambung','1846605LjLsYi','newsletterFollow','@hapi/boom','status@broadcast','session','downloadMediaMessage','startsWith','requestPairingCode','ephemeralMessage','bind','white','1376lSSZxh','sendText','connectionLost','createInterface','logout','type','deeppink','connection.update','length','@whiskeysockets/baileys','clear','BAE5','restartRequired','6016112KivJPJ','messages.upsert','Starting...','exit','from','trim','10317356AdIISd','version','badSession','templateMessage','./Megumi.js','Suzz:\x20Codee\x20Lu\x20:\x20','close','\x20\x1b[1;32mupdated!\x1b[0m','10284066hdEFJd','output','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','3317649OCJAUN','120363321780343299@newsletter','fromMe','msg','notify','20.0.04','question','Restart\x20Required,\x20Restarting...','decodeJid','key','1160600BZwIvy','buttonsMessage','./lib/color','idch2','keys','cache','test','connecting','remoteJid','server','connectionClosed','https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json','20015yZnMrw','error','user','Chrome','open','sendMessage','watchFile','store','120363321780343299@newsletter','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','status','idch1','public','concat','120363321780343299@newsletter','Connection\x20closed,\x20reconnecting...','\x1b[0;32m','idch4','message','silent','loggedOut','./lib/myfunction','idch3','9diDAtP','fatal','log','mtype','creds.update','child'];_0x5cc1=function(){return _0x1732af;};return _0x5cc1();}require('fs')[_0x5856a8(0xc8)](file,()=>{const _0x4d8142=_0x5856a8;require('fs')['unwatchFile'](file),console[_0x4d8142(0xdb)](_0x4d8142(0xd2)+__filename+_0x4d8142(0x108)),delete require[_0x4d8142(0xbb)][file],require(file);});
