# Course Future (BrandName)

Landing page de cursos online feita em **HTML e CSS puros**, baseada em um design do Figma. O layout foi pensado para 1440px e adaptado para telas menores com media queries (abordagem *desktop-first*).

> O `<title>` da página é "School Affordable" e a marca exibida é "BrandName".

## Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS, media queries)
- Fonte [Montserrat](https://fonts.google.com/specimen/Montserrat) via Google Fonts
- JavaScript: o `script.js` existe, mas hoje só tem um `console.log`

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

O menu usa âncoras: **Home** → `#welcome`, **Product** → `#courses`, **Pricing** → `#price`, **Contact** → `#link`. O `scroll-behavior: smooth` está ativo no `html` e é desligado em telas de até 768px.

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
| `≤ 425px` | Títulos menores (h1 34px, h2 28px); **links do menu e o link "Login" ficam ocultos**; ajustes em brands, about e depoimentos |

## Boas práticas ao editar

1. Prefira `width: 100%` com `max-width`, e evite `width` fixa em px em containers.
2. Ao criar um bloco novo com largura fixa, adicione `max-width: 100%`.
3. Mexa nos tamanhos de título pelas variáveis `--h1-*` e `--h2-*`.
4. Teste em 360, 390, 768, 1024, 1280 e 1440px e confira se aparece scroll horizontal.

## Pendências e pontos de atenção

- **Navegação no celular:** abaixo de 425px os links do menu somem e não há menu hambúrguer, então nesse tamanho o usuário só navega rolando a página.
- **JavaScript:** `script.js` é só um placeholder. Um menu mobile e a validação do formulário da newsletter dependem dele.
- **Nomes de arquivo com espaço** em `product-cover-130 sec-.png` e `Frame sec-.png`. Renomeie, porque espaços em caminhos costumam causar problemas ao publicar.
- **Pasta `testimoial/`:** o nome está com erro de digitação. Se renomear, atualize os dois `src` no HTML.
- **`<br>` dentro dos parágrafos** forçam quebras de linha que ficam ruins em telas estreitas.
- **Imagem do hero** (`.welcome-img`) fica oculta em ≤ 1024px, o que foi uma decisão de layout. Entre 1025px e ~1180px ela pode cair abaixo do texto.
