$(document).ready(function() {
    slider();
    $('#home').hover(function() {
        $('#h-home').show();
    }, function() {
        $('#h-home').hide();
    });
});

function slider() {
    var sliderUl = $('#slider');
    var sliderWidth = 960;
    var sliderLisLens = sliderUl.find('li').length;
    var sliderBtn = $('#slider-btn');
    var index = 0;
    var animateSpeed = 200;
    var intervalTime = 4000;

    sliderUl.css({
        width: sliderLisLens  * sliderWidth + 'px',
        left: '-960px'
    });
    sliderUl.find('img').css('min-width', '960px');
    activeBtn(index);

    //添加按钮效果
    sliderBtn.find('li').on('click', function() {
        var newLeft = ($(this).index() + 1) * (-960) + "px";
        sliderUl.animate({'left': newLeft}, animateSpeed);
        index = $(this).index();
        activeBtn(index);
    });

    //轮播间隔
    var setIntervalID = setInterval(moveNext, intervalTime);

    //鼠标悬停停止轮播
    sliderUl.parent().hover(function() {
        clearInterval(setIntervalID);
    }, function() {
        setIntervalID = setInterval(moveNext, intervalTime);
    });

    //显示按扭
    function activeBtn() {
        sliderBtn.find('li').eq(index).addClass('select').siblings().removeClass('select');
    }

    function moveNext() {
        var currentLeft = parseInt(sliderUl.css('left'));
        if (currentLeft === - (sliderLisLens - 2) * sliderWidth) {
            //sliderUl.animate({left: '0px'}, animateSpeed);
            sliderUl.css('left', '0px');
        } //else {
            //sliderAnimate(-sliderWidth);
       // }
        sliderAnimate(-sliderWidth);
        if(index == sliderLisLens - 3) {
            index = 0;
        } else {
            index ++;
        }
        activeBtn(index);
    }

    function sliderAnimate(width) {
        var newLeft = parseInt(sliderUl.css('left')) + width + "px";
        sliderUl.animate({left: newLeft}, animateSpeed);
    }
}

