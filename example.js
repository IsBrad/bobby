var controller = new bobby(['server1', 'server2', 'server3'], getServerSpeed);

function getServerSpeed(server) {
    switch (server) {
    case 'server1':
        return 1016;
    case 'server2':
        return 3021;
    case 'server3':
        return 1512;
    }
}

controller.getServer() // returns server1
controller.getServer() // returns server2
controller.getServer() // returns server3
controller.getServer() // returns server1
controller.getServer() // returns server3
controller.getServer() // returns server1