function verifyPasscode() {
    const passcode = document.getElementById("passcode").value;
    const correctPasscode = "成本服務美味"; // 修改為新的六字密碼
    const message = document.getElementById("message");

    if (passcode === correctPasscode) {
        // 驗證成功，跳轉到指定網頁
        window.location.href = "https://ooopenlab.cc/preview/xBbpWeqHqkpuN5n4SbgZ"; // 替換為你的目標網頁
    } else {
        // 驗證失敗，顯示新的警告文字
        message.textContent = "不要亂猜!再好好整理重點吧!";
    }
}