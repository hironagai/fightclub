var janken = -1;
var pointX = 0;
var pointY = 0;

function resetHand() {
    janken = -1;
    atti = -1;
}

//0:グー/1:チョキ/2:パー
//ret: -1:まだ/0:勝ち/1:負け/2:あいこ
function fightJanken(te) {

    console.log("--janken--");
    console.log("com:" + te);
    console.log("you:" + janken);

    if (janken == -1) {
        return -1;
    }
    if (janken == te) {
        return 2;
    }
    if (janken == 0) {
        if (te == 1) {
            return 1;
        } else {
            return 0;
        }
    }
    if (janken == 1) {
        if (te == 2) {
            return 1;
        } else {
            return 0;
        }
    }
    if (janken == 2) {
        if (te == 0) {
            return 1;
        } else {
            return 0;
        }
    }
}

//0:左/1:上/2:右/3:下
//ret: 0:不一致/1:一致
function fightAtti(comAtti) {
    var playerAtti = getAtti();

    console.log("--atti--");
    console.log("com:" + comAtti);
    console.log("you:" + playerAtti);

    if (playerAtti == comAtti) {
        return 1;
    } else {
        return 0;
    }
}

var controller = new Leap.Controller();
controller.loop(function (frame) {




    //指の数
    if (frame.hands != undefined) {

//        console.log(frame.hand(1).palmVelocity);
        //console.log(frame.fingers.length);
console.log(frame.hand[0].palmVelocity);

        switch (frame.fingers.length) {
        case 0:
            //console.log("ぐー");
            janken = 0;
            break;

        case 2:
            //console.log("ちょき");
            janken = 1;
            break;

        case 5:
            //console.log("ぱー");
            janken = 2;
            break;
        }
    }


    //一番長い指の方向ベクトルを取得
    var finger = frame.fingers[0];
    for (var i = 1; i <= 5; i++) {
        if ((frame.fingers[i] != undefined) &&
            (finger.length.toFixed(1) < frame.fingers[i].length.toFixed(1))) {
            finger = frame.fingers[i];
        }
    }
    if (finger != undefined) {
        pointX = finger.direction[0];
        pointY = finger.direction[1];
    }
});



//ret: 0:左/1:上/2:右/3:下
function getAtti() {

    var pointX_abs = Math.abs(pointX);
    var pointY_abs = Math.abs(pointY);

    if (pointX_abs > pointY_abs) {
        if (pointX > 0) {
            console.log("you:→");
            return 2;
        } else {
            console.log("you:←");
            return 0;
        }
    } else {
        if (pointY > 0) {
            console.log("you:↑");
            return 1;
        } else {
            console.log("you:↓");
            return 3;
        }
    }

}
