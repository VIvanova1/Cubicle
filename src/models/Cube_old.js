const fs = require('fs');
const path = require('path');
const db=require('../db.json');
const uniqId = require('uniqid');

class Cube{
    constructor(name, description, imageUrl, difficultyLevel){
        this.name=name;
        this.description=description;
        this.imageUrl=imageUrl;
        this.difficultyLevel=difficultyLevel;
    }

    static save(cube){
        cube.id=uniqId();
        db.cubes.push(cube);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData);
    }
}

module.exports = Cube;