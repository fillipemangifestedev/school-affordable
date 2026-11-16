# Course Future (BrandName)

Landing page de cursos online feita em **HTML e CSS puros**, baseada em um design do Figma. O layout foi pensado para 1440px e adaptado para telas menores com media queries (abordagem *desktop-first*).

> O `<title>` da página é "School Affordable" e a marca exibida é "BrandName".

## Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS, media queries)
- Fonte [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google Fonts
- JavaScript puro (`script.js`): abre e fecha o formulário de orçamento

## Estrutura de pastas

```
.
├── index.html
└── assets/
    ├── css/
    │   ├── style.css         # estilos base (layout de 1440px)
    │   └── responsive.css    # ajustes para telas menores
    ├── js/
    │   └── script.js
    └── img/
        ├── hero-shape-dark-6.png
        ├── brands/           # logos (hooli, lyft, pied-piper, stripe, aws, reddit)
        ├── frame/            # ícones em molduras (cards "Practice Advice")
        ├── icon/             # estrelas, favoritos, carrinho, checks etc.
        ├── product/          # capas dos cursos
        ├── social/           # telefone, mapa, e-mail, redes sociais
        └── testimoial/       # fotos dos depoimentos (o nome da pasta está assim mesmo)
```

> A ordem de carregamento importa: o `responsive.css` precisa vir **depois** do `style.css` no `<head>` para sobrescrever os valores base.

## Como rodar

Não há build nem dependências. Basta abrir o `index.html` no navegador ou usar uma extensão como o Live Server do VS Code.

## Seções da página

| Seção | Classe / id | Conteúdo |
| --- | --- | --- |
| Header | `header` | Marca, links de navegação, Login e botão "Join Us" |
| Welcome | `#welcome` | Título "High Quality Courses", botões e imagem do hero |
| Brands | `.brands` | Logos de empresas parceiras |
| Action | `#action` | Texto e 4 cards ("Certified Teacher", "Training Courses") |
| Courses | `#courses` | Cards de cursos com preço, nota, vendas e botões de ação |
| About | `.about` | Imagem e texto institucional |
| Price | `#price` | Planos de preço com lista de benefícios |
| Testimonial | `.testimonial` | Depoimentos com estrelas |
| Newsletter | `.newsletter` | Formulário de e-mail |
| Footer | `footer` | Colunas de links (`#link`), contato e direitos autorais com redes sociais |
| Formulário de orçamento | `.form-help` | Pop-up lateral aberto pelo botão "Get Quote Now" (fora do `main`, no fim do `body`) |
| Máscara | `.form-mask` | Fundo escuro que cobre a tela com o formulário aberto |

O menu usa âncoras: **Home** → `#welcome`, **Product** → `#courses`, **Pricing** → `#price`, **Contact** → `#link`. O `scroll-behavior: smooth` está ativo no `html` e é desligado em telas de até 768px.

## Formulário de orçamento (pop-up)

O botão **Get Quote Now** (`.button-get`, no hero) abre um formulário com nome, e-mail e dúvida, e o botão "pedir orçamento".

Como funciona (`script.js`):

1. Ao clicar em `.button-get`, `formContact()` move o `.form-help` de `left: -350px` (fora da tela) para `left: 50%` com `translateX(-50%)` e deixa a `.form-mask` visível.
2. Ao clicar na `.form-mask`, `offMask()` faz o caminho contrário: devolve o formulário para fora da tela e esconde a máscara.

No CSS, o formulário é `position: fixed` com `width: min(350px, calc(100vw - 32px))`, então cabe em telas pequenas. A animação vem de `transition: 0.5s left`.

> Hoje o formulário **não envia nada**: `sendForm()` está vazia. Veja as pendências abaixo.

## CSS

### `style.css`

Organizado em blocos comentados na ordem da página: reset global, estilo global, header, main, cada seção e footer.

Todas as cores, sombras e tipografia ficam em variáveis no `:root`:

- `--txt-color-*` e `--background-color-*`: paleta
- `--shadow-*`: sombras
- `--font-family`
- `--h1-*` e `--h2-*`: tamanho, peso, altura de linha e espaçamento dos títulos

Alterar um título em todas as telas é só mudar essas variáveis, e é o que o `responsive.css` faz.

### Como o layout fica fluido

- `main` e `footer` usam `width: 100%` com `max-width: 1440px`. Não use largura fixa em px nesses elementos.
- `main` tem padding lateral `clamp(16px, 4vw, 60px)`.
- `main > section` tem `max-width: 100%`, para nenhuma seção ser mais larga que o `main`.
- Elementos que mantêm a largura do design no desktop (`width: 542px`, por exemplo) também têm `max-width: 100%`, e por isso encolhem em telas menores.

### `responsive.css`

| Breakpoint | O que muda |
| --- | --- |
| `≤ 1280px` | Header e gaps menores; `nav` com `gap` fluido |
| `≤ 1024px` | Imagem do hero oculta; paddings das seções reduzidos; cards centralizados; rodapé inferior reorganizado |
| `≤ 768px` | Header empilhado; títulos menores (h1 44px, h2 32px); cards sem o deslocamento em "escada"; formulário da newsletter em largura total |
| `≤ 480px` | Títulos menores (h1 34px, h2 28px); **links do menu e o link "Login" ficam ocultos**; ajustes em brands, about e depoimentos |

## Boas práticas ao editar

1. Prefira `width: 100%` com `max-width`, e evite `width` fixa em px em containers.
2. Ao criar um bloco novo com largura fixa, adicione `max-width: 100%`.
3. Mexa nos tamanhos de título pelas variáveis `--h1-*` e `--h2-*`.
4. Teste em 360, 390, 768, 1024, 1280 e 1440px e confira se aparece scroll horizontal.

## Pendências e pontos de atenção

- **Navegação no celular:** abaixo de 480px os links do menu somem e não há menu hambúrguer, então nesse tamanho o usuário só navega rolando a página.
- **Erro no `script.js`:** a última linha usa `formButton.addEventListener(...)`, mas essa variável não existe (a declarada é `inputButton`). Isso gera um `ReferenceError` no console. O botão "Subscribe" fica sem evento, e a função `sendInput()` só lê o valor e não faz nada com ele.
- **Envio do formulário:** `sendForm()` está vazia, e o botão é `type="submit"`, então clicar nele recarrega a página sem enviar nada. Falta um `event.preventDefault()` e um destino para os dados (e-mail, WhatsApp, API ou serviço de formulários). O mesmo vale para o formulário da newsletter.
- **Idioma misturado:** a página está em inglês, mas o formulário de orçamento está em português (`SEU NOME`, `pedir orçamento`), e o `<html>` declara `lang="en"`.
- **Acessibilidade do pop-up:** com o formulário fora da tela, ele continua focável pelo teclado (Tab), e não há tecla Esc nem botão para fechar. Só dá para fechar clicando na máscara.
- **Menu mobile:** ainda depende do `script.js`, que é onde um menu hambúrguer poderia entrar.
- **Nomes de arquivo com espaço** em `product-cover-130 sec-.png` e `Frame sec-.png`. Renomeie, porque espaços em caminhos costumam causar problemas ao publicar.
- **Pasta `testimoial/`:** o nome está com erro de digitação. Se renomear, atualize os dois `src` no HTML.
- **`<br>` dentro dos parágrafos** forçam quebras de linha que ficam ruins em telas estreitas.
- **Imagem do hero** (`.welcome-img`) fica oculta em ≤ 1024px, o que foi uma decisão de layout. Entre 1025px e ~1180px ela pode cair abaixo do texto.
