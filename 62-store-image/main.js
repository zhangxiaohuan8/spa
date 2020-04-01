$(function(){
    var $url=$('input[type="text"]'),
        $btnSave=$('input[type="button"]'),
        $img=$('img'),
        $tmpImg=$('<img>');
    $btnSave.click(function(){
        var url=$url.val();
        if(url==='') return;
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);
    })
    $tmpImg.load(function(){
        var can=$('<canvas>').get(0);
        var ctx=can.getContext("2d");
        can.width=$tmpImg.get(0).width;
        can.height=$tmpImg.get(0).height;
        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);
        var str=can.toDataURL();
        window.localStorage.setItem('img',str);
        var strImg=window.localStorage.getItem('img');
        $img.attr('src',strImg);
    })

})