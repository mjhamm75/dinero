CREATE DATABASE DINERO;

CREATE TABLE public.users
(
  id              serial primary key,
  first_name      varchar(75) NOT NULL,
  last_name       varchar(75) NOT NULL,
  email           varchar(75),
  password        varchar(75),
  address         varchar(75),
  city            varchar(50),
  state           char(2),
  zip             varchar(10)
);


CREATE TABLE public.bills
(
  id                serial primary key,
  name           varchar(30) NOT NULL,
  description   varchar(125) ,
  due_date      date,
  payment        money,
  total      money
);