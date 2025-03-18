function verifyPasscode() {
    const passcode = document.getElementById("passcode").value;
    const correctPasscode = "成本服務美味"; // 通關密碼
    const message = document.getElementById("message");

    if (passcode === correctPasscode) {
        // 驗證成功，在新分頁中開啟指定網頁
        window.open("https://ooopenlab.cc/preview/xBbpWeqHqkpuN5n4SbgZ", "_blank"); // 替換為你的目標網頁
    } else {
        // 驗證失敗，顯示警告
        message.textContent = "不要亂猜!再好好整理重點吧!";
    }
}
