# Temak House Orlando

Cardápio responsivo em HTML, CSS e JavaScript, sem dependências de produção. Fotos, pratos, preços em USD e condições transcritos do PDF fornecido. JavaScript é a linguagem usada para interações no navegador.

## Rodar

Com Node.js 20 ou superior: `npm run dev`, depois abra http://127.0.0.1:4173.

## GitHub e Vercel

1. Crie um repositório no GitHub e envie o conteúdo desta pasta.
2. Na Vercel, importe esse repositório. Se enviar a pasta inteira, selecione `temaki-house` como Root Directory.
3. O arquivo vercel.json configura `npm run build` e a pasta `dist` automaticamente. Não há variáveis de ambiente.
4. Depois de publicar, use a URL HTTPS definitiva (idealmente um domínio próprio) como destino do QR code. O QR de avaliação do PDF não é o QR do cardápio.

O projeto está preparado para publicação; não inclui uma implantação ativa nem um QR code apontando para uma URL temporária.

## Atualizar

- Pratos, descrições, fotos, estrelas e categorias em inglês: `menu.js`.
- Interface bilíngue e traduções dos pratos: `locales.js`.
- Progresso da animação de tarê pela rolagem: `motion.js` e `app.js`.
- Preços do rodízio e condições: `index.html` (abertura e seção de preços).
- Cores, tamanhos e animações: `styles.css`.
- Fotografias extraídas do próprio PDF: `assets/`.
- Cardápio original: `cardapio.pdf`.

O menu tem versões em inglês e português, com seleção EN/PT e preferência salva no navegador. Os preços permanecem em dólares americanos. Não presume preços individuais, disponibilidade, endereço, telefone ou horários. Os asteriscos e destaques seguem o material original; confirme informações comerciais com o restaurante antes de publicar. Animações podem ser pausadas e respeitam a preferência de movimento reduzido do dispositivo. Fontes externas são opcionais, com alternativas locais.

## Abertura animada

A cena reutiliza exatamente os dois assets conceituais da Temak House criados no projeto Rise: `assets/temak-sushi-clean.jpg` e `assets/temak-sushi-sauce.jpg`. A revelação por máscara vertical suave (9%) é a mesma técnica da Rise, com suavização da rolagem e reversão ao subir. O molho, os reflexos e a gota fazem parte da imagem fotográfica; não há molho desenhado em SVG.

Não é uma simulação de fluidos ou vídeo: são duas imagens alinhadas com revelação progressiva, como na referência. O botão de pausa congela o quadro e o modo de movimento reduzido aplica a rolagem sem suavização. Os antigos arquivos `hashi-roll.*` são preservados como material da versão anterior e não são usados na página.

## Celular e desempenho

Layout construído a partir da tela pequena, com fundo verde contínuo (#000d08), bordas da cena suavizadas, botões de pelo menos 44 px, categorias deslizantes e itens em lista com descrições de 14 px. A partir de 700 px, o menu usa grade; a partir de 1100 px, quatro colunas.

As fotos têm variantes WebP de 320/640 px e carregamento sob demanda. O par fotográfico da abertura usa variantes idênticas em 640/1024/1536 px; `srcset` permite ao navegador escolher conforme largura e densidade da tela. As versões de 320 px somam 73% menos bytes que as imagens originais do menu; isso não é uma medição de tempo de carregamento. A animação escreve apenas quando o progresso muda. Pequenas variações de altura causadas pela barra do navegador móvel não refazem a geometria da cena.

Verificação: build, integridade dos assets e testes de dados/animação aprovados. Conferência visual no navegador com viewport móvel de 390 × 844 e desktop de 1440 × 1000, troca para português, 90 pratos renderizados e ausência de erros no console. Não substitui teste em aparelho físico.

## Remodelagem

Logo aplicada no topo e no rodapé em versão clara, com fundo transparente real: `assets/temak-logo-transparent.png` (1254 × 1254 px, RGBA), preparada pelo ImageGen integrado a partir da marca fornecida. Original preservada em `assets/temak-original-logo.png`. Categorias numeradas com introduções e condições de pedido, guia de uso em três etapas e listas específicas para itens sem foto. Entradas escalonadas ao rolar e abertura com transições, respeitando pausa e movimento reduzido.

Refinamento de movimento: entradas escalonadas em 110 ms, títulos com linhas douradas progressivas, imagens com zoom sutil e feedback de hover. Sem bibliotecas adicionais. Pausa e movimento reduzido mantêm o conteúdo imediatamente legível. Na última revisão, o navegador de prévia sinalizou movimento reduzido: apresentação estática verificada, sem validação visual do ritmo integral das transições.
