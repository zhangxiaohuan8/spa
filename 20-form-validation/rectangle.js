$(function(){
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    $btnCal.click(function(){
        if(!validate ('#width')||!validate('#height')) return;
        var w= Number($width.val()),
            h=Number($height.val());
            var p=(roundFractional(2*(w+h),2)),
            a=roundFractional(w*h,2);
            $perimeter.val(p);
            $area.val(a);
    });
    //1.event keypress
    //2.event argument get key value
    //3.ilegal key filter,e.preventDefault()
    $width.keypress(function(e){
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=+[\]{}|;:'",<>/?\\]/.test(e.key)){
        e.preventDefault();
        console.log(e)
        return;
    }
    //合法字符
    //允许出现在非科学计数法的数字末尾
    //允许出现在非科学计数法的数字中间
    //
    //不允许出现非科学计数法的数字前面
    //不允许出现在空文本中
    //不允许出现在负号后面
    //
    //不允许出现在科学计数法(e和E)数字末尾
    //不允许出现在科学计数法数字的前面
    //不允许出现在科学计数法数字的中间
        var pos=e.target.selectionStart,
            con=e.target.value;
        console.log(pos);
        console.log(con);
        if(e.key==='e'){
            if(pos===0||con.indexOf('e')!==-1||con.indexOf('E')!==-1){
                e.preventDefault();
                return;
            }
        }
        if(pos===1&&con.substring(0,1)==='-'){
            e.preventDefault();
            return;
        }
    })
    $height.keypress(function(e){
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=+[\]{}|;:'",<>/?\\]/.test(e.key))
        e.preventDefault();
        return;
    })
    $width.focusout(function(){
        if(!validate('#width')) $width.select();
    });
    $height.focusout(function(){
        if(!validate('#height')) $height.select();
    });
    function validate(field){
        var $data=$(field),
        $msg=$(field+'-validation-message');
        if($data.val()===''){
            $msg.html('不能为空');
            $data.html;
            return false;
        }
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值');
            $data.html;
            return false;
        }
        if(Number($data.val())<0){
            $msg.html('不能为零');
            $data.html;
            return false;
        }
        $msg.html('');
        return true;
    }
}); 