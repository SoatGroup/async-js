async function main() {
    var resp1 = await fetch('test1.txt');
    if (resp1.status === 200) {
        document.body.innerHTML += (await resp1.text()) + '<br>';
    }

    var resp2 = await fetch('test2.txt');
    if (resp2.status === 200) {
        document.body.innerHTML += (await resp2.text()) + '<br>';
    }
}

main()
.then(function() {
    document.body.innerHTML += 'success';
}, function(err) {
    console.log(err);
});