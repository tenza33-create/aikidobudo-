# Configuración de imágenes del carrusel de fondo

## ¿Cómo funciona?

El sitio ahora tiene un **carrusel de fondo automático** que:
- Muestra imágenes a pantalla completa
- Las transpasa gradualmente cada 8 segundos (4s de transición suave + 4s de visualización)
- Incluye un overlay semi-transparente para que el contenido sea legible
- Se adapta a cualquier tamaño de pantalla

## Pasos para agregar tus imágenes

1. **Crea la carpeta `images/`** en la raíz del proyecto (ya está creada)

2. **Coloca tus imágenes con estos nombres:**
   - `img1.jpg` 
   - `img2.jpg`
   - `img3.jpg`
   - `img4.jpg`
   - `img5.jpg`
   - `img6.jpg`
   - `img7.jpg`
   - `img8.jpg`
   - `img9.jpg`
   - `img10.jpg`

3. **Optimiza las imágenes** (importante para carga rápida):
   - Resolución: entre 1920×1080 y 2560×1440px
   - Formato: JPG o WebP (recomendado WebP por tamaño)
   - Peso máximo: 200-300KB cada una

## Recomendaciones

- Selecciona imágenes que representen la esencia del aikido: técnicas, dojo, profesores, linaje
- Varía entre fotos modernas y archivos históricos para crear narrativa visual
- Asegúrate de que todas sean de buena calidad y contraste

## Ejemplo de estructura

```
aikidobudo-nueva/
├── index.html
├── styles.css
├── script.js
├── README-IMAGENES.md
└── images/
    ├── img1.jpg  ← Técnica en el dojo
    ├── img2.jpg  ← Instructor enseñando
    ├── img3.jpg  ← Morihei Ueshiba (archivo histórico)
    ├── img4.jpg  ← Práctica de grupo
    ... (hasta img10.jpg)
```

## Personalizar tiempos de transición

Si quieres cambiar la velocidad del carrusel, edita en `styles.css`:

```css
--carousel-fade: 5s;  /* Duración de la transición */
```

Y en `script.js`:

```javascript
setInterval(nextSlide, 8000);  /* 8000ms = 8 segundos entre cambios */
```

Reduce estos valores para un efecto más dinámico, aumenta para algo más contemplativo.
