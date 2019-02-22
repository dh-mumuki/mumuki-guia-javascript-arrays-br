Se você pedir por um elemento em uma posição que seja igual ou maior que o tamanho da matriz, você receberá `undefined`. Não parece uma coisa terrível, mas o problema é que com algo indefinido você não pode fazer nada realmente útil.

Então você está avisado: não exagere!

> Tendo isso em mente, há um desafio: escreva novamente a função “medalhaDeAcordoComPosto”, mas desta vez usando apenas o máximo de um “if” apenas. Talvez os arrays possam ser úteis aqui:wink:.
>
> Ah, lembramos da função: você tem que devolver a medalha que corresponde às primeiras posições de uma competição:
>
> ```javascript
> ム medalhaDeAcordoComPosto (1)
> "ouro"
> ム medalhaDeAcordoComPosto (2)
> "prata"
> ム medalhaDeAcordoComPosto (3)
> "bronze"
>ムmedalhaDeAcordoComPosto (4)
> "nada"
> ム medalhaDeAcordoComPosto (5)
> "nada"

