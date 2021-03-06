[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=true)](http://www.apache.org/licenses/LICENSE-2.0)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/UnitApi/js/badges/quality-score.png)](https://scrutinizer-ci.com/g/UnitApi/js/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/12d5c1d6b5794e8a8b193ef447cf78e4)](https://www.codacy.com/manual/tom-sapletta-com/js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=UnitApi/js&amp;utm_campaign=Badge_Grade)
[![gitter](https://badges.gitter.im/Join%20Chat.svg)][gitter]

# js
https://js.jloads.com

Libraries for apiunit implementation, works on js.jloads.com

Static files works on js.jloads.com with nginx server

## Standardy

https://whatwg.org/

webcomponents
kompilatory

    <template>
https://html.spec.whatwg.org/multipage/scripting.html#the-template-element

    
link - tylko chrome


ecma scripts modules
https://www.sitepoint.com/understanding-es6-modules/

https://exploringjs.com/es6/ch_modules.html


## Apiunit
rozwiązanie dla programistów szukających prostych rozwiązań
a nie wchodzących co chwilę w nowe technologie a potem wszelkie zmiany i konflikty sprawiają dużo pośrednich problemów

## konfiguracja
obsługiwane funkcje

+ environment:    
    + localhost
    + testing
    + stage
    + production
+ domain, zamiast podawać pełną ścieżkę,
+ target, gdzie mają być załaodowane skrypty domyślnie w head
+ delay, 
+ cache, on/off
   
    
## Korzyści

+ komfort używania wielu technologii na raz 
+ swoboda tworzenia prostego kodu
+ prosta logika, szybką rozbudowa


To nie jest zamknięte rozwiązanie, tutaj możliwe jest łatwe wzbogacenie o własne środowiskowe potrzeby.


## Funkcjonalność
możliwe jest ładowanie dynamiczne, poprzez dodawanie przez JS odpowiednich tagów dla:

+ javascript
+ link - style
+ image, file/base64
+ zagnieżdzony html, system pluginów

### kaskadowe ładowanie plików
coś więcej niż tylko łaodwanie plików, one są ładowane w dokładnie takiej samej kolejności


### Environment
zmienne w zależności od środowiska

    .env({
        "local":{
            "domain": "//localhost:63342/"
        },
        "production":{
            "domain": "//js.jloads.com/"
        }
    })

### Cache
możliwość wyłączenia cache-owania
    
    .cacheOff()



##  Wnioski
praktyka pokazuje, że najlepsze rozwiązania są proste do zrozumienia i serwisowania
apiunit składa się z kilku elementów:

+ e.js
klasa do parsowania struktury dom, wyszukuje i zwraca jeden lub więcej elementów

+ formToObject.min.js
służy do parsowania formularzy i zwracania danych w formacie json

+ response.js
pobieranie z obiektu XHR danych JSON
zwraca obiekt

+ rest.js


....


## Serwer

[forever - npm](https://www.npmjs.com/package/forever)

## PANEL PLESK

https://support.plesk.com/hc/en-us/articles/115001338265-How-to-set-up-CORS-cross-origin-resource-sharing-in-Plesk-for-Linux-

    Access-Control-Allow-Origin: [SCHEME]://[HOST]:[PORT_OPTIONAL]

+ Apache & nginx Settings for [domain]
    
+ APACHE
        Additional directives for HTTP:
        Additional directives for HTTPS:
    
    
            Header set Access-Control-Allow-Origin "*"
    
    
+ NGINX
    
        uncheck: Smart static files processing 
    
        Additional nginx directives:
            



        
          
            location ~ \.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js|html)$ {
                add_header Access-Control-Allow-Origin "*";
            }

---
[gitter]: https://gitter.im/UnitApi/community

