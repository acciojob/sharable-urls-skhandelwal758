// your code here
var btn = document.getElementById('button');
btn.addEventListener('click', ()=>{
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var url = document.getElementById("url");
    var val = url.innerText;
    urlnew = `${val}?name=${name}&year=${year}`;
    console.log(val);
    url.innerText = urlnew;

});