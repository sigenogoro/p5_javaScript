// 座標の可視化（縦線・横線）

function setup(){
    createCanvas(600, 600);
    background(255);
    // テキストサイズ
    textSize(10);

    // 座標を画面に表示
    fill(0);  // テキストの色を黒に設定
    text(`X: ${nf(10, 1, 2)}`, 10, 20);  // X座標を表示
    text(`Y: ${nf(10, 1, 2)}`, 10, 40);  // Y座標を表示

    stroke(1);
    strokeWeight(5);
    // x: 横、y:　縦
    line(0, width / 2, width, height / 2) // 横線
    line(height / 2, 0, width / 2, height)

}

function draw(){
}