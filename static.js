var hidebtn = document.getElementById('hidebtn');
var stillsec = document.getElementById('stillsec');
hidebtn === null || hidebtn === void 0 ? void 0 : hidebtn.addEventListener('click', function () {
    if (stillsec.style.display == 'block') {
        stillsec.style.display = 'none';
    }
    else {
        stillsec.style.display = 'block';
    }
});
