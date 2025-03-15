
$('#change-color').on('click', function() {
    $('#target').css('color', 'skyblue');
});

$('#change-text').on('click', function() {
    //文字を変更する
    $('#target').text('こんばんは！');
});

$('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
});

$('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
});