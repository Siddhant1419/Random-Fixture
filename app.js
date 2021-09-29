let btn = document.getElementById('btn');
let output = document.getElementById('output');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let fixtures = ['Arsenal','Manchester City','Liverpool','Chelsea','Manchester United',
'Tottenham','Leicester','Real Madrid','Barcelona','Athletico Madrid','Bayern Munich',
'Borussia Dortmund','Juventus','Inter Milan','AC Milan','Napoli','Roma','Paris Saint Germain','Lyon']

btn.addEventListener('click',function(){
    let rf1 = fixtures[Math.floor(Math.random() * fixtures.length)]
    output.innerHTML = rf1;
    output1.innerHTML = "VS"
    fixture_2(rf1);
})

function fixture_2(rf1){
    var rf2 = fixtures[Math.floor(Math.random() * fixtures.length)]
    if (rf2 == rf1){
        rf2 = fixtures[Math.floor(Math.random() * fixtures.length)];
        output2.innerHTML = rf2;
    } else{
        output2.innerHTML = rf2;
    }
}