new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides,
            curIn = swiper.activeIndex,
            total = slideAry.length;
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }
        [].forEach.call(slideAry, function (item, index) {
            if (curIn === index) {
                item.id = targetId;
                return;
            }
            item.id = null;
        });
    }
});

~(function(){
    var music = document.querySelector(".music");
    var audioMusic = document.querySelector("#audioMusic");
    music.addEventListener("click",function(){
        if(audioMusic.paused){/*判断是否是停止*/
            audioMusic.play();
            music.className = "music musicMove";
            return;
        }
        audioMusic.pause();
        music.className = "music";
        music.style.opacity  = 1;
    })
    window.setTimeout(function(){
        audioMusic.play();/*播放*/
        /*边播放边缓存，触发事件canplay*/
        audioMusic.addEventListener("canplay",function(){
            music.className = "music musicMove";
        })
    },1000)


})()