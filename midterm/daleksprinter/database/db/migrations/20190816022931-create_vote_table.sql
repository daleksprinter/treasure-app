
-- +migrate Up
CREATE TABLE votes 
  ( 
     id         INT NOT NULL auto_increment, 
     user       INT NOT NULL, 
     candidate  INT NOT NULL, 
     ranking    INT NOT NULL, 
     comment    TEXT, 
     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
     PRIMARY KEY(id), 
     FOREIGN KEY (user) REFERENCES users(id), 
     FOREIGN KEY (candidate) REFERENCES users(id), 
     FOREIGN KEY (ranking) REFERENCES rankings(id) 
  ); 

alter table votes add unique key unq1(user, ranking);
-- +migrate Down
