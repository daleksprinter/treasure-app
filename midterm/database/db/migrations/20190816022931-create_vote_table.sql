
-- +migrate Up
CREATE TABLE vote 
  ( 
     id         INT NOT NULL auto_increment, 
     user       INT NOT NULL, 
     candidate  INT NOT NULL, 
     ranking    INT NOT NULL, 
     comment    TEXT, 
     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
     PRIMARY KEY(id), 
     FOREIGN KEY (user) REFERENCES user(id), 
     FOREIGN KEY (candidate) REFERENCES user(id), 
     FOREIGN KEY (ranking) REFERENCES ranking(id) 
  ); 
-- +migrate Down
