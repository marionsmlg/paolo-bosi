# Paolo Bosi - Portfolio de Sculpteur

Portfolio React moderne pour le sculpteur Paolo Bosi, construit avec React, Vite et Tailwind CSS.

## 🚀 Installation

### Prérequis
- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

### Étapes d'installation

1. **Extraire le projet**
   ```bash
   # Décompresser l'archive téléchargée
   cd paolo-bosi-portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le site sera accessible à l'adresse : `http://localhost:5173`

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- **primary** : #1999b3
- **background-light** : #f5f1e9
- **background-dark** : #111e21

### Contenu
- **Galerie** : Modifiez les sculptures dans `src/Gallery.jsx`
- **Expositions** : Mettez à jour les expositions dans `src/Exhibitions.jsx`
- **Contact** : Modifiez l'email et les liens sociaux dans `src/Contact.jsx`

## 🌐 Déploiement

### Build pour la production
```bash
npm run build
```
Les fichiers compilés seront dans le dossier `dist/`

### Hébergement
Vous pouvez héberger ce site sur :
- **Netlify** : Glissez-déposez le dossier `dist/`
- **Vercel** : Importez le projet depuis GitHub
- **GitHub Pages** : Utilisez GitHub Actions
- **Tout serveur web** : Uploadez le contenu du dossier `dist/`

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Work Sans** - Police de caractères Google Fonts

## 📝 Structure du projet

```
paolo-bosi-portfolio/
├── src/
│   ├── App.jsx           # Composant principal
│   ├── Hero.jsx          # Section d'en-tête
│   ├── Gallery.jsx       # Galerie des sculptures
│   ├── Philosophy.jsx    # Section philosophie
│   ├── Exhibitions.jsx   # Liste des expositions
│   ├── Atelier.jsx       # Section atelier
│   ├── Contact.jsx       # Section contact
│   ├── main.jsx          # Point d'entrée React
│   └── index.css         # Styles globaux
├── index.html            # Template HTML
├── tailwind.config.js    # Configuration Tailwind
├── vite.config.js        # Configuration Vite
└── package.json          # Dépendances du projet
```

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌙 Mode sombre

Le site supporte le mode sombre. Pour l'activer, ajoutez la classe `dark` à la balise `<html>`.

## 📄 Licence

Tous droits réservés © Paolo Bosi

---

Pour toute question ou support, contactez : paolobosi63@gmail.com
