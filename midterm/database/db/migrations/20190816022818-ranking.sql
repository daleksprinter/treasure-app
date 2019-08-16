
-- +migrate Up
CREATE TABLE ranking 
  ( 
     id   INT NOT NULL auto_increment, 
     name VARCHAR(255) NOT NULL, 
     PRIMARY KEY(id) 
  ); 
-- +migrate Down
