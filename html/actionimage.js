//アクション画像クラス
function ActionImage(divC,divR,divL){

    this.divC = divC;
    this.divR = divR;
    this.divL = divL;

}
// 通常画像
ActionImage.prototype.viewNormal = function(){
    this.changeView(1);
}
// 右画像(弱)
ActionImage.prototype.viewRightFrail = function(){

}
// 右画像(強)
ActionImage.prototype.viewRightStrong = function(){

}
// 左画像(弱)
ActionImage.prototype.viewLeftFrail = function(){

}
// 左画像(強)
ActionImage.prototype.viewLeftStrong = function(){

}

ActionImage.prototype.changeView = function(type){
    var c = "none";
    var r = "none";
    var l = "none";

    switch (type){
        case 1:
            c = "";
            break;
        case 2:
            r = "";
            break;
        case 3:
            l = "";
            break;
    }
    this.divC.style.display = c;
    this.divR.style.display = r;
    this.divL.style.display = l;
}
