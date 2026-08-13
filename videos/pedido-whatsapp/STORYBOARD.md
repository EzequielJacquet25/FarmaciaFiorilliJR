---
format: 1080x1920
duration: 30s
message: "Pedir un preparado magistral por WhatsApp es simple, seguro y acompañado por la farmacia."
arc: Hook → Inicio de chat → Receta → Cotización y validación → Elaboración → Aviso de retiro
audience: "Pacientes de Farmacia Fiorilli JR"
mode: autonomous
music: none
---

## Video direction

Paleta: verde institucional para acciones y confianza, tinta verde profundo para lectura y fondo claro para cercanía. Las entradas son suaves y secuenciales, con un elemento principal por escena y pausas de lectura al final de cada paso. No se usan texturas, navegación de navegador, efectos estridentes, slideshow front-loaded ni elementos flotando sin intención.

## Frame 1 — Iniciar el pedido

- scene: Título y un chat de WhatsApp que se abre con el primer paso.
- duration: 6s
- poster: 3s
- transition_in: cut
- status: animated
- voiceover: "¿Necesitás un preparado? Iniciá tu pedido por WhatsApp."
- src: compositions/frames/01-iniciar-pedido.html
- type: hook
- asset_candidates: typografía e iconografía integrada
- blueprint: kinetic-type-beats (Adapt)

Scene 1 (0.0–2.0s): título centrado en el tercio superior; el mensaje clave aparece de forma secuencial. Scene 2 (2.0–5.0s): tarjeta de chat se eleva y revela el botón de WhatsApp. Scene 3 (5.0–6.0s): sostén para lectura.

## Frame 2 — Enviar la receta

- scene: Una receta clara llega al chat cuando el preparado la requiere.
- duration: 6s
- poster: 3s
- transition_in: crossfade
- status: animated
- voiceover: "Si corresponde, enviá una foto clara de tu receta."
- src: compositions/frames/02-enviar-receta.html
- type: feature_showcase
- asset_candidates: tipografía e iconografía integrada
- blueprint: prompt-type-submit-generate (Adapt)

Scene 1 (0.0–2.0s): indicador 2 de 5 y titular. Scene 2 (2.0–5.0s): tarjeta de receta entra en el chat con una marca de verificación. Scene 3 (5.0–6.0s): nota breve sobre receta según corresponda.

## Frame 3 — Cotización y validación

- scene: La farmacia revisa la receta y comparte el presupuesto.
- duration: 6s
- poster: 3s
- transition_in: crossfade
- status: animated
- voiceover: "Recibís la cotización y validamos la receta antes de elaborar."
- src: compositions/frames/03-cotizacion-validacion.html
- type: benefit_highlight
- asset_candidates: tipografía e iconografía integrada
- blueprint: constellation-hub (Adapt)

Scene 1 (0.0–2.0s): titular y estado de paso. Scene 2 (2.0–4.5s): dos tarjetas — cotización y validación — aparecen en secuencia. Scene 3 (4.5–6.0s): sello de atención profesional queda visible.

## Frame 4 — Elaboración

- scene: Un laboratorio estilizado representa la preparación por especialistas.
- duration: 6s
- poster: 3s
- transition_in: crossfade
- status: animated
- voiceover: "Nuestros especialistas elaboran tu fórmula en el laboratorio."
- src: compositions/frames/04-elaboracion.html
- type: product_intro
- asset_candidates: tipografía e iconografía integrada
- blueprint: zoom-out-workspace-reveal (Adapt)

Scene 1 (0.0–2.0s): titular y paso 4 de 5. Scene 2 (2.0–5.0s): frasco y elementos de laboratorio se revelan. Scene 3 (5.0–6.0s): mensaje de elaboración personalizada permanece quieto.

## Frame 5 — Confirmación de retiro

- scene: Una tarjeta de retiro en farmacia confirma el pedido y acompaña el CTA.
- duration: 6s
- poster: 3s
- transition_in: crossfade
- status: animated
- voiceover: "Te confirmamos por WhatsApp cuando tu preparado está listo para retirar."
- src: compositions/frames/05-aviso-retiro.html
- type: cta
- asset_candidates: tipografía e iconografía integrada
- blueprint: cta-morph-press (Adapt)

Scene 1 (0.0–2.0s): titular directo y paso final. Scene 2 (2.0–4.5s): tarjeta de retiro en farmacia confirma la disponibilidad con una marca visible. Scene 3 (4.5–6.0s): CTA de WhatsApp queda en pantalla para lectura.
