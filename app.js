const stream = document.getElementById("stream");

function addLog() {
  const types = ["processed", "withheld", "silent"];
  const t = types[Math.floor(Math.random()*types.length)];

  const li = document.createElement("li");
  li.textContent = `${t} :: signal ${Math.random().toString(36).substring(7)}`;

  stream.prepend(li);

  if(stream.children.length > 10){
    stream.removeChild(stream.lastChild);
  }
}

setInterval(addLog, 800);

/* LATENCY */
setInterval(()=>{
  document.getElementById("latency").innerText =
    Math.floor(Math.random()*50+20)+"ms";
},1000);

/* METRICS */
function updateMetrics(){
  ["m1","m2","m3","m4"].forEach(id=>{
    let el = document.getElementById(id);
    let val = parseInt(el.innerText);
    val += Math.floor(Math.random()*10-5);
    el.innerText = val;
  });
}

setInterval(updateMetrics,2000);
