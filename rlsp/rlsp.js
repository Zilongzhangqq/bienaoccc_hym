/*

软件名:燃旅视频 收益均0.3-0.5/天,满1元可提现

软件需求:提现需要绑定支付宝 实名身份证号和支付宝姓名匹配

进app后记得修改一下昵称

变量需求:


变量填写: 

变量名 soy_rlsp_data
变量值 xxx&xxx&xxx&xxx&xxx
变量示例:是否做提现任务(1代表做,其他字符代表不做)&access_token的值&user_token的值&user_id的值&抓包请求头上user-agent的值

变量注释:
抓包https://ranlv.lvfacn.com/api.php/连接含有的,在请求体里面找需要变量,user_id变量找不到就看自己邀请界面有个邀请ID就是


cron "0-59/30 * * * *"

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_rlsp.js

*/ 


const $ = new Env('燃旅视频');
const notify = $.isNode() ? require('./sendNotify') : '';

var _0xodK='jsjiami.com.v6',_0xodK_=['_0xodK'],_0x3b0d=[_0xodK,'\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x72\x6c\x73\x70\x5f\x64\x61\x74\x61','\x6c\x6f\x67','\x6e\x61\x6d\x65','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x72\x6c\x73\x70\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x67\x65\x74\x64\x61\x74\x61','\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x63\x73\x6a\x64\x5f\x70\x61\x73\x73\x77\x6f\x72\x64','\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x0a\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\x28\x55\x54\x43\x2b\x38\x29\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x55\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x2e\x30\x3b\x20\x7a\x68\x2d\x43\x4e\x3b\x20\x45\x4d\x4c\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x45\x4d\x4c\x2d\x41\x4c\x30\x30\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x30\x38\x20\x55\x43\x42\x72\x6f\x77\x73\x65\x72\x2f\x31\x31\x2e\x39\x2e\x34\x2e\x39\x37\x34\x20\x55\x57\x53\x2f\x32\x2e\x31\x33\x2e\x31\x2e\x34\x38\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x41\x6c\x69\x41\x70\x70\x28\x44\x69\x6e\x67\x54\x61\x6c\x6b\x2f\x34\x2e\x35\x2e\x31\x31\x29\x20\x63\x6f\x6d\x2e\x61\x6c\x69\x62\x61\x62\x61\x2e\x61\x6e\x64\x72\x6f\x69\x64\x2e\x72\x69\x6d\x65\x74\x2f\x31\x30\x34\x38\x37\x34\x33\x39\x20\x43\x68\x61\x6e\x6e\x65\x6c\x2f\x32\x32\x37\x32\x30\x30\x20\x6c\x61\x6e\x67\x75\x61\x67\x65\x2f\x7a\x68\x2d\x43\x4e','\x69\x6e\x64\x65\x78','\x0a\x2d\x2d\x2d\x2d\x2d\x20\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u3011\x2d\x2d\x2d\x2d\x2d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x6e\x6c\x76\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2e\x70\x68\x70\x2f','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x53\x68\x61\x72\x65\x2f\x74\x61\x73\x6b\x43\x65\x6e\x74\x65\x72','\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x3d','\x26\x75\x73\x65\x72\x5f\x74\x6f\x6b\x65\x6e\x3d','\x70\x6f\x73\x74','\u5f88\u62b1\u6b49','\x0a\u5f88\u62b1\u6b49\uff0c\u8be5\u670d\u52a1\u5668\x69\x70\u5df2\u88ab\u5e73\u53f0\u9632\u706b\u5899\u62e6\u622a\x2c\u8bf7\u505c\u6302\x33\u5929\u4ee5\u4e0a\u518d\u8bd5','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u3011\x3a\x20\u8be5\u670d\u52a1\u5668\x69\x70\u5df2\u8fdb\u5e73\u53f0\u9632\u706b\u5899\u62e6\u622a\x2c\u8bf7\u505c\u6302\x33\u5929\u4ee5\u4e0a\u518d\u8bd5','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x64\x61\x74\x61','\x74\x61\x73\x6b','\x74\x69\x74\x6c\x65','\u699c\u5355\u6295\u7968\u5956\u52b1','\x74\x6f\x5f\x6e\x75\x6d','\x6e\x75\x6d','\u770b\u89c6\u9891\u5956','\u5206\u4eab\u89c6\u9891\u5956','\x0a\u3010\u6bcf\u65e5\u4efb\u52a1\u72b6\u6001\u3011\x20\x0a\x2d\x2d\x2d\u699c\u5355\u6295\u7968\u5956\u52b1\x3a\x20\u5171','\u6b21\x2c\u73b0\u5b8c\u6210','\u6b21\x0a\x2d\x2d\x2d\u6bcf\u65e5\u770b\u89c6\u9891\u72b6\u6001\x3a\x20\u5171','\x20\u6b21\x0a\x2d\x2d\x2d\u6bcf\u65e5\u5206\u4eab\u89c6\u9891\u72b6\u6001\x3a\x20\u5171','\x0a\u3010\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x6d\x73\x67','\x53\x68\x61\x72\x65\x2f\x77\x69\x54\x61\x73\x6b','\u70b9\u8d5e\u89c6\u9891','\u8bc4\u8bba\u89c6\u9891','\x0a\u3010\u63d0\u73b0\u4efb\u52a1\u72b6\u6001\u3011\x3a\x20','\x52\x61\x6e\x6c\x76\x2f\x69\x6e\x64\x65\x78','\x24\x6c\x69\x73\x74\x5f\x72\x6f\x77\x73\x3d\x31\x30\x26\x70\x61\x67\x65\x3d\x31\x26\x72\x61\x6e\x64\x6f\x6d\x3d\x31','\x63\x65\x69\x6c','\x72\x61\x6e\x64\x6f\x6d','\x0a\u3010\u83b7\u53d6\u89c6\u9891\x49\x44\u3011\x3a\x20\u83b7\u53d6\u5931\u8d25','\x26\x75\x75\x69\x64\x3d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x32\x26\x6d\x65\x6d\x62\x65\x72\x5f\x69\x64\x3d\x30\x26\x76\x69\x64\x65\x6f\x5f\x69\x64\x3d','\x26\x72\x65\x64\x6f\x75\x62\x6c\x65\x3d\x31\x26\x74\x6f\x5f\x75\x73\x65\x72\x5f\x69\x64\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x6e\x6c\x76\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2e\x70\x68\x70\x2f\x43\x6f\x6d\x6d\x6f\x6e\x2f\x70\x76\x6c\x6f\x67','\x2a\x2f\x2a','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x68\x74\x74\x70\x3a\x2f\x2f\x72\x61\x6e\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d','\x63\x6f\x6d\x2e\x74\x65\x6e\x63\x65\x6e\x74\x2e\x6d\x6d','\x63\x72\x6f\x73\x73\x2d\x73\x69\x74\x65','\x63\x6f\x72\x73','\x65\x6d\x70\x74\x79','\x68\x74\x74\x70\x3a\x2f\x2f\x72\x61\x6e\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d\x2f\x70\x6c\x61\x79\x2e\x68\x74\x6d\x6c\x3f\x76\x69\x64\x65\x6f\x69\x64\x3d','\x26\x74\x6f\x5f\x75\x73\x65\x72\x5f\x69\x64\x3d','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x0a\u3010\u89c2\u770b\u5206\u4eab\u3011\x3a\x20','\x2c\u5206\u4eab\u6b21\u6570\x20\x2b\x31\x20','\x0a\u3010\u89c2\u770b\u5206\u4eab\u3011\x3a\x20\u8bb0\u5f55\u5931\u8d25','\x43\x6f\x6d\x6d\x6f\x6e\x2f\x70\x76\x6c\x6f\x67','\x26\x63\x6c\x69\x65\x6e\x74\x3d\x31\x26\x6d\x65\x6d\x62\x65\x72\x5f\x69\x64\x3d','\x26\x72\x65\x64\x6f\x75\x62\x6c\x65\x3d\x31\x26\x76\x69\x64\x65\x6f\x5f\x69\x64\x3d','\u60a8\u7684\u8bbf\u95ee\u88ab\u963b\u65ad','\u3011\x3a\x20\u8be5\u670d\u52a1\u5668\x69\x70\u5df2\u88ab\u5e73\u53f0\u9632\u706b\u5899\u62e6\u622a\x2c\u8bf7\u505c\u6302\x33\u5929\u4ee5\u4e0a\u518d\u8bd5','\x20\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25','\x0a\u3010\u770b\u89c6\u9891\u5956\u52b1\u3011\x3a\x20','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x0a\u3010\u770b\u89c6\u9891\u5956\u52b1\u3011\x3a\x20\u8bb0\u5f55\u5931\u8d25','\x52\x63\x68\x61\x72\x74\x73\x2f\x67\x6f\x56\x6f\x74\x65','\x26\x69\x73\x5f\x61\x63\x74\x3d\x31\x26\x6e\x75\x6d\x3d\x31\x26\x76\x69\x64\x65\x6f\x5f\x69\x64\x3d','\x26\x63\x68\x61\x72\x74\x73\x5f\x69\x64\x3d','\x0a\u3010\u6295\u7968\u7ed3\u679c\u3011\x3a\x20','\x52\x61\x6e\x6c\x76\x2f\x63\x68\x65\x63\x6b\x50\x72\x61\x69\x73\x65','\x26\x76\x69\x64\x65\x6f\x5f\x69\x64\x3d','\x26\x6c\x69\x6b\x65\x5f\x72\x61\x6e\x3d\x31','\x0a\u3010\u70b9\u8d5e\u7ed3\u679c\u3011\x3a\x20','\u5144\u5f1f\x2c\u6211\u6765\u4e86','\u770b\u5230\u8fd9\u91cc\u6211\u6beb\u4e0d\u72b9\u8c6b\u7684\u8d5e\u4e86\x21','\u611f\u8c22\u7684\u5206\u4eab','\u5f00\u59cb\u8fd0\u52a8\u8d77\u6765\uff01','\u597d\u55e8\u54df\x2c\u5c31\u662f\u8fd9\u4e2a\u611f\u89c9','\u6765\u4e86\x2c\u6765\u4e86\x2e','\u4e00\u8d77\u6765\x2c\u55e8\u8d77\u6765','\u54b1\u4e5f\u4e0d\u77e5\u9053','\u597d\u6d6a\x2c\u5df2\u5230\u8fbe\u5dc5\u5cf0','\x52\x61\x6e\x6c\x76\x2f\x61\x64\x64\x43\x6f\x6d\x6d\x65\x6e\x74\x73','\x26\x63\x6f\x6e\x74\x65\x6e\x74\x3d','\x0a\u3010\u8bc4\u8bba\u7ed3\u679c\u3011\x3a\x20','\x52\x63\x68\x61\x72\x74\x73\x2f\x69\x6e\x64\x65\x78','\x26\x70\x61\x67\x65\x3d\x31','\x0a\u3010\u6295\u7968\u699c\u5355\u3011\x3a\x20','\x52\x63\x68\x61\x72\x74\x73\x2f\x73\x70\x65\x52\x61\x6e\x6b','\x26\x69\x64\x3d','\x26\x70\x61\x67\x65\x3d\x31\x26\x6c\x69\x73\x74\x5f\x72\x6f\x77\x73\x3d\x31\x30\x26\x70\x74\x69\x6d\x65\x3d\x26\x6d\x65\x6d\x62\x65\x72\x5f\x69\x64\x3d','\x26\x72\x61\x6e\x3d\x31','\x76\x69\x64\x65\x6f','\x73\x70\x65\x5f\x74\x61\x67','\x52\x63\x68\x61\x72\x74\x73\x2f\x73\x70\x65\x56\x69\x64\x65\x6f','\x26\x70\x61\x67\x65\x3d\x31\x26\x6c\x69\x73\x74\x5f\x72\x6f\x77\x73\x3d\x39\x26\x69\x64\x3d','\x26\x73\x70\x65\x5f\x74\x61\x67\x3d','\x26\x6d\x65\x6d\x62\x65\x72\x5f\x69\x64\x3d','\x0a\u3010\u56de\u53bb\u699c\u5355\u89c6\u9891\u3011\x3a\x20\u6ca1\u6709\u83b7\u53d6\u5230\u6570\u636e','\x52\x63\x68\x61\x72\x74\x73\x2f\x67\x65\x74\x4c\x6f\x74\x74\x65\x72\x79','\x72\x61\x6e\x6c\x76\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x6e\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d','\x7b\x22\x61\x63\x63\x65\x73\x73\x5f\x74\x6f\x6b\x65\x6e\x22\x3a\x22','\x22\x2c\x22\x75\x73\x65\x72\x5f\x74\x6f\x6b\x65\x6e\x22\x3a\x22','\x0a\u3010\u8f6c\u76d8\u3011\x3a\x20','\x53\x68\x61\x72\x65\x2f\x77\x69\x74\x68\x64\x72\x61\x77','\x0a\u3010\u5f53\u524d\u8d26\u53f7\u3011\x3a\x20\x0a\u53ef\u7528\u4f59\u989d\x3a\x20','\x62\x61\x6c\x61\x6e\x63\x65','\x20\u5143\x0a\u53ef\u63d0\u73b0\u989d\u5ea6\x3a\x20','\x6c\x69\x6e\x65\x73','\x0a\u3010\u5f53\u524d\u8d26\u53f7\u3011\x3a\x20','\x26\x61\x6d\x6f\x75\x6e\x74\x3d','\x26\x69\x73\x5f\x61\x63\x74\x3d\x31','\x0a\u3010\u63d0\u73b0\x31\u5143\u3011\x3a\x20','\x0a\u3010\u8d26\u53f7','\x2d\x2d\u63d0\u73b0\u3011\x3a\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x6e\x6c\x76\x2e\x6c\x76\x66\x61\x63\x6e\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2e\x70\x68\x70\x2f\x53\x68\x61\x72\x65\x2f\x77\x61\x6c\x6c\x65\x74','\x26\x74\x79\x70\x65\x3d\x32\x26\x70\x61\x67\x65\x3d\x31\x26\x6c\x69\x73\x74\x5f\x72\x6f\x77\x73\x3d\x32\x30','\x0a\u3010\u63d0\u73b0\u8bb0\u5f55\u3011\x3a\x20','\u63d0\u73b0\u91d1\u989d\x3a\x20','\x61\x6d\x6f\x75\x6e\x74','\u63d0\u73b0\u65f6\u95f4\x3a\x20','\x63\x72\x65\x61\x74\x65\x5f\x74\x69\x6d\x65','\u6d41\u6c34\u8d26\u53f7\x3a\x20','\x73\x65\x72\x69\x61\x6c\x6e\x75\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x67\x7a\x69\x70','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x31\x2e\x30','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x6a\x73\x43\x6a\x69\x61\x74\x6d\x51\x69\x2e\x63\x6f\x6d\x2e\x43\x76\x36\x54\x58\x77\x75\x7a\x71\x74\x47\x43\x4d\x3d\x3d'];function _0x5226(_0x33a47a,_0x48f1ab){_0x33a47a=~~'0x'['concat'](_0x33a47a['slice'](0x0));var _0x5d1cbd=_0x3b0d[_0x33a47a];return _0x5d1cbd;};(function(_0x581a55,_0x45a4ee){var _0x5dd556=0x0;for(_0x45a4ee=_0x581a55['shift'](_0x5dd556>>0x2);_0x45a4ee&&_0x45a4ee!==(_0x581a55['pop'](_0x5dd556>>0x3)+'')['replace'](/[CtQCTXwuzqtGCM=]/g,'');_0x5dd556++){_0x5dd556=_0x5dd556^0xc391b;}}(_0x3b0d,_0x5226));let subTitle='',app_rlsp_data=[];!(async()=>{if($[_0x5226('0')]()){if(!process[_0x5226('1')][_0x5226('2')]){console[_0x5226('3')]('\x0a\u3010'+$[_0x5226('4')]+_0x5226('5'));return;}if(process[_0x5226('1')][_0x5226('2')]&&process[_0x5226('1')][_0x5226('2')][_0x5226('6')]('\x40')>-0x1){app_soy_rlsp_data=process[_0x5226('1')][_0x5226('2')][_0x5226('7')]('\x40');}else if(process[_0x5226('1')][_0x5226('2')]&&process[_0x5226('1')][_0x5226('2')][_0x5226('6')]('\x0a')>-0x1){app_soy_rlsp_data=process[_0x5226('1')][_0x5226('1')][_0x5226('2')][_0x5226('7')]('\x0a');}else if(process[_0x5226('1')][_0x5226('2')]&&process[_0x5226('1')][_0x5226('2')][_0x5226('6')]('\x23')>-0x1){app_soy_rlsp_data=process[_0x5226('1')][_0x5226('2')][_0x5226('7')]('\x23');}else{app_soy_rlsp_data=process[_0x5226('1')][_0x5226('2')][_0x5226('7')]();};}else{if(!$[_0x5226('8')](_0x5226('2'))){console[_0x5226('3')]('\x0a\u3010'+$[_0x5226('4')]+_0x5226('9'));return;}if($[_0x5226('8')](_0x5226('2'))&&$[_0x5226('8')](_0x5226('2'))[_0x5226('6')]('\x40')>-0x1){app_soy_rlsp_data=$[_0x5226('8')](_0x5226('2'))[_0x5226('7')]('\x40');}else if($[_0x5226('8')](_0x5226('2'))&&$[_0x5226('8')](_0x5226('2'))[_0x5226('6')]('\x0a')>-0x1){app_soy_rlsp_data=$[_0x5226('8')](_0x5226('2'))[_0x5226('7')]('\x0a');}else if($[_0x5226('8')](_0x5226('2'))&&$[_0x5226('8')](_0x5226('2'))[_0x5226('6')]('\x23')>-0x1){app_soy_rlsp_data=$[_0x5226('8')](_0x5226('2'))[_0x5226('7')]('\x23');}else{app_soy_rlsp_data=$[_0x5226('8')](_0x5226('2'))[_0x5226('7')]();};}console[_0x5226('3')](_0x5226('a')+app_soy_rlsp_data[_0x5226('b')]+_0x5226('c'));console[_0x5226('3')](_0x5226('d')+new Date(new Date()[_0x5226('e')]()+new Date()[_0x5226('f')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5226('10')]()+_0x5226('11'));for(i=0x0;i<app_soy_rlsp_data[_0x5226('b')];i++){reflect_task=app_soy_rlsp_data[i][_0x5226('7')]('\x26')[0x0];access_token=app_soy_rlsp_data[i][_0x5226('7')]('\x26')[0x1];user_token=app_soy_rlsp_data[i][_0x5226('7')]('\x26')[0x2];user_id=app_soy_rlsp_data[i][_0x5226('7')]('\x26')[0x3];soy_rlsp_UA=app_soy_rlsp_data[i][_0x5226('7')]('\x26')[0x4];if(!soy_rlsp_UA){soy_rlsp_UA=_0x5226('12');}$[_0x5226('13')]=i+0x1;console[_0x5226('3')](_0x5226('14')+$[_0x5226('13')]+_0x5226('15'));host=_0x5226('16');await rl_taskCenter(0x1);await rl_rmbd();await rl_taskCenter(0x0);}if(notify){if(subTitle){await notify[_0x5226('17')]($[_0x5226('4')],subTitle);}}})()[_0x5226('18')](_0xabb97a=>$[_0x5226('19')](_0xabb97a))[_0x5226('1a')](()=>$[_0x5226('1b')]());function rl_taskCenter(_0x2476d6){let _0x2acafd=Post_request(_0x5226('1c'),_0x5226('1d')+access_token+_0x5226('1e')+user_token);return new Promise((_0x36bea4,_0x1bdfee)=>{$[_0x5226('1f')](_0x2acafd,async(_0x4979ec,_0x5ac014,_0x167312)=>{if(_0x167312[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x4979ec){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x115514=JSON[_0x5226('25')](_0x167312);if(_0x115514[_0x5226('26')]==0x0){for(task_list of _0x115514[_0x5226('27')][_0x5226('28')]){if(task_list[_0x5226('29')][_0x5226('6')](_0x5226('2a'))>-0x1){bd_to=task_list[_0x5226('2b')];bd=task_list[_0x5226('2c')];}if(task_list[_0x5226('29')][_0x5226('6')](_0x5226('2d'))>-0x1){sp_to=task_list[_0x5226('2b')];sp=task_list[_0x5226('2c')];}if(task_list[_0x5226('29')][_0x5226('6')](_0x5226('2e'))>-0x1){fx_to=task_list[_0x5226('2b')];fx=task_list[_0x5226('2c')];}}if(_0x2476d6==0x0){console[_0x5226('3')](_0x5226('2f')+bd+_0x5226('30')+bd_to+_0x5226('31')+sp+_0x5226('30')+sp_to+_0x5226('32')+fx+_0x5226('30')+fx_to+'\u6b21');subTitle+=_0x5226('2f')+bd+_0x5226('30')+bd_to+_0x5226('31')+sp+_0x5226('30')+sp_to+_0x5226('32')+fx+_0x5226('30')+fx_to+'\u6b21';}else{await rl_wiTask();await rl_Videolist();}}else{console[_0x5226('3')](_0x5226('33')+_0x115514[_0x5226('34')]);}}}_0x36bea4();});});}function rl_wiTask(){let _0x5ecbee=Post_request(_0x5226('35'),_0x5226('1d')+access_token+_0x5226('1e')+user_token);return new Promise((_0x18a118,_0x1df69d)=>{$[_0x5226('1f')](_0x5ecbee,async(_0x39d92c,_0x2fba31,_0x590ada)=>{if(_0x590ada[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x39d92c){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x5630b7=JSON[_0x5226('25')](_0x590ada);if(_0x5630b7[_0x5226('26')]==0x0){for(wiTask_list of _0x5630b7[_0x5226('27')]){if(wiTask_list[_0x5226('29')][_0x5226('6')](_0x5226('36'))>-0x1){dz_to=wiTask_list[_0x5226('2b')];dz=wiTask_list[_0x5226('2c')];}if(wiTask_list[_0x5226('29')][_0x5226('6')](_0x5226('37'))>-0x1){pl_to=wiTask_list[_0x5226('2b')];pl=wiTask_list[_0x5226('2c')];}}}else{console[_0x5226('3')](_0x5226('38')+_0x5630b7[_0x5226('34')]);}}}_0x18a118();});});}function rl_Videolist(){return new Promise((_0x50cc74,_0x2defda)=>{let _0x45a217=Post_request(_0x5226('39'),_0x5226('1d')+access_token+_0x5226('1e')+user_token+_0x5226('3a'));$[_0x5226('1f')](_0x45a217,async(_0x2bf82d,_0x4de99d,_0xd05c47)=>{if(_0xd05c47[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{let _0x2fe402=JSON[_0x5226('25')](_0xd05c47);if(_0x2fe402[_0x5226('26')]==0x0){let _0x13e55f=_0x2fe402[_0x5226('27')][_0x5226('27')][Math[_0x5226('3b')](Math[_0x5226('3c')]()*0x9)]['\x69\x64'];if(!_0x13e55f){console[_0x5226('3')](_0x5226('3d'));}else{if(sp_to<sp){await rl_ksp(_0x13e55f);}if(fx_to<fx){await rl_sfx(_0x13e55f);}if(reflect_task==0x1){if(dz_to<dz){await rl_dz(_0x13e55f);}if(pl_to<pl){await rl_pl(_0x13e55f);}}if(bd_to<bd){await rl_rmbd();}}}else{console[_0x5226('3')](_0x5226('3d'));}}_0x50cc74();});});}function rl_sfx(_0x2a76f5){let _0x2ee518=_0x5226('1d')+access_token+_0x5226('3e')+_0x2a76f5+_0x5226('3f')+user_id;let _0x1f254f={'\x75\x72\x6c':_0x5226('40'),'\x68\x65\x61\x64\x65\x72\x73':{'content-length':_0x2ee518[_0x5226('b')],'accept':_0x5226('41'),'user-agent':soy_rlsp_UA,'content-type':_0x5226('42'),'origin':_0x5226('43'),'x-requested-with':_0x5226('44'),'sec-fetch-site':_0x5226('45'),'sec-fetch-mode':_0x5226('46'),'sec-fetch-dest':_0x5226('47'),'referer':_0x5226('48')+_0x2a76f5+_0x5226('49')+user_id,'accept-encoding':_0x5226('4a'),'accept-language':_0x5226('4b')},'\x62\x6f\x64\x79':_0x2ee518};return new Promise((_0x1a0f84,_0x5a6e1a)=>{$[_0x5226('1f')](_0x1f254f,async(_0x1532d5,_0x117ac8,_0x31baa3)=>{if(_0x31baa3[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{let _0xbd5774=JSON[_0x5226('25')](_0x31baa3);if(_0xbd5774[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('4c')+_0xbd5774[_0x5226('34')]+_0x5226('4d'));}else{console[_0x5226('3')](_0x5226('4e'));}}_0x1a0f84();});});}function rl_ksp(_0x45a44f){let _0x26fe5a=Post_request(_0x5226('4f'),_0x5226('1d')+access_token+_0x5226('1e')+user_token+_0x5226('50')+user_id+_0x5226('51')+_0x45a44f);return new Promise((_0x526175,_0x316f81)=>{$[_0x5226('1f')](_0x26fe5a,async(_0x1e58ad,_0x231781,_0x57b4f1)=>{if(_0x57b4f1[_0x5226('6')](_0x5226('52'))>-0x1){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('53'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x1e58ad){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('54');}else{let _0x416569=JSON[_0x5226('25')](_0x57b4f1);if(_0x416569[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('55')+_0x416569[_0x5226('34')]+'\x20');await $[_0x5226('56')](Math[_0x5226('57')](Math[_0x5226('3c')]()*(0x2710-0x1388+0x3e8)+0x1388));}else{console[_0x5226('3')](_0x5226('58'));}}}_0x526175();});});}function rl_tp(_0x1514c5,_0x340287){let _0x4857e5=Post_request(_0x5226('59'),_0x5226('1d')+access_token+_0x5226('1e')+user_token+_0x5226('5a')+_0x340287+_0x5226('5b')+_0x1514c5);return new Promise((_0x3d6c5b,_0x15131a)=>{$[_0x5226('1f')](_0x4857e5,async(_0xb1dc8f,_0x3ba293,_0x12c314)=>{if(_0x12c314[_0x5226('6')](_0x5226('52'))>-0x1){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('53'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0xb1dc8f){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('54');}else{let _0x30ae99=JSON[_0x5226('25')](_0x12c314);if(_0x30ae99[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('5c')+_0x30ae99[_0x5226('34')]+'\x20');}else{console[_0x5226('3')](_0x5226('5c')+_0x30ae99[_0x5226('34')]+'\x20');}}}_0x3d6c5b();});});}function rl_dz(_0x1abdff){let _0x295b2f=Post_request(_0x5226('5d'),_0x5226('1d')+access_token+_0x5226('1e')+user_token+_0x5226('5e')+_0x1abdff+_0x5226('5f'));return new Promise((_0x1ea6b2,_0x283f22)=>{$[_0x5226('1f')](_0x295b2f,async(_0x10264d,_0x1b81d6,_0x3e99c6)=>{if(_0x3e99c6[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x10264d){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x4967b1=JSON[_0x5226('25')](_0x3e99c6);if(_0x4967b1[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('60')+_0x4967b1[_0x5226('34')]+'\x20');}else{console[_0x5226('3')](_0x5226('60')+_0x4967b1[_0x5226('34')]+'\x20');}}}_0x1ea6b2();});});}function rl_pl(_0xe9e169){cy=[_0x5226('61'),_0x5226('62'),_0x5226('63'),_0x5226('64'),_0x5226('65'),_0x5226('66'),_0x5226('67'),_0x5226('68'),_0x5226('69')];xh=Math[_0x5226('3b')](Math[_0x5226('3c')]()*0x9);if(xh==0x1){content=cy[0x0];}else if(xh==0x2){content=cy[0x1];}else if(xh==0x3){content=cy[0x2];}else if(xh==0x4){content=cy[0x3];}else if(xh==0x5){content=cy[0x4];}else if(xh==0x6){content=cy[0x5];}else if(xh==0x7){content=cy[0x6];}else if(xh==0x8){content=cy[0x7];}else if(xh==0x9){content=cy[0x8];}let _0x2886d2=Post_request(_0x5226('6a'),_0x5226('1d')+access_token+_0x5226('1e')+user_token+_0x5226('5e')+_0xe9e169+_0x5226('6b')+encodeURIComponent(content));return new Promise((_0x2e08dc,_0x5b5ca9)=>{$[_0x5226('1f')](_0x2886d2,async(_0x1b69f0,_0x3aa4c6,_0x10152d)=>{if(_0x10152d[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x1b69f0){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x2d25b3=JSON[_0x5226('25')](_0x10152d);if(_0x2d25b3[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('6c')+_0x2d25b3[_0x5226('34')]+'\x20');}else{console[_0x5226('3')](_0x5226('6c')+_0x2d25b3[_0x5226('34')]+'\x20');}}}_0x2e08dc();});});}function rl_rmbd(){let _0x4d3567=Post_request(_0x5226('6d'),_0x5226('1d')+access_token+_0x5226('6e'));return new Promise((_0x83325d,_0x2eb915)=>{$[_0x5226('1f')](_0x4d3567,async(_0x569b70,_0x57e40f,_0x389ded)=>{if(_0x389ded[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x569b70){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x370e44=JSON[_0x5226('25')](_0x389ded);if(_0x370e44[_0x5226('26')]==0x0){let _0x1d3e57=_0x370e44[_0x5226('27')][_0x5226('27')][0x0]['\x69\x64'];await rl_speRank(_0x1d3e57);}else{console[_0x5226('3')](_0x5226('6f')+_0x370e44[_0x5226('34')]+'\x20');}}}_0x83325d();});});}function rl_speRank(_0x23a8b8){let _0x5327f9=Post_request(_0x5226('70'),_0x5226('1d')+access_token+_0x5226('71')+_0x23a8b8+_0x5226('72')+user_id+_0x5226('73'));return new Promise((_0x1a06bb,_0x30b068)=>{$[_0x5226('1f')](_0x5327f9,async(_0x204248,_0x49e32f,_0x39483b)=>{if(_0x39483b[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x204248){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x127841=JSON[_0x5226('25')](_0x39483b);if(_0x127841[_0x5226('26')]==0x0){Video_listid=_0x127841[_0x5226('74')][_0x5226('27')][0x0][_0x5226('75')];await rl_speVideo(_0x23a8b8,Video_listid);}else{console[_0x5226('3')](_0x5226('6f')+_0x127841[_0x5226('34')]+'\x20');}}}_0x1a06bb();});});}function rl_speVideo(_0x240a3a,_0x4fb5e2){let _0x35f9d5=Post_request(_0x5226('76'),_0x5226('1d')+access_token+_0x5226('77')+_0x240a3a+_0x5226('78')+_0x4fb5e2+_0x5226('79')+user_id+_0x5226('73'));return new Promise((_0x50c290,_0x14d04a)=>{$[_0x5226('1f')](_0x35f9d5,async(_0x370e81,_0x59739b,_0x303690)=>{if(_0x303690[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x370e81){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x1760c3=JSON[_0x5226('25')](_0x303690);if(_0x1760c3[_0x5226('26')]==0x0){let _0xe4e13f=_0x1760c3[_0x5226('27')][_0x5226('27')][Math[_0x5226('57')](Math[_0x5226('3c')]()*0xa)]['\x69\x64'];if(!_0xe4e13f){console[_0x5226('3')](_0x5226('7a'));}else{await rl_sfx(_0xe4e13f);await rl_pl(_0xe4e13f);await rl_tp(_0x240a3a,_0xe4e13f);await rl_getLottery();}}else{console[_0x5226('3')](_0x5226('6f')+_0x1760c3[_0x5226('34')]+'\x20');}}}_0x50c290();});});}function rl_getLottery(){let _0x5a6104={'\x75\x72\x6c':host+_0x5226('7b'),'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5226('7c'),'User-Agent':soy_rlsp_UA,'Content-Type':_0x5226('7d'),'origin':_0x5226('7e')},'\x62\x6f\x64\x79':_0x5226('7f')+access_token+_0x5226('80')+user_token+'\x22\x7d'};return new Promise((_0x4bbd35,_0x1820e6)=>{$[_0x5226('1f')](_0x5a6104,async(_0x1ab1f6,_0x20e9f0,_0x331fb1)=>{if(_0x331fb1[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x1ab1f6){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x1c5af4=JSON[_0x5226('25')](_0x331fb1);if(_0x1c5af4[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('81')+_0x1c5af4[_0x5226('27')][_0x5226('4')]+'\x20');}else{console[_0x5226('3')](_0x5226('81')+_0x1c5af4[_0x5226('34')]+'\x20');}}}_0x4bbd35();});});}function rl_zhxx(){let _0x2284ca=Post_request(_0x5226('82'),_0x5226('1d')+access_token+_0x5226('1e')+user_token);return new Promise((_0x1fc66d,_0x4eabce)=>{$[_0x5226('1f')](_0x2284ca,async(_0x37f18a,_0x2742b8,_0x1bf675)=>{if(_0x1bf675[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x37f18a){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x48b4f9=JSON[_0x5226('25')](_0x1bf675);if(_0x48b4f9[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('83')+_0x48b4f9[_0x5226('27')][_0x5226('84')]+_0x5226('85')+_0x48b4f9[_0x5226('27')][_0x5226('86')]+'\x20\u5143');txye=_0x48b4f9[_0x5226('27')][_0x5226('84')];txed=_0x48b4f9[_0x5226('27')][_0x5226('86')];if(txed>=txye){await rl_tx();}}else{console[_0x5226('3')](_0x5226('87')+_0x48b4f9[_0x5226('34')]+'\x20');}}}_0x1fc66d();});});}function rl_tx(){let _0x71ccc8=Post_request(_0x5226('82'),_0x5226('1d')+access_token+_0x5226('1e')+user_token+_0x5226('88')+apptxje+_0x5226('89'));return new Promise((_0x33d1d7,_0x1a3cee)=>{$[_0x5226('1f')](_0x71ccc8,async(_0x123a75,_0x1f010a,_0x51a9c6)=>{if(_0x51a9c6[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x123a75){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x1dfd73=JSON[_0x5226('25')](_0x51a9c6);if(_0x1dfd73[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('8a')+_0x1dfd73[_0x5226('34')]);subTitle+=_0x5226('8b')+$[_0x5226('13')]+_0x5226('8c')+_0x1dfd73[_0x5226('34')];}else{console[_0x5226('3')](_0x5226('8a')+_0x1dfd73[_0x5226('34')]+'\x20');}}}_0x33d1d7();});});}function rl_txjl(){return new Promise((_0x3a930c,_0x439477)=>{$[_0x5226('1f')]({'\x75\x72\x6c':_0x5226('8d'),'\x68\x65\x61\x64\x65\x72\x73':rl_headers,'\x62\x6f\x64\x79':rl_body+_0x5226('8e')},async(_0x15e94f,_0x2cf5a6,_0x36526f)=>{if(_0x36526f[_0x5226('6')](_0x5226('20'))>-0x1){console[_0x5226('3')](_0x5226('21'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('23');}else{if(_0x15e94f){console[_0x5226('3')](_0x5226('22')+$[_0x5226('13')]+_0x5226('24'));subTitle+=_0x5226('22')+$[_0x5226('13')]+_0x5226('24');}else{let _0x255bf7=JSON[_0x5226('25')](_0x36526f);if(_0x255bf7[_0x5226('26')]==0x0){console[_0x5226('3')](_0x5226('8f')+_0x255bf7[_0x5226('34')]);txcs=_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][_0x5226('b')];if(txcs==0x1){console[_0x5226('3')](_0x5226('90')+_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][0x0][_0x5226('91')]+'\x20\u5143');console[_0x5226('3')](_0x5226('92')+_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][0x0][_0x5226('93')]);console[_0x5226('3')](_0x5226('94')+_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][0x0][_0x5226('95')]+'\x0a');}else{for(let _0x90c30b=0x0;_0x90c30b<0x3;_0x90c30b++){console[_0x5226('3')](_0x5226('90')+_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][_0x90c30b][_0x5226('91')]+'\x20\u5143');console[_0x5226('3')](_0x5226('92')+_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][_0x90c30b][_0x5226('93')]);console[_0x5226('3')](_0x5226('94')+_0x255bf7[_0x5226('27')][_0x5226('27')][_0x5226('27')][_0x90c30b][_0x5226('95')]+'\x0a');}}}else{console[_0x5226('3')](_0x5226('8f')+_0x255bf7[_0x5226('34')]+'\x20');}}}_0x3a930c();});});}function Post_request(_0x42c127,_0x5853e3){return{'\x75\x72\x6c':''+host+_0x42c127,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5226('7c'),'content-type':_0x5226('96'),'accept-encoding':_0x5226('97'),'user-agent':_0x5226('98'),'content-length':_0x5853e3[_0x5226('b')]},'\x62\x6f\x64\x79':_0x5853e3};};function Get_request(_0x13093d){return{'\x75\x72\x6c':''+host+_0x13093d,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5226('7c'),'content-type':_0x5226('96'),'accept-encoding':_0x5226('97'),'user-agent':_0x5226('98')}};};function wb_qzb(_0x530f3d,_0x3795aa){var _0x7d0f05=_0x530f3d[_0x5226('6')](_0x3795aa);_0x530f3d=_0x530f3d[_0x5226('99')](0x0,_0x7d0f05);return _0x530f3d;};_0xodK='jsjiami.com.v6';


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}