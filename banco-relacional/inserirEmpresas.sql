insert into empresas (nome, cnpj)
values ('Bradesco', 989849384954), ('Vale', 9342343243), ('Cielo', 7348233793)

alter table empresas modify cnpj varchar(14);

SELECT * FROM empresas
select * from cidades

desc empresas

insert into empresas_unidades (empresa_id, cidade_id, sede)
values (4, 1, 1), (5, 3, 0), (6, 4, 0), (4, 5, 1)