# sistemasDestribuidos

Rodando projeto:
`docker-compose up`

O endereço `locahost:8080` pode não funcionar pelo chrome forçar o HTTPS:
Possiveis soluções

1 - Abrir pelo endereço IP da localnetwork
2 - Usar modo anonimo do chrome
3 - Usar firefox


# Scaling up

docker-compose up --scale piadas=3
docker-compose up --scale comentarios=3

Comentar portas do serviço piadas, para não dar conflito nas portas

Testing: `while :; do curl piadas:7000; sleep 1; done` (dentro de um container)
