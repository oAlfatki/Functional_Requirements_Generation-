# Functional Requirements Document

A React application for displaying and printing a structured Functional Requirements Document (FRD). The current sample document describes **Tasheel**, a travel ticket booking and financial operations management system. The document is presented in Arabic and can be printed or saved as a PDF through the browser's print dialog.

## Features

- Structured FRD sections for the project overview, functional and non-functional requirements, use cases, and workflow.
- Data dictionary, business rules, traceability matrix, assumptions, dependencies, and sign-off sections.
- Print-friendly document layout with page breaks and browser print/PDF support.
- TypeScript models for the FRD content.

The application currently renders bundled sample data. It does not include a data-entry interface, backend, or automatic requirements generation.

## Technology

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Base UI and Lucide icons

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Updating the Document

- Edit `src/data/mockFrdData.ts` to update the project metadata and FRD content.
- Refer to `src/types/frd.ts` for the data structure used by each section.
- The document is assembled in `src/components/FRDDocument.tsx`; its sections are implemented in `src/components/frd/`.

## Printing or Saving as PDF

Use the print button in the document toolbar. In the browser's print dialog, select a printer or choose **Save as PDF**. The print stylesheet is located at `src/styles/frd-print.css`.
