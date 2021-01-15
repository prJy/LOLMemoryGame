var game = {        
    championList : [],
    currentTier: 0,
    start: function(){
        this.setupLevelScreen();
    },
    setupLevelScreen: function(){
       var picker = builder.createObject(gameItems.pickerTier);
       builder.getElement(settings.container).appendChild(picker);
        for(var i = 0; i < settings.tierList.length; i ++){            
            let currentTier = settings.tierList[i];
            builder.createOptions(settings.tierPickerName, currentTier.text, currentTier.pairs);
        }
    },
    setCurrentTier: function(tier){
        this.currentTier = tier;
    }

}

game.start();
