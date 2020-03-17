$(function(){
    var $width=$('#width'),
        $height=$('#height'),
        $perimeter=$('#perimeter'),
        $area=$('#area');
        $form=$('form');
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    $form.submit(function(e){
        e.preventDefault();
        var w= Number($width.val()),
            h=Number($height.val());
            var p=(roundFractional(2*(w+h),2)),
            a=roundFractional(w*h,2);
            console.log(p,a);
            $perimeter.val(p);
            $area.val(a);
    });
}); 