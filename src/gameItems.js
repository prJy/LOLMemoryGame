var gameItems = {
    pickerTier : {
        typeName: CONSTANTS.SELECT,
        id: settings.tierPickerName,
        onchange: function(selectedItem, i){
            game.setCurrentTier(this.value);
            alert("done");
        }
    }
    
}
