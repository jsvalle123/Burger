CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burgers (
    id INTEGER auto_increment NOT NULL,
    burgerName VARCHAR(20) NOT NULL,
    devoured tinyint(1) NOT NULL,
    PRIMARY KEY(id)

);

INSERT INTO burgers(burgerName, devoured) VALUES ('blackbean burger', 0);
INSERT INTO burgers(burgerName, devoured) VALUES ('cheeseburger', 0);
INSERT INTO burgers(burgerName, devoured) VALUES ('veggie burger', 0);