'use strict';

class MongoProducts{
    constructor(model){
        this.model = model;
    }

    create(object){
        const categories = new this.model({
            category: object.category,
            name: object.name,
            display_name: object.display_name,
            description: object.description,
        });
        return categories.save();
    };
    get(object){
        if(object.id){
            return this.model.find({id: `${object.id}`});
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

module.exports = MongoProducts;