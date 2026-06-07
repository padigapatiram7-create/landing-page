# Image Placement Guide

Place your images in the `src/assets/images/` folder with the following filenames:

## Required Images

| Filename | Description | Recommended Size | Image Type |
|----------|-------------|------------------|-----------|
| `hero-dentist.jpg` | Main hero section dentist portrait | 500x600px | JPG/PNG |
| `rct-standard.jpg` | Standard RCT treatment image | 400x300px | JPG/PNG |
| `rct-laser.jpg` | Laser RCT treatment image | 400x300px | JPG/PNG |
| `rct-retreat.jpg` | Re-Treatment RCT image | 400x300px | JPG/PNG |
| `video-equipment.jpg` | Dental equipment/technology image | 600x400px | JPG/PNG |
| `clinic-map.jpg` | India map showing clinic locations | 800x400px | JPG/PNG |

## Folder Structure

```
src/
├── assets/
│   └── images/
│       ├── hero-dentist.jpg
│       ├── rct-standard.jpg
│       ├── rct-laser.jpg
│       ├── rct-retreat.jpg
│       ├── video-equipment.jpg
│       └── clinic-map.jpg
├── App.jsx
├── App.css
└── main.jsx
```

## Steps

1. Create the `src/assets/images/` folder (already created)
2. Save your images with the exact filenames listed above
3. Rebuild the app: `npm run build`
4. Start dev server: `npm run dev`

Once images are in place, the warnings will disappear and the landing page will display them correctly.
