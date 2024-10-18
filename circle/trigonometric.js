// 三角関数について
function setup(){
    createCanvas(600, 600);
    background(255);
    stroke(1);
    strokeWeight(5);
    // x: 横、y:　縦
    line(0, width / 2, width, height / 2) // 横線
    line(height / 2, 0, width / 2, height) // 縦線
    // 座標を決める（width / 2, hegith /2 を (0, 0)とする）
    let centerX = width / 2
    let centerY = height / 2
    translate(centerX, centerY);

    let angle = 0; // (0,0)からの角度
    let radius = 200; // 円の半径 == 斜辺

    let [lineX, lineY] = trigonometric(radius, angle)
    // ここまで
    fill(0, 255, 255);
    ellipse(lineX, lineY, 20);

    textSize(16);
    text(`X: ${nf(lineX, 1, 2)}`, 10, 20);  // X座標を表示
    text(`Y: ${nf(lineY, 1, 2)}`, 10, 40);  // Y座標を表示
}


// 三角関数を使っている箇所（ラジアン（角度）と斜辺からsin(縦の長さ)、cos(横の長さ)を戻している）
function trigonometric(radius, angle){
    let x = radius * sin(angle) // 横
    let y = radius * cos(angle) // 縦
    return [x, y];
}