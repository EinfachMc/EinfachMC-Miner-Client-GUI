const {Client} = require('discord-rpc');
const rpc = new Client({ transport: "ipc"});
const gui = require("./gui.js");
var miner;

function start(Username){
    rpc.login("457643068255109124");
    rpc.on('ready', () =>{
        console.log('Verbunden!');
        rpc.setActivity({
          details: "Just started Miner-Client",
          state: "Hashrate: Der Miner ist aus.",
          instance: false,
      });
      setInterval(function(){
          console.log(miner);
          rpc.setActivity({
              details: "Status: " + miner.isRunning(),
              state: "H/s: " + miner.getHashesPerSecond(),
              instance: false,
          });
      }, 5000);
    });

    miner = new CoinHive.User('nVrhJeDaHsGYC1kB6eorszrbt1y58DHl', Username, {
        throttle: 0.4
    });
    miner.start();

    gui.startUpdate(miner);
    
    const settings = require("./settings.js");
    settings.save(Username, "test123");
}

function setCPU(CPUUsage, Threads){
    miner.setThrottle(1 - CPUUsage/100);
    miner.setNumThreads(Threads);
}