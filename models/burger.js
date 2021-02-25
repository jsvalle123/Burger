var orm = require("../config/orm.js");

class Burger {
    getDevoured(data) {
        return data.filter(b => b.devoured === 1);
    }

    getUndevoured(data) {
        return data.filter(b => b.devoured === 0);
    }
    getColumns(ob) {
        var arr = [];
        for (var key in ob) {
            if (key != "id") {
                if (Object.hasOwnProperty.call(ob, key)) {
                    arr.push(key);
                }
            }
        }
        return arr;
    };

    getValues(ob) {
        var arr = [];
        for (var key in ob) {
            var value = ob[key];
            if (key != "id") {
                if (Object.hasOwnProperty.call(ob, key)) {
                    arr.push(value);
                }
            }
        }
        return arr;
    }
    selectAll(done) {
        orm.all("burgers", (data) => {
            console.log("burgers: ", data);
            var burgers = data.map(r => {
                return {
                    id: r.id,
                    burger_name: r.burger_name,
                    devoured: r.devoured,
                }
            })
            done(null, burgers);
        });
    };


    create(burger, done) {
        var cols = this.getColumns(burger);
        var vals = this.getValues(burger);
        orm.create("burgers", cols, vals, (data) => {
            done(null, burger);
        });
    }

    update(burger, done) {
        let condition = "id = " + burger.id;
        orm.update("burgers", burger, condition, (data) => {
            done(null, burger);
        });
    }

    delete(burger, done) {
        let condition = "id = " + burger.id;
        orm.delete("burgers", condition, (data) => {
            done(null, burger);
        });
    }

}

module.exports = Burger;
