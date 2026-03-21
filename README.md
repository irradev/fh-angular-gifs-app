# 🎬 GifsApp

Aplicación web para buscar, visualizar y gestionar GIFs utilizando la API de Giphy.

## 🚀 Características

* 🔎 Búsqueda de GIFs en tiempo real
* 📈 Sección de tendencias
* 🕘 Historial de búsquedas
* ⚡ Arquitectura basada en Angular (signals, facade, etc.)
* 🔐 Manejo seguro de API Keys

---

## 🛠️ Tecnologías

* Angular
* Giphy API
* TypeScript
* RxJS

---

## 📦 Instalación y ejecución

```bash
npm install
ng serve -o
```

---

## ⚠️ Configuración importante (API Key)

Este proyecto utiliza una API Key de Giphy que **NO está incluida en el repositorio por seguridad**.

Debes crear manualmente el archivo:

```
src/environments/environment-secrets.ts
```

### 🧩 Estructura del archivo

Puedes guiarte del archivo de ejemplo incluido:

```
src/environments/environment-secrets.example.ts
```

Crea el archivo real con el siguiente contenido:

```ts
export const environmentSecrets = {
  giphyApiKey: 'TU_API_KEY_AQUI'
};
```

---

## ⚙️ Configuración del environment

El proyecto ya está configurado para usar la API Key desde el archivo de secretos:

```ts
import { environmentSecrets } from "./environment-secrets";

export const environment = {
    production: false,
    companyName: 'Girfs',
    companyName2: 'App',
    companySlogan: 'Maneja tus gifs',
    giphyBaseUrl: 'https://api.giphy.com/v1',
    giphyApiKey: environmentSecrets.giphyApiKey
};
```

---

## ▶️ Ejecutar el proyecto

```bash
ng serve
```

Luego abre:

```
http://localhost:4200
```

---

## 📁 Estructura del proyecto (simplificada)

```
src/
│
├── app/
│   ├── components/
│   ├── facade/
│   ├── services/
│   └── pages/
│
├── environments/
│   ├── environment.ts
│   ├── environment-secrets.ts ❗ (NO incluido en git)
│   └── environment-secrets.example.ts
```

---

## 🔒 Seguridad

* La API Key está desacoplada del código público
* `environment-secrets.ts` está en `.gitignore`
* Nunca subas tu API Key al repositorio

---

## 💡 Notas

* Si la app no muestra GIFs, probablemente no configuraste la API Key correctamente.
* Puedes obtener una API Key gratis en Giphy.

---
