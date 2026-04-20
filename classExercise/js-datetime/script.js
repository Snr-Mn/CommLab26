

function getTheTime(){
    let now = new Date();

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    console.log( h, m, s );
    
}












// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}