/// Responsavel por criar todos os elementos do jogo

var builder = {
    getElement: function(elementName) {
        return document.getElementById(elementName)
    },

    createElement : function(type, propertys){
        var element = document.createElement(type);
        element.id = id;         
        this.getElement(settings.container).appendChild(element);
        return element;        
    },

    createObject : function(object){
        let obj = this.getElement(object.id);
        if(obj == null){
            obj = document.createElement(object.typeName);
            obj.setAttribute("id", object.id);            
        }
        for (let attribute in object.attributes) {
            if (object.attributes.hasOwnProperty(attribute)) {                                      
                obj.setAttribute(attribute, object.attributes[attribute]);
            }
        }
        
        if(object.onclick != null){
            obj.onclick = object.onclick;
        }

        if(object.onchange != null){
            obj.onchange = object.onchange;
        }

        return obj;
    },

    createOptions:function(parentOptionsId, text, value){
        let tierListSelect = this.getElement(settings.tierPickerName);
        let option = document.createElement("option");
        option.text = text;
        option.value = value;

        tierListSelect.appendChild(option);
    }
}