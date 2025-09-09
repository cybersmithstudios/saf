
# SAF Furniture Website

A modern e-commerce website for Self Assembly Furniture (SAF), a proud subsidiary of Black Horse Plastics Ind. Ltd. The website showcases their collection of high-quality plastic rattan-style furniture.

## Features

- 📱 Fully responsive design
- 🛋️ Product catalog with detailed views
- 🛒 Enquiry system for products
- 📋 Custom order forms
- 📱 WhatsApp integration for direct communication
- 📬 Newsletter subscription
- 🗺️ Distributor locations
- 📱 Mobile-friendly navigation

## Built With

- React
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Framer Motion
- React Router
- Zustand (for state management)

## Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/cybersmithstudios/saf.git

# Navigate to project directory
cd saf-furniture

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── store/            # State management
├── data/            # Static data and configurations
├── types/           # TypeScript type definitions
└── hooks/           # Custom React hooks
```

## Cloudinary Video Streaming

Assembly videos are streamed via Cloudinary (HLS with MP4 fallback) on the Product Models page.

1) Create a `.env` file in the project root with:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

2) Upload your videos to Cloudinary and note their public IDs. Update the mapping in `src/components/ProductModels.tsx`:

```
const videoPublicIds = {
  "Lugano Single Setup": "saf/assembly/lugano-single",
  // ...
};
```

3) Ensure HLS/DASH delivery is enabled on your Cloudinary account (or MP4 will be used as a fallback).

## Contact Information

For inquiries about SAF Furniture:
- Email: info@saf-furniture.com
- Phone: 07 007 007 007
- Address: 11A Idejo Street, Off Adeola Odeku, Victoria Island, Lagos

## License

All rights reserved © 2024 Black Horse Plastics Ind. Ltd.
