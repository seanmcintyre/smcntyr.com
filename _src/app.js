(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-45301335-1', 'auto');ga('send', 'pageview');

var $clock = document.getElementById('clock');
var $hour = document.getElementById('hour');
var displayTime = 0;
var timeOffset = 0;

function ldZ(i) {
    if (i < 10) {i = '0' + i};
    return i;
}

function setTime() {
    let today = new Date();
    let h = timeOffset + today.getHours();
    let m = ldZ(today.getMinutes());
    let s = ldZ(today.getSeconds());
    let diameter = 156;
    let dt = h + (m/60) + (s/600);
    let fill = Math.round(dt * (diameter/24) * 100) / 100;
    let $nyc = document.getElementById('nyc').getElementsByTagName('img')[0];

    displayTime = `${h}.${m}.${s} | ${fill}`;
    $hour.innerHTML = h;
    document.body.className = `t${timeOffset + today.getHours()}`;
    document.getElementById('clock').style.strokeDasharray = `${fill} 156`;
    setTimeout(setTime, 1000);
    if ($nyc.src.indexOf(`/img/nyc-${timeOffset + today.getHours()}.png`) == -1) {
        $nyc.src = `/img/nyc-${timeOffset + today.getHours()}.png`;
    }
}

$clock.onclick = function() {
    let today = new Date();
    timeOffset = (today.getHours() + timeOffset >= 24) ? parseInt(timeOffset) - 24 : timeOffset + 1;
    document.body.className = `t${timeOffset + today.getHours()}`;
    setTime();
};

setTime();

