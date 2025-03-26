# Portfolio Website

This is my personal portfolio website built with [Next.js](https://nextjs.org), showcasing skills, and experience. It includes features like a contact form, dynamically rendered blog posts, and integration with Supabase for data storage.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Database**: [Supabase](https://supabase.com)
- **Email Service**: [Resend](https://resend.com)
- **Markdown Rendering**: [MDX](https://mdxjs.com)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_IMAGE_DOMAINS=your-supabase-domain
   NEXT_PUBLIC_RESUME_URL=https://your-supabase-storage-url/resume.pdf
   RESEND_API_KEY=your-resend-api-key
   FROM_EMAIL=no-reply@yourdomain.com
   CONTACT_EMAIL=contact@yourdomain.com
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

- **`/app`**: Contains the main pages of the application.
- **`/components`**: Reusable UI components like `Intro`, `Footer`, and `Header`.
- **`/lib`**: Utility functions and API integrations (e.g., Supabase and Resend).
- **`/emails`**: Email templates for the contact form.
- **`/public`**: Static assets like images.

## Deployment

The easiest way to deploy this project is using [Vercel](https://vercel.com). Follow these steps:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Add the environment variables in the Vercel dashboard.
4. Deploy your project.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Resend Documentation](https://resend.com/docs)

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own portfolio.

---

Feel free to reach out if you have any questions or suggestions!
