select sigla, nome from estados
where regiao = 'sul';

select nome from estados
where populacao >= 10
order by populacao;
-- Order by vai selecionar na ordem crescente. 
--se quiser ordem decrescente, é necessário selecionar 
--a opção 'desc' depois de 'populacao'.

select * from `estados`;

delete from `estados` where sigla = 'NV';