function bobby(startServers, onProfile) {
    this.servers = startServers;
    this.serverInfo = [];
    this.serverLevels = [];
    this.currentServer = 0;
    var key;
    for (key = 0; key < this.servers.length; key++) {
        var name = this.servers[key]
        var speed = onProfile(this.servers[key])
        this.serverInfo.push([name, speed]);
    }
    var max = 0
    for (key = 0; key < this.serverInfo.length; key++) {
        if (this.serverInfo[key][1] > max) {
            max = this.serverInfo[key][1];
        }
    }
    for (key = 0; key < this.serverInfo.length; key++) {
        var score = Math.round(max / this.serverInfo[key][1]);
        this.serverInfo[key][2] = score;
    }
    this.serverLevels = this.serverInfo;

    this.getServer = function() {
        if (this.currentServer == this.serverLevels.length) {
            this.currentServer = 0;
        }
        for (var key = this.currentServer; key < this.serverLevels.length; key++) {
            if (this.serverLevels[key][2] > 0) {
                var serverName = this.serverLevels[key][0];
                this.serverLevels[key][2] -= 1
                this.currentServer = key + 1
                return serverName;
            }
        }
        this.serverLevels = this.serverInfo;
        this.currentServer = 0;
        return this.getServer();
    }
}​