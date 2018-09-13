Os arrays são muito úteis para conter vários elementos e nos ajudam a consultar quantos elementos eles contêm. Mas há outra coisa: podemos também adicionar elementos a qualquer momento, o que resolvemos usando o método `push`. Novamente, para adicionar um elemento a um array, devemos indicar o array seguido por um '.' e o método `push` com o elemento que queremos adicionar como parâmetro. Por exemplo:


```javascript
var pertences = ["espada", "escudo", "tocha"];
//pertences.length aqui vale 3;

pertences.push ("amuleto mágico");
//agora pertences.length vale 4
```

Como podemos ver, o “push” adiciona um elemento à lista, o que faz com que seu tamanho aumente. 
Mas em que parte da lista você adiciona? No princípio? Ao final? No meio?


> Descubra você mesmo: inspecione o console que itens contêm “pertences”, adicione um “crossbow” e volte para inspecionar “pertences”.
>
> Ah e, além disso, existe um método “pop”, que não possui parâmetros. Investigue o que faz no console.

