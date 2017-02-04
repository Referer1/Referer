# Referer

    <meta name='referrer' contenr='never'>解决防盗链</meta>

    css.js.php.tpls.images.
    解决跨域：PHP解决，因为限制前台
            写一个PHP文件，
            <?php
            //api.php?url=http://news-at.zhihu.com/api/4/news/latest
            $url = $_GET['url'];
            echo json_encode(file_get_contents($url));
            
            
            
         $.ajax({   
             url:'api.php?url=http://'
            type:'get',
            dataType:'json'
        })
            $url = $_GET['url'];
            echo json_encode(file_get_contents($url));
            
            


往页面插入HTML文件需要；
1.<link rel="stylesheet" href="">
2.<script></script>
4.注入指令这个JS插件的指令
3.<div ng-bind-html='d.body'></div>

            .when('/show/:id',{

            })
