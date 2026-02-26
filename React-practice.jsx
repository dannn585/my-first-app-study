function Welcome() {
    const name = "名大生"; // 変数の定義

    return(
        <div className = "contaner">
            <h1>こんにちは、{name}さん！</h1>
            <p>今日は{newDate().toLocaleDateString()}です。</p>
        </div>
    );
}