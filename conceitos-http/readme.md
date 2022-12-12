# TRILHA 03

f) Conceitos de HTTP (CURSO: HTTP: Entendendo a web por baixo dos panos - Carga Horária: 14h – FONTE: ALURA)

▪ O que é HTTP?

▪ A web segura (HTTPS)

▪ Endereços sob seu domínio

▪ O cliente pede e o servidor responde

▪ Depurando a requisição HTTP

▪ Parâmetros da requisição

▪ Serviços na web com REST

▪ Por uma web mais eficiente (HTTP2)

### Status codes

 1xx - Information
 100 - Continue
 101 - Switching Protocols
 103 - Early Hints
 2xx - Successful
 200 - Ok
 3xx - Redirection
 301 - Moved permanently
 4xx - Client error
 400 - Bad request
 401 - Unauthorized
 402 - Payment required
 403 - Forbidden
 404 - Not found
 5xx - Server error
 500 - Internal server error
 502 - Bad gateway
 504 - Service unavailable
 511 - Network authentication required

[Referências W3C](https://www.w3schools.com/tags/ref_httpmessages.asp)

[Referências HTTP Cats](https://http.cat/)

[Referências HTTP Dogs](https://httpstatusdogs.com/)

### Accept header

 text/html
 text/css
 application/xml
 application/json
 image/jpeg
 image/*
 Accept:*/*

### Mime Types

 application -> application/xml,  application/pdf
 video -> video/mp4
 text -> text/plain, text/html, text/css, text/javascript
 image -> image/gif, image/png, image/jpeg
 video -> video/mp4

[Referência MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

### HTTP2

 Herda os conceitos do HTTP/1.1

 Com o HTTP/2 o uso de HTTPS acaba sendo obrigatório, e esta é uma das grandes vantagens do uso desta nova atualização do protocolo.

 Headers binários e comprimidos, com a tecnologia HPACK

 GZIP é o padrão de resposta

 Os browsers não suportam o HTTP/2 sem HTTPS, o que acaba fazendo com que o seu uso seja exclusivo em modo criptografado.
 A tecnologia HPACK é especialista em comprimir os Headers da requisições/respostas HTTP, deixando as mais leves.
 Uma das principais mudanças é que agora no HTTP/2 os dados são trafegados em binário e não mais em texto puro.

 Headers Stateful -> Headers identicos às requisições anteriores não são enviados novamente

 Server Push -> O servidor pode empurrar para o clientes certos recursos antes mesmo de serem solicitados, pois ele consegue analisar o HTML e ver o que mais é preciso para carregar a página fazendo com que não seja necessário gastar tempo pedindo todos os outros recursos.

 Multiplexing -> O Keep-Alive continua existindo no HTTP2, só que ele trouxe uma novidade. Por exemplo, se temos uma conexão TCP aberta e realizamos uma requisição, poderíamos já dar prosseguimento às próximas requisições, isso em paralelo, sem de fato ficar esperando o resultado dela, de maneira assíncrona. O Keep-Alive determina quanto tempo, por exemplo, a nossa conexão pode ficar ativa. Ou seja, não encerra essa conexão TCP. Portanto, conseguimos realizar várias requisições com a mesma conexão TCP.

### Certificado

[Certificado](./screenshots/certificate.png)
