CREATE TABLE Users (
    ID SERIAL PRIMARY KEY     NOT NULL,
    user_name TEXT    NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE todo(
    ID SERIAL PRIMARY KEY     NOT NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMP,
    actv_fl		boolean			NOT NULL DEFAULT true
);

INSERT INTO users(user_name, password) Values('admin', 'admin');

alter table users add CONSTRAINT usr_name_uk UNIQUE(user_name);