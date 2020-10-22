'use strict';

class Mongo{
    constructor(model){
        this.model = model;
    }

    create(object){
        const categories = new this.model(object);
        return categories.save();
    };
    get(object){
        if(object.id){
            return this.model.find({_id: `${object.id}`});
        }else{
            return this.model.find({});
        }
    }

    update(object, id){
        return this.model.findByIdAndUpdate(id, object, {new:true})
    }

    delete(object){
        return this.model.findByIdAndDelete(object.id);
    }
}

module.exports = Mongo;