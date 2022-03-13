Esse projeto explora tópicos de performance do React

## Performance e Renderizações no React

Renderização de pai para filho
Propriedade
Hooks (useState, useContext, useReducer)

## Fluxo de renderização

   1º Gerar uma nova versão do componente que precisa ser renderizado; 
   2º Comparar essa nova versão com a versão anterior já salva na página; 
   3º Se houverem alterações, o React "renderiza" essa nova versão em tela; 

   O React utiliza o algoritmo de Reconciliação e Diferenciação "Diffing" 

   [Documentação] (pt-br.reactjs.org/docs/reconciliation.html)
