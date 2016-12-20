select [campoID], [campo del año de inicio], [campo lat], [campo lng] 
from prefeitura.alvara 
WHERE (extract(year from data_inicio_atividade) between 1984 and 2014 AND bairro similar to '(BATEL|CENTRO|TATUQUARA)')
AND atividade_principal_agregada 
similar to '(LANCHONETE|BAR|CHOPERIA|RESTAURANTE|OUTROS|CAFE|PIZZARIA|JOGO|PASTELERIA|PADARIA|CONFEITARIA|CHURRASCARIA|GRILL|FRANQUIA|TIPICO|MERCADO|MERCEARIA|GOURMET|CANTINA|FASTFOOD|CACHORRO QUENTE|HOTEL)' 
order by total;