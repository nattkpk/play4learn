/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info('Roofs Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.room.area.onEnter("hallZone").subscribe(() => {
        WA.room.hideLayer("roofHall"); 
    });
    WA.room.area.onLeave("hallZone").subscribe(() => {
        WA.room.showLayer("roofHall");
    });

    WA.room.area.onEnter("roomsZone").subscribe(() => {
        WA.room.hideLayer("roofRooms"); 
        WA.room.hideLayer("logo-LearningCenter"); 
    });
    WA.room.area.onLeave("roomsZone").subscribe(() => {
        WA.room.showLayer("roofRooms");
        WA.room.showLayer("logo-LearningCenter");
    });

    WA.room.area.onEnter("1").subscribe(() => {
        WA.room.hideLayer("above/aboveRoom1-Front"); 
    });
    WA.room.area.onLeave("1").subscribe(() => {
        WA.room.showLayer("above/aboveRoom1-Front");
    });

    WA.room.area.onEnter("2").subscribe(() => {
        WA.room.hideLayer("above/aboveRoom2-Front"); 
    });
    WA.room.area.onLeave("2").subscribe(() => {
        WA.room.showLayer("above/aboveRoom2-Front");
    });

    WA.room.area.onEnter("3").subscribe(() => {
        WA.room.hideLayer("above/aboveRoom3-Front"); 
    });
    WA.room.area.onLeave("3").subscribe(() => {
        WA.room.showLayer("above/aboveRoom3-Front");
    });

    WA.room.area.onEnter("4").subscribe(() => {
        WA.room.hideLayer("above/aboveRoom4-Front"); 
    });
    WA.room.area.onLeave("4").subscribe(() => {
        WA.room.showLayer("above/aboveRoom4-Front");
    });

    WA.room.area.onEnter("5").subscribe(() => {
        WA.room.hideLayer("above/aboveRoom5-Front"); 
    });
    WA.room.area.onLeave("5").subscribe(() => {
        WA.room.showLayer("above/aboveRoom5-Front");
    });

    WA.room.area.onEnter("6").subscribe(() => {
        WA.room.hideLayer("above/aboveRoom6-Front"); 
    });
    WA.room.area.onLeave("6").subscribe(() => {
        WA.room.showLayer("above/aboveRoom6-Front");
    });

    /*
    WA.room.onEnterLayer("doorstep/zone_office").subscribe(() => {
        const players = WA.players.list();
        console.log("players");
        console.log(players);
        let admin: any;
        for (const player of players) {
            console.log(`Player ${player.name} is near you`);
            console.log(player);
            console.log(player.state.outlineColor);
            if(player.state._outlineColor == 1780289) {
                admin++
            }
        }
        if(admin != 0) {
            console.log("There is no admin");
        }
    }); 
      */
}).catch(e => console.error(e));

export {}
