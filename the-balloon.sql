create table valid_color (id serial not null primary key, color_name text, count integer);
create table invalid_color (id serial not null primary key, color_name text, count integer);

insert into invalid_color(color_name, count)values('Blue',0);
insert into invalid_color(color_name, count)values('Red',0);
insert into invalid_color(color_name, count)values('Green',0);

insert into valid_color(color_name, count)values('Lime',0);
insert into valid_color(color_name, count)values('Purple',0);
insert into valid_color(color_name, count)values('Orange',0);