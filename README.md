## Pré-requis

Installer [Git] et [Node.js]

## Installation

```sh
$ git clone https://github.com/SoatGroup/async-js.git async-js
$ cd async-js
$ npm install
```

## Exemple 1
Un itérateur parcourant les entiers de 0 à 10

```javascript
node ex1-iterator.js
```

## Exemple 2
Parcourir un itérable avec la boucle `for...of`

```javascript
node ex2-for-of.js
```

## Exemple 3
Création d'un générateur

```javascript
node ex3-first-generator.js
```

## Exemple 4
Appel de la fonction next avec un paramètre

```javascript
node ex4-next-param.js
```

## Exemple 5
Création d'un générateur pour la lecture de fichiers

```javascript
node ex5-gen-fs-reader.js
```

## Exemple 6
Ajout d'une fonction `run` pour parcourir le générateur

```javascript
node ex6-run-gen-fs-reader.js
```

## Exemple 7
Modification du générateur précédent afin de gérer les promesses

```javascript
node ex7-promise-gen-fs-reader.js
```

## Exemple 8
Utilisation de la librairie **co** avec les promesses

```javascript
node ex8-co-promise.js
```

## Exemple 9
Utilisation de la librairie **co** avec une fonction Thunk

```javascript
node ex9-co-thunk.js
```

## Exemple 10
Utilisation de la librairie **thunkify** pour créer une fonction Thunk

```javascript
node ex10-co-thunkify.js
```

## Exemple 11
Utilisation de **co** au sein d'un navigateur supportant les générateurs et l'api fetch

```javascript
lite-server
```
Aller à l'url [http://localhost:8080/ex11-co.html]


## Exemple 12
Utilisation de **babel** pour les navigateurs ne supportant pas les générateurs et l'api fetch

```javascript
babel ex12-script.js -o public/ex12-script-es5.js
lite-server
```
Aller à l'url [http://localhost:8080/ex12-co-babel.html]

## Exemple 13
Utilisation de **Async Await** au sein d'un navigateur supportant cette fonctionnalité ainsi que l'api fetch

```javascript
lite-server
```
Aller à l'url [http://localhost:8080/ex13-async-await.html]

## Exemple 14
Utilisation de **babel** pour les navigateurs ne supportant pas **Async Await** et l'api fetch

```javascript
babel ex14-script.js -o public/ex14-script-es5.js
lite-server
```
Aller à l'url [http://localhost:8080/ex14-async-await-babel.html]


[Node.js]: <https://nodejs.org>
[Git]: <https://git-scm.com/>
[http://localhost:8080/ex11-co.html]: <http://localhost:8080/ex11-co.html>
[http://localhost:8080/ex12-co-babel.html]: <http://localhost:8080/ex12-co-babel.html>
[http://localhost:8080/ex13-async-await.html]: <http://localhost:8080/ex13-async-await.html>
[http://localhost:8080/ex14-async-await-babel.html]: <http://localhost:8080/ex14-async-await-babel.html>