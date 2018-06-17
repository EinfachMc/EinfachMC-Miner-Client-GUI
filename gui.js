function startUpdate(miner){
    setInterval(function(){
        console.log(miner.getHashesPerSecond());
        document.getElementById('HStats').innerText = miner.getHashesPerSecond();
    }, 1000);
}



module.exports = {
    startUpdate: startUpdate
};